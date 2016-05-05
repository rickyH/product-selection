import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Home } from 'containers';
import reducer from 'reducers';

const store = createStore(reducer);
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
