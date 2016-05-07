import React from 'react';
// import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
// import configureStore from 'store/configureStore';

import {
  App,
  Home,
  ProductSelection
} from 'containers';

export default function (history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="product-selection" component={ProductSelection} />
        <IndexRoute component={Home} />
      </Route>
    </Router>
  );
}
