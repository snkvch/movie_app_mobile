import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Flipper from 'redux-flipper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewareToApply = [sagaMiddleware];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['movies', 'details', 'user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

if (__DEV__) {
  const createDebugger = Flipper;
  middlewareToApply.push(createDebugger() as never);
}

const middleware = applyMiddleware(...middlewareToApply);
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default { store, persistor };
