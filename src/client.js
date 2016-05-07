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

render(
  <Provider store={store} key="provider">
    {createRoutes(browserHistory)}
  </Provider>,
  document.getElementById('root')
);

// <Router history={browserHistory} children={routes} key={key} />

// <Provider store={store} key="provider">
//   <div>Hello World</div>
// </Provider>,
