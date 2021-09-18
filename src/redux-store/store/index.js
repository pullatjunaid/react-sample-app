import { createStore, applyMiddleware } from 'redux'
import reduxPromiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import Reducer from '../reducers'
import logger from 'redux-logger'

const middleware = applyMiddleware(reduxPromiseMiddleware, thunk,logger)
const store = createStore(Reducer, middleware)

export default store;