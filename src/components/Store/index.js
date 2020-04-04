import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'



import categories from '../reducers/categories'
import products from '../reducers/products'
import view from '../reducers/view'
import shoppingCart from '../reducers/cart'


const reducers = combineReducers({ view, shoppingCart, products, categories });

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();