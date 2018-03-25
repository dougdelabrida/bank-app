export const FETCH_REQUEST = 'FETCH_REQUEST'
export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS'

const API_URI = 'http://localhost:3000/api'

export const fetchTransactions = (accountNumber, offset = 0, limit = 5) => {
  
  return (dispatch, getState) => {
    const { transactions } = getState();

    if (transactions.limit > limit) return;

    dispatch({ type: FETCH_REQUEST})
    
    fetch(`${API_URI}/accounts/${accountNumber}/transactions?offset=${offset}&limit=${limit}`, { method: 'GET' })
      .then(response => response.json())
      .then(result => {

        result.results = [...transactions.data, ...result.results];

        dispatch({
          type: RECEIVE_TRANSACTIONS,
          result,
          offset,
          limit
        })

      }
    )
  }
}
