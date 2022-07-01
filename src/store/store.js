import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from './reducers/authReducer';
import { billingReducer } from './reducers/billingReducer';
const rootReducer = combineReducers({
    auth: authReducer,
    billing: billingReducer
});
const middleware = [thunk];
const store = createStore(rootReducer, compose(
    applyMiddleware(...middleware),
    composeWithDevTools()
))
export default store;