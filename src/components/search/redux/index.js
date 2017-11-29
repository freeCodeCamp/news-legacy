import { createTypes } from 'redux-create-types';
import { createAction, handleActions } from 'redux-actions';

const initialState = {
  isFetching: false,
  lastPage: '/',
  results: [],
  searchData: [],
  searchTerm: ''
};

export const types = createTypes(
  [
    'fetchSearchData',
    'dataFetched',
    'resetSearch',
    'updateLastPage',
    'updateSearchResults',
    'updateSearchTerm'
  ],
  'search'
);

export const fetchSearchData = createAction(types.fetchSearchData);
export const dataFetched = createAction(types.dataFetched);
export const resetSearch = createAction(types.resetSearch);
export const updateLastPage = createAction(types.updateLastPage);
export const updateSearchResults = createAction(types.updateSearchResults);
export const updateSearchTerm = createAction(types.updateSearchTerm);

export const reducer = handleActions(
  {
    [types.fetchSearchData]: state => ({
      ...state,
      isFetching: true
    }),
    [types.dataFetched]: (state, { payload }) => ({
      ...state,
      searchData: payload
    }),
    [types.resetSearch]: state => ({
      ...state,
      results: [],
      searchTerm: ''
    }),
    [types.updateLastPage]: (state, { payload }) => ({
      ...state,
      lastPage: payload
    }),
    [types.updateSearchResults]: (state, { payload = [] }) => ({
      ...state,
      results: payload
    }),
    [types.updateSearchTerm]: (state, { payload }) => ({
      ...state,
      searchTerm: payload
    })
  },
  initialState
);
