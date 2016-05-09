import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import productSelection from './productSelection/productSelection';
import confirmation from './confirmation/confirmation';

/* Combine the all reducers into one */
export default combineReducers({
  routing: routerReducer,
  productSelection,
  confirmation
});
