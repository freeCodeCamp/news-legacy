import React from 'react';
import PropTypes from 'prop-types';
import { Router as BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import createStore from './src/redux/store';

const propTypes = {
  children: PropTypes.node.isRequired
};

const store = createStore();

exports.replaceRouterComponent = ({ history }) => {
  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <BrowserRouter history={history}>{children}</BrowserRouter>
    </Provider>
  );
  ConnectedRouterWrapper.displayName = 'ConnectRouterWrapper';
  ConnectedRouterWrapper.propTypes = propTypes;

  return ConnectedRouterWrapper;
};
