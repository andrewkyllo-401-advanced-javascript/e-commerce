import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import candidates from '../Store/candidates' 
import totalVotes from '../reducers/totalVotes'

const reducers = combineReducers({ candidates, totalVotes });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();