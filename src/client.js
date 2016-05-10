require('./theme/style/main.scss');
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createRoutes from 'routes/routes';
import reducer from 'reducers';
import { browserHistory } from 'react-router';

function configureStore(initialState) {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(
      thunkMiddleware
    )
  );
}

const store = configureStore();
/* Pass the componet through from react-router */
render(
  <Provider store={store} key="provider">
    {createRoutes(browserHistory)}
  </Provider>,
  document.getElementById('root')
);
