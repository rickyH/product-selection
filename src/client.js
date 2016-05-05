import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { browserHistory, Router } from 'react-router';
// import createStore from './store/create';
import { HelloWorld } from './Components';

// import ApiClient from './helpers/ApiClient';
// const dest = document.getElementById('root');
// const client = new ApiClient();
// const store = createStore();

render(
  <HelloWorld count={10} className="hello-mars" />,
  document.getElementById('root')
);

// <Router history={browserHistory} children={routes} key={key} />

// <Provider store={store} key="provider">
//   <div>Hello World</div>
// </Provider>,
