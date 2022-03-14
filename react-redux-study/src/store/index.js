import {createStore,applyMiddleware,compose} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

// 利用compose创造一个增强函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

// 通过增强函数，引入thunk
const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(reducer,enhancer)
export default store