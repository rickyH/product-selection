import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
/* TODO: shouldn't the reducer live in the component */
import helloworld from './helloworld/helloworld';

export default combineReducers({
  routing: routerReducer,
  helloworld
});
