import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';

import createStore from './src/redux/store';


function renderConnectedBody(reduxStore, body) {
  return (
    <Provider store={ reduxStore }>
      { body }
    </Provider>
  );
}
exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const store = createStore();
  const providerWrappedBodyString = renderToString(
      renderConnectedBody(store, bodyComponent)
  );
  replaceBodyHTMLString(providerWrappedBodyString);
};
