import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Home } from 'containers';
import { HelloWorld } from 'components';
import reducer from 'reducers';


const store = createStore(reducer);
console.log(store);
console.log(store.getState());
// import ApiClient from './helpers/ApiClient';
// const dest = document.getElementById('root');
// const client = new ApiClient();
// const store = createStore();
// <HelloWorld count={10} className="hello-mars" />

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
