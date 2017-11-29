import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootEpic from './epics';
import rootReducer from './reducers';

const epicMiddleware = createEpicMiddleware(rootEpic);

const createStore = () =>
  reduxCreateStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(epicMiddleware))
  );

export default createStore;
