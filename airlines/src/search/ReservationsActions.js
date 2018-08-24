import * as actions from './../setup/actions'
import axios from 'axios'
import config from './../setup/config'

const {
  base,
  reservations
} = config.api

const reservationEndpoint = `${base}${reservations}`

const getReservationAction = data => ({
  type: actions.GET_RESERVATION,
  payload: data
})

const fetchReservation = id => {
  return axios.get(reservationEndpoint, id)
    .then(response => response.data)
}

export const getReservation = id => dispatch => {
  return fetchReservation(id)
    .then(data =>
      dispatch(getReservationAction(data))
    )
    .catch(() => {
      console.log('error')
    })
}
