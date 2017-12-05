import { combineEpics } from 'redux-observable';

import searchEpic from '../components/search/redux/searchEpic';
import { retryTrackViewEpic, trackViewsEpic } from './track-views-epic';
import viewStorageEpic from './view-storage-epic';

const rootEpic = combineEpics(
  retryTrackViewEpic,
  searchEpic,
  trackViewsEpic,
  viewStorageEpic
);

export default rootEpic;
