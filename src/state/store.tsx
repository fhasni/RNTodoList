import {applyMiddleware, compose, createStore} from 'redux';
import thunk, {ThunkMiddleware} from 'redux-thunk';
import reducers from './reducers';

const enhancer = compose(applyMiddleware(thunk as ThunkMiddleware));
export const store = createStore(reducers, enhancer);
