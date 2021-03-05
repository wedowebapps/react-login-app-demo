import {
  createStore,
  applyMiddleware
} from 'redux';
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import reducers from '../reducers';
import sagas from "../sagas";

import {
  createLogger
} from 'redux-logger';

export const history = createBrowserHistory()

const logger = createLogger({
  level: 'info',
  collapsed: true
});

const sagaMiddleware = createSagaMiddleware();

let middlewares;

if (process.env.NODE_ENV === 'development') {
  middlewares = [sagaMiddleware, logger, routerMiddleware(history)];
} else {
  middlewares = [sagaMiddleware, routerMiddleware(history)];
}

export function configureStore(initialState) {

  const store = createStore(
    reducers(history),
    initialState,
    applyMiddleware(...middlewares)
  );

  sagaMiddleware.run(sagas);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}