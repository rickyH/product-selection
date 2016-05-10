import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import {
  App,
  Home,
  ProductSelection,
  ConfirmationPage
} from 'containers';

/* Set up the routes for the application */
export default function (history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="product-selection" component={ProductSelection} />
        <Route path="confirmation" component={ConfirmationPage} />
        <IndexRoute component={Home} />
      </Route>
    </Router>
  );
}
