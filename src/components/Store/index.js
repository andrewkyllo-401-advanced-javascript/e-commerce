import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import categories from '../reducers/categories'
import products from '../reducers/products'

import shoppingCart from '../reducers/cart'

import candidates from '../reducers/candidates' 
import totalVotes from '../reducers/totalVotes'

const reducers = combineReducers({ shoppingCart, products, categories, candidates, totalVotes });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();