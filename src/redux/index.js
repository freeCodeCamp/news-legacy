import { createTypes } from 'redux-create-types';
import { createAction, handleActions } from 'redux-actions';
import pull from 'lodash/pull';
import union from 'lodash/union';

const isOnline =
  typeof window !== 'undefined' &&
  'navigator' in window &&
  'onLine' in window.navigator
    ? window.navigator.onLine
    : false;

const initialState = {
  failedViewCounts: [],
  pendingViewCounts: [],
  isOnline
};

export const types = createTypes(
  [
    'clearFailedCounts',
    'foundStoredViews',
    'getStoredViews',
    'trackResourceView',
    'trackViewFail',
    'trackViewSuccess',
    'updateFailedViewStorage',
    'updatePendingViewCounts',
    'updateOnlineStatus'
  ],
  'app'
);

export const clearFailedCounts = createAction(types.clearFailedCounts);
export const foundStoredViews = createAction(types.foundStoredViews);
export const getStoredViews = createAction(types.getStoredViews);
export const nullAction = createAction('NULL_ACTION');
export const trackResourceView = createAction(types.trackResourceView);
export const trackViewSuccess = createAction(types.trackViewSuccess);
export const trackViewFail = createAction(types.trackViewFail);
export const updateFailedViewStorage = createAction(
  types.updateFailedViewStorage
);
export const updatePendingViewCounts = createAction(
  types.updatePendingViewCounts
);
export const updateOnlineStatus = createAction(types.updateOnlineStatus);

export const reducer = handleActions(
  {
    [types.foundStoredViews]: (state, { payload }) => ({
      ...state,
      failedViewCounts: union(state.failedViewCounts, payload)
    }),
    [types.trackViewSuccess]: (state, { payload }) => ({
      ...state,
      failedViewCounts: pull(state.failedViewCounts, payload),
      pendingViewCounts: pull(state.pendingViewCounts, payload)
    }),
    [types.trackViewFail]: (state, { payload }) => ({
      ...state,
      failedViewCounts: union(state.failedViewCounts, [payload]),
      pendingViewCounts: pull(state.pendingViewCounts, payload)
    }),
    [types.updatePendingViewCounts]: (state, { payload }) => ({
      ...state,
      pendingViewCounts: union(state.pendingViewCounts, [payload])
    }),
    [types.updateOnlineStatus]: (state, { payload }) => ({
      ...state,
      isOnline: payload
    })
  },
  initialState
);
