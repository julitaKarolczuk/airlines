import * as actions from './../setup/actions'
import axios from 'axios'
import config from './../setup/config'

const {
  reservation
} = config.api

const getReservationAction = data => ({
  type: actions.GET_RESERVATION,
  payload: data
})

const fetchReservation = id => {
  return axios.get(reservation, id)
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
