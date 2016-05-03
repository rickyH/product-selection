import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import reducers from '../reducers';

export default (initialState = {} /*  , history */) => {
  const middleware = applyMiddleware(thunk, routerMiddleware(history));

  const store = createStore(
   reducers,
   initialState,
   middleware
 );
  return store;
};
