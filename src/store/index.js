import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './duck';
import rootSaga from './saga';

import '../config/reactotronConfig';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware]

const composer = process.env.NODE_ENV === 'development'
  ? compose(
    applyMiddleware( ...middlewares),
    console.tron.createEnhancer()
  )
  : applyMiddleware( ...middlewares)

const store = createStore(rootReducer, composer)

sagaMiddleware.run(rootSaga)

export default store;
