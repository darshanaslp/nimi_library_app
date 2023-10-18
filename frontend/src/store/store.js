import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import loggerMiddleware from './loggerMiddleware';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import booksReducer from './reducers/booksReducer'; 

const rootReducer = combineReducers({
  auth: authReducer,
  books: booksReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk,loggerMiddleware));

export default store;