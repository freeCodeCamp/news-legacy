import { Observable } from 'rx';
import { combineEpics } from 'redux-epic';

import {
  fetchSearchResults,
  types,
  updateSearchResults
} from './';

let previousSearchTerm = '';
const requestUrl = 'https://search.freecodecamp.org';
const nullAction = { type: 'null' };

function searchTermEpic(actions$, { getState }) {
  const Xms = 500;
  const source$ = actions$
    .filter(({ type }) => type === types.updateSearchTerm);

  return Observable.merge(
    source$.debounce(Xms),
    source$.throttle(Xms).distinctUntilChanged()
    )
    .flatMap(() => {
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

function truncate(text) {
  return text.slice(0, 141) + '...';
}

function searchEpic(actions$, { getState }) {
  return actions$
    .filter(({ type }) => type === types.fetchSearchResults)
    .flatMap(() => {
      const { searchTerm, articles } = getState().search;
    });

}

export default combineEpics(searchEpic, searchTermEpic);
