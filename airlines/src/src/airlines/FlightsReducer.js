import * as actions from './../setup/actions'

const defaultState = {
  results: {}
}

export default (state = defaultState, action) => {
  const { payload, type } = action
  switch (type) {
    case actions.GET_FLIGHTS:
      return {
        ...state,
        results: payload
      }
    default:
      return state
  }
}
