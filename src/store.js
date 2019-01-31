import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const reducers = combineReducers({})

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
