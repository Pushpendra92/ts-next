import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const saga = createSagaMiddleware();

const initialState = {};
const middlewares = [thunk, saga];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

saga.run(rootSaga);

export default store;
