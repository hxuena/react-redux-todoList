import {createStore} from 'redux';

import reducer from './reducer';

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); //把笔记本传给store

export default store;