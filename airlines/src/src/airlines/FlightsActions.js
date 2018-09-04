import * as actions from './../setup/actions'
import axios from 'axios'
import config from './../setup/config'

const {
  base,
  flights
} = config.api
const flightsEndpoint = `${base}${flights}`

const getFlightsAction = data => ({
  type: actions.GET_FLIGHTS,
  payload: data
})

const fetchFlights = () => {
  return axios.get(flightsEndpoint)
    .then(response => response.data)
}

export const getFlights = () => dispatch => {
  return fetchFlights()
    .then(data =>
      dispatch(getFlightsAction(data))
    )
    .catch(() => {
      console.log('error')
    })
}

const fetchSerchingFlights = params => {
  return axios.get(flightsEndpoint, {params})
    .then(response => response.data)
}

export const getSearchingFlights = params => dispatch => {
  return fetchSerchingFlights(params)
    .then(data =>
      dispatch(getFlightsAction(data))
    )
    .catch(() => {
      console.log('error')
    })
}
