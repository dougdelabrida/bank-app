import { combineReducers } from 'redux';
import transactions from './transactions';
import accounts from './accounts';

const rootReducer = combineReducers({
  transactions,
  accounts
});

export default rootReducer;
