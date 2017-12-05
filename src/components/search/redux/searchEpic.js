import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';
import axios from 'axios';

import { fetchSearchResults, types, updateSearchResults } from './';
import { normaliser } from './resultNormaliser';

let previousSearchTerm = '';
const requestUrl = 'https://search.freecodecamp.org';
const nullAction = { type: 'null' };

function searchTermEpic(actions$, { getState }) {
  const Xms = 500;
  const source$ = actions$.filter(
    ({ type }) => type === types.updateSearchTerm
  );

  return Observable.merge(
    source$.debounceTime(Xms),
    source$.throttleTime(Xms).distinctUntilChanged()
  ).flatMap(() => {
    const { searchTerm } = getState().search;
    // if the search term is over 2 chars and
    // this is not a throttle/debounce echo
    if (
      searchTerm.length > 2 &&
      searchTerm.length !== previousSearchTerm.length
    ) {
      previousSearchTerm = searchTerm.slice(0);
      return Observable.of(fetchSearchResults());
    }
    previousSearchTerm = searchTerm.slice(0);
    return Observable.of(nullAction);
  });
}

function searchEpic(actions$, { getState }) {
  return actions$
    .filter(({ type }) => type === types.fetchSearchResults)
    .flatMap(() => {
      if (typeof window !== 'undefined' && !('Promise' in window)) {
        return Observable.of(nullAction);
      }
      const { searchTerm } = getState().search;
      return axios
        .get(`${requestUrl}/search?q=${searchTerm}`)
        .then(response => {
          return response.data;
        })
        .then(data => {
          const results = normaliser(data);
          return updateSearchResults(results);
        })
        .catch(err => {
          console.error(err);
          return updateSearchResults([]);
        });
    });
}

export default combineEpics(searchEpic, searchTermEpic);
