import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from './reducers/authReducer';
const rootReducer = combineReducers({
    auth: authReducer
});
const middleware = [thunk];
const store = createStore(rootReducer, compose(
    applyMiddleware(...middleware),
    composeWithDevTools()
))
export default store;