import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import counter from './counter/counter.reducer'

const reducers = combineReducers({
  counter
})

const middlewares = [thunk]
let enhancer = applyMiddleware(...middlewares)

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger')
  middlewares.push(logger)
  enhancer = composeWithDevTools(applyMiddleware(...middlewares))
}

export default (initialState) => (
  createStore(
    reducers,
    initialState,
    enhancer
  )
)
