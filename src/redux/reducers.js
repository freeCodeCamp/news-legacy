import { combineReducers } from 'redux';
import { reducer as search } from '../components/search/redux';

const rootReducer = combineReducers({
  search
});

export default rootReducer;
