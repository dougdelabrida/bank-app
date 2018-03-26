import {
  FETCH_REQUEST,
  RECEIVE_PROFILE
} from '../actions/profile';

const initialState = {
  isFetching: false,
  data: null
}

export default (state = initialState, payload) => {
  switch (payload.type) {

    case FETCH_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })

    case RECEIVE_PROFILE:
      const { data } = payload.result;
      
      return Object.assign({}, state, {
        isFetching: false,
        data
      })

    default:
      return state
  }
}
