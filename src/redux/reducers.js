import { combineReducers } from 'redux';
import { reducer as search } from '../components/search/redux';
import { reducer as app } from './';

const rootReducer = combineReducers({
  app,
  search
});

export default rootReducer;
