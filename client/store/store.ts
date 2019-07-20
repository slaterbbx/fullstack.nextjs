import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
		// @ts-ignore
    const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    return composeEnhancers(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const makeStore = () => {
  const store = createStore(
    combineReducers(reducers),
    bindMiddleware([sagaMiddleware])
	)
	// @ts-ignore
  store.runSagaTask = () => {
		// @ts-ignore
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }
	// @ts-ignore
  store.runSagaTask()
  return store
}

export default makeStore