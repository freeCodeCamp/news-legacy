import { of as ObsOf } from 'rxjs/observable/of';
import { from as ObsFrom } from 'rxjs/observable/from';
import { ajaxGetJSON } from 'rxjs/observable/dom/AjaxObservable';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { ofType } from 'redux-observable';
import {
  nullAction,
  trackViewFail,
  trackResourceView as trackAction,
  trackViewSuccess,
  types
} from './';

const { foundStoredViews, trackResourceView, updateOnlineStatus } = types;

const url = 'https://search.freecodecamp.org/news/v1/increment-views';

export function trackViewsEpic(action$) {
  return action$.pipe(
    ofType(trackResourceView),
    mergeMap(({ payload }) =>
      ajaxGetJSON(`${url}/${payload}`)
        .map(resp => ObsOf(resp))
        .catch(() => ObsOf({ status: 'fail', id: payload }))
    ),
    mergeMap(({ value: { status, id } }) => {
      return ObsOf(
        status === 'success' ? trackViewSuccess(id) : trackViewFail(id)
      );
    })
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
