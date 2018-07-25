import * as actions from './../setup/actions'
// import axios from 'axios'
// import config from './../setup/config'

// const {
//   flights
// } = config.api

const flightsStaticData = [
  {
    cityFrom: 'Dubai',
    cityTo: 'Paris',
    startDate: '12/07/2018',
    endDate: '20/08/2018'
  },
  {
    cityFrom: 'Ankara',
    cityTo: 'Wiena',
    startDate: '02/07/2018',
    endDate: '15/07/2018'
  },
  {
    cityFrom: 'Warsaw',
    cityTo: 'London',
    startDate: '17/06/2018',
    endDate: '20/06/2018'
  }
]

const getFlightsAction = data => ({
  type: actions.GET_FLIGHTS,
  payload: data
})

// const fetchFlights = () => {
//   return axios.get(flights)
// }

export const getFlights = () => dispatch => {
  return dispatch(getFlightsAction(flightsStaticData))
  // return fetchFlights()
  //   .then(data =>
  //     dispatch(fetchFlightsAction(data))
  //   )
  //   .catch(() => {
  //     console.log('error')
  //   })
}
