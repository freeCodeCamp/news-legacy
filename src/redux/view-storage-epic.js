/*
  This epic is used to store view counts if there was an error in the increment
  api request.

  They will be held in localStorage until the app starts again or the network
  status changes. At this point we will try the api again.
*/
import { of as ObsOf } from 'rxjs/observable/of';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { ofType, combineEpics } from 'redux-observable';
import store from 'store';
import union from 'lodash/union';
import pull from 'lodash/pull';
import { types, nullAction, getStoredViews, foundStoredViews } from './';

const { trackViewFail, trackViewSuccess } = types;

const failedCountKey = 'failed-view-counts';

function getStore(key) {
  return store.get(key) || [];
}

export function storeCountsEpic(action$, { getState }) {
  return action$.pipe(
    ofType(trackViewFail),
    mergeMap(() => {
      const { failedViewCounts } = getState().app;
      const currentFails = getStore(failedCountKey);
      store.set(failedCountKey, union(currentFails, failedViewCounts));
      return ObsOf(nullAction());
    })
  );
}

export function removeCountEpic(action$) {
  return action$.pipe(
    ofType(trackViewSuccess),
    mergeMap(({ payload }) => {
      const currentFails = getStore(failedCountKey);
      store.set(failedCountKey, pull(currentFails, payload));
      return ObsOf(nullAction());
    })
  );
}

export function retrieveCountsEpic(action$) {
  return action$.pipe(
    ofType(getStoredViews),
    mergeMap(() => {
      const currentFails = getStore(failedCountKey);
      return currentFails.length > 0
        ? ObsOf(foundStoredViews(currentFails))
        : ObsOf(nullAction());
    })
  );
}

export default combineEpics(
  storeCountsEpic,
  removeCountEpic,
  retrieveCountsEpic
);
