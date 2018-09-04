import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import FlightsSearch from './FlightsSearch'
import FlightsTable from './FlightsTable'
import {
  getFlights,
  getSearchingFlights
} from './FlightsActions'
import config from './../setup/config'

class Flights extends React.Component {

  constructor () {
    super()
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (values) {
    const {
      dateFrom,
      dateTo,
      cityFrom,
      cityTo
    } = config.params
    const params = {
      dateFrom: values.startDate,
      dateTo: values.endDate,
      cityTo: values.cityTo,
      cityFrom: values.cityFrom
    }
    this.props.getSearchingFlights(params)
  }

  componentDidMount () {
    this.props.getFlights()
  }

  render () {
    return (
      <Fragment>
        <FlightsSearch onSubmit={this.onSubmit} />
        <FlightsTable />
      </Fragment>
    )
  }
}

Flights.propTypes = {
  getFlights: PropTypes.func,
  getSerchingFlights: PropTypes.func
}

export default connect(null, {
  getFlights,
  getSearchingFlights
})(Flights)
