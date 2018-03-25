export const FETCH_REQUEST = 'FETCH_REQUEST_ACCOUNTS';
export const RECEIVE_ACCOUNTS = 'RECEIVE_ACCOUNTS';
export const RECEIVE_SELECTED = 'RECEIVE_SELECTED';

import {
  RECEIVE_TRANSACTIONS
} from '../actions/transactions';

const API_URI = 'http://localhost:3000/api';

export const fetchAccounts = (accountNumber) => {
  
  return (dispatch) => {

    dispatch({ type: FETCH_REQUEST})
    
    fetch(`${API_URI}/accounts`, { method: 'GET' })
      .then(response => response.json())
      .then(result => {

        dispatch({
          type: RECEIVE_ACCOUNTS,
          result
        })

        // Reset transactions
        dispatch({
          type: RECEIVE_TRANSACTIONS,
          result: {results: []},
          offset: 0,
          limit: 0
        })

      }
    )
  }
}

export const selectAccount = (accountNumber) => {
  return (dispatch) => {
    dispatch({
      type: RECEIVE_SELECTED,
      selected: accountNumber
    })
  }
}
