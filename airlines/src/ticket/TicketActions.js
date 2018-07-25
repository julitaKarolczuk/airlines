import * as actions from './../setup/actions'
// import axios from 'axios'

const getFlightDetailsAction = data => ({
  type: actions.GET_FLIGHT_DETAILS,
  payload: data
})

export const getFlightDetails = data => dispatch => {
  return dispatch(getFlightDetailsAction(data))
}

const getTicketAction = data => ({
  type: actions.GET_TICKET,
  payload: data
})

export const getTicket = data => dispatch => {
  return dispatch(getTicketAction(data))
}

// const buyFlight = data => {
//   const url = ''
//   return axios.post(url, data)
//     .then(response => console.log('OK'))
//     .catch(() => console.log('errrrrrorx'))
// }

export const buyTicket = data => dispatch => {
  return dispatch(getTicketAction(data))
}
