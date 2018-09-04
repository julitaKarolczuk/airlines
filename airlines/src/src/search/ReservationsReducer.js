import * as actions from './../setup/actions'

const defaultState = {
  reservation: {}
}

export default (state = defaultState, action) => {
  const { payload, type } = action
  switch (type) {
    case actions.GET_RESERVATION:
      return {
        ...state,
        reservation: payload
      }
    default:
      return state
  }
}
