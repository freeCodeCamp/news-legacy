import { of as ObsOf } from 'rxjs/observable/of';
import { merge as ObsMerge } from 'rxjs/observable/merge';
import {debounceTime} from 'rxjs/operators/debounceTime';
import { throttleTime } from 'rxjs/operators/throttleTime';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { combineEpics} from 'redux-observable';
import axios from 'axios';

import { fetchSearchResults, types, updateSearchResults } from './';
import { normaliser } from './resultNormaliser';

let previousSearchTerm = '';
const requestUrl = 'https://search.freecodecamp.org';
const nullAction = { type: 'null' };

function searchTermEpic(actions$, { getState }) {
  const Xms = 500;
  const source$ = actions$.ofType(types.updateSearchTerm);

  return ObsMerge(
    source$
      .pipe(
        debounceTime(Xms),
        throttleTime(Xms)
      )
    ).pipe(
      mergeMap(() => {
        const { searchTerm } = getState().search;
        // if the search term is over 2 chars and
        // this is not a throttle/debounce echo
        if (
          searchTerm.length > 2 &&
          searchTerm.length !== previousSearchTerm.length
        ) {
          previousSearchTerm = searchTerm.slice(0);
          return ObsOf(fetchSearchResults());
        }
        previousSearchTerm = searchTerm.slice(0);
        return ObsOf(nullAction);
      })
    );
}

function searchEpic(actions$, { getState }) {
  return actions$.ofType(types.fetchSearchResults).pipe(
    mergeMap(() => {
      if (typeof window !== 'undefined' && !('Promise' in window)) {
        return ObsOf(nullAction);
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
    })
  );
}

export default combineEpics(searchEpic, searchTermEpic);
