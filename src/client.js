import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { Home } from 'containers';
import reducer from 'reducers';

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
console.log(store);
console.log(store.getState());

render(
  <Provider store={store} key="provider">
    <div>
      <Home />
    </div>
  </Provider>,
  document.getElementById('root')
);

// <Router history={browserHistory} children={routes} key={key} />

// <Provider store={store} key="provider">
//   <div>Hello World</div>
// </Provider>,
