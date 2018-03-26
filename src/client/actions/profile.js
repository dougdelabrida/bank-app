export const FETCH_REQUEST = 'FETCH_REQUEST_PROFILE';
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';

const API_URI = 'http://localhost:3000/api';

export const fetchProfile = (accountNumber) => {
  
  return (dispatch) => {

    dispatch({ type: FETCH_REQUEST})
    
    fetch(`${API_URI}/profile`, { method: 'GET' })
      .then(response => response.json())
      .then(result => {

        dispatch({
          type: RECEIVE_PROFILE,
          result
        })

      }
    )
  }
}

export const updateProfile = (profile) => {
  return (dispatch) => {
    fetch(`${API_URI}/profile`, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(profile)
    })
      .then(response => response.json())
      .then(result => {

        dispatch({
          type: RECEIVE_PROFILE,
          result
        })

      }
    )
  }
}
