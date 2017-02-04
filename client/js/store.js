import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import * as reducers from './reducers/reducers';

const store = createStore(reducers.goalReducer, applyMiddleware(thunk));
// const store = createStore(reducers.goalReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

// export default createStore(reducers.goalReducer, applyMiddleware(thunk));
