import { of as ObsOf } from 'rxjs/observable/of';
import { from as ObsFrom } from 'rxjs/observable/from';
import { ajax } from 'rxjs/observable/dom/ajax';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { map } from 'rxjs/operators/map';
import { catchError } from 'rxjs/operators/catchError';
import { ofType } from 'redux-observable';
import {
  nullAction,
  trackViewFail,
  trackResourceView as trackAction,
  trackViewSuccess,
  types
} from './';

const { foundStoredViews, trackResourceView, updateOnlineStatus } = types;

const url = 'http://localhost:7000/news/v1/increment-views';

export function trackViewsEpic(action$) {
  return action$.pipe(
    ofType(trackResourceView),
    mergeMap(({ payload }) =>
      ajax.getJSON(`${url}/${payload}`).pipe(
        map(({ status, id }) =>
          status === 'success' ? trackViewSuccess(id) : trackViewFail(id)
        ),
        catchError(() => ObsOf(trackViewFail(payload)))
      )
    )
  );
}

export function retryTrackViewEpic(action$, { getState }) {
  return action$.pipe(
    ofType(updateOnlineStatus, foundStoredViews),
    mergeMap(({ payload }) => {
      // if payload !== Array, it is from updateOnlineStatus
      if (!Array.isArray(payload) && !payload) {
        return ObsOf(nullAction());
      }
      const { failedViewCounts } = getState().app;
      return ObsFrom(failedViewCounts.map(id => trackAction(id)));
    })
  );
}
