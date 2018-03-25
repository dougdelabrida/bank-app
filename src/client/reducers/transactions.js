import {
  FETCH_REQUEST,
  RECEIVE_TRANSACTIONS
} from '../actions/transactions'

const initialState = {
  isFetching: false,
  offset: 0,
  limit: 0,
  total: 0,
  data: []
}

export default (state = initialState, payload) => {
  switch (payload.type) {

    case FETCH_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })

    case RECEIVE_TRANSACTIONS:
      const { results, offset, limit, total } = payload.result
      return Object.assign({}, state, {
        isFetching: false,
        offset,
        limit,
        total,
        data: results
      })

    default:
      return state
  }
}
