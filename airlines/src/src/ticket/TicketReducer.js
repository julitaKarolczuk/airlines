import * as actions from './../setup/actions'

const defaultState = {
  flightDetails: {}
}

export default (state = defaultState, action) => {
  const { payload, type } = action
  switch (type) {
    case actions.GET_FLIGHT_DETAILS:
      return {
        ...state,
        flightDetails: payload
      }
    case actions.GET_TICKET:
      return {
        ...state,
        ticket: payload
      }
    default:
      return state
  }
}
