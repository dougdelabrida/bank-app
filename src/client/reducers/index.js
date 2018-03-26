import { combineReducers } from 'redux';
import transactions from './transactions';
import accounts from './accounts';
import profile from './profile';

const rootReducer = combineReducers({
  transactions,
  accounts,
  profile
});

export default rootReducer;
