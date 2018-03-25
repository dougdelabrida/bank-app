import {
  FETCH_REQUEST,
  RECEIVE_ACCOUNTS,
  RECEIVE_SELECTED
} from '../actions/accounts';

const initialState = {
  isFetching: false,
  selected: null,
  data: []
}

export default (state = initialState, payload) => {
  switch (payload.type) {

    case FETCH_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })

    case RECEIVE_ACCOUNTS:
      const { results } = payload.result;
      return Object.assign({}, state, {
        isFetching: false,
        data: results
      })

    case RECEIVE_SELECTED:
      const { selected } = payload;
      return Object.assign({}, state, {
        selected
      })

    default:
      return state
  }
}
