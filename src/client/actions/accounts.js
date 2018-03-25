export const FETCH_REQUEST = 'FETCH_REQUEST_ACCOUNTS';
export const RECEIVE_ACCOUNTS = 'RECEIVE_ACCOUNTS';
export const RECEIVE_SELECTED = 'RECEIVE_SELECTED';

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
