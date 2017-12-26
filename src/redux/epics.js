import 'rxjs';
import { combineEpics } from 'redux-observable';

import searchEpic from '../components/search/redux/searchEpic';
import { retryTrackViewEpic, trackViewsEpic } from './track-views-epic';
import viewStorageEpic from './view-storage-epic';
import { getLiveViews } from './realtime-view-epic';

const rootEpic = combineEpics(
  retryTrackViewEpic,
  searchEpic,
  trackViewsEpic,
  viewStorageEpic,
  getLiveViews
);

export default rootEpic;
