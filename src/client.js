import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { browserHistory, Router } from 'react-router';
import createStore from './store/create';

// import ApiClient from './helpers/ApiClient';
const dest = document.getElementById('content');
// const client = new ApiClient();
const store = createStore();

ReactDOM.render(
  <Provider store={store} key="provider">
    <div>Hello World</div>
  </Provider>,
  dest
);

// <Router history={browserHistory} children={routes} key={key} />
