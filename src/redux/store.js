// import { createStore, applyMiddleware } from 'redux';
// import { persistStore } from 'redux-persist';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from "redux-devtools-extension";

// import logger from 'redux-logger';

// import rootReducer from './rootReducer';

// const middlewares = [thunk];

// if (process.env.NODE_ENV === 'development') {
//   middlewares.push(logger);
// }
// export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// export const persistor = persistStore(store);

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import rootReducer from './rootReducer';

const middleWare = [thunk];

const enhanceMiddleware =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middleWare))
    : applyMiddleware(...middleWare);

export const store = createStore(rootReducer, enhanceMiddleware);
// sagaMiddleware.run(rootSaga);

// export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

// export default store;

export default { store, persistor };
