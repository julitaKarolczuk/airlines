import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import FlightsSearch from './FlightsSearch'
import FlightsTable from './FlightsTable'
import {
  getFlights
} from './FlightsActions'

class Flights extends React.Component {

  constructor () {
    super()
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (values) {
    this.props.getFlights(values)
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
  getFlights
})(Flights)
