// import { ajax } from 'rxjs/observable/dom/ajax';
import { of as ObsOf } from 'rxjs/observable/of';
import {
  types,
  setCurrentLiveViews
} from './';

const {
  getCurrentLiveViews
} = types;

const initialCount = 0;

export function getLiveViews(action$) {
  return action$
    .ofType(getCurrentLiveViews)
    .mergeMap(() => {
      return ObsOf(setCurrentLiveViews(initialCount));
      // return ajax.getJSON(url)
      //   .map(response => setCurrentLiveViews(response));
    });
}
