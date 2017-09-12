import { createStore } from 'redux';
import rootReducer from './reducers';

// pass in root reducer + initial state to create the redux store
export default (initialState) => {
  return createStore(rootReducer, initialState)
}