import { createStore } from 'redux';
import roleReducer from './reducer/reducer';

const store = createStore(roleReducer);

export default store;