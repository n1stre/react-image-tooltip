import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';


const composeEnhancers = 
  typeof window === 'object' &&
  !window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
    ? compose 
    : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) 

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const configureStore = initialState => createStore(
  rootReducer, 
  initialState, 
  enhancer
)

export default configureStore;