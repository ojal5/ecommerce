import {createStore,combineReducers,applyMiddleware} from 'redux';                          //we cannot pass multiple reducer so we use combinen reducer
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { getProductsReducer,getProductDetailsReducer } from './reducers/productReducer';
import {cartReducer} from './reducers/cartReducer';

const reducer=combineReducers ({ 
    getProducts: getProductsReducer ,                                                        //getProduct is the key but a reducer and actual reducer is getProducts Reducer
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer
});                                                                                         //whatever value is inside getProductsReducer will be stored inside getProducts


const middleware=[thunk];                                                                   //initializing thunk(middleware)  as an array

const store = createStore(
    reducer,                                                                                //reducer is send as a first argument
    composeWithDevTools(applyMiddleware(...middleware))                                     //middleware is passed in its argument
)

export default store;