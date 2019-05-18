import * as actions from './../setup/actions'
import axios from 'axios'
import config from './../setup/config'

const {
  base,
  reservations
} = config.api
const reservationEndpoint = `${base}${reservations}`
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

const buyFlight = data => {
  return axios.post(reservationEndpoint, data)
    .then(({responseData}) => {
      return responseData
    })
    .catch(() => console.log('errrrrrorx'))
}

export const buyTicket = data => dispatch => {
  dispatch(getTicketAction(data))
  return buyFlight(data)
}
