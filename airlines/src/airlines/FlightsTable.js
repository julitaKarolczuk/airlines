import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import FlightsTableConfig from './FlightsTableConfig'
import TicketFormModal from '../ticket/TicketFormModal'
import {getFlightDetails} from '../ticket/TicketActions'

class FlightsTable extends React.Component {
  constructor () {
    super()

    this.state = {
      isVisible: false
    }

    this.showModal = this.showModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  showModal (flightDetails) {
    const isVisible = true
    this.setState({isVisible})
    this.props.getFlightDetails(flightDetails)
  }

  closeModal () {
    const isVisible = false
    this.setState({isVisible})
  }

  render () {
    const isVisible = this.state.isVisible
    return (
      <div className='flights-table'>
        <FlightsTableConfig
          data={this.props.flights}
          showModal={this.showModal}
          closeModal={this.closeModal}
        />
        {isVisible
          ? <TicketFormModal
            flightDetails={this.props.flightDetails}
            closeModal={this.closeModal}
            />
          : null
        }
      </div>
    )
  }
}

// FlightsTable.propTypes = {
//   flights: PropTypes.array,
//   getFlightDetails: PropTypes.func,
//   flightDetails: PropTypes.object
// }

const mapStateToProps = state => ({
  flights: state.flights.results, // with data from endpoints -> .data,
  flightDetails: state.ticket.flightDetails
})

export default connect(mapStateToProps, {getFlightDetails})(FlightsTable)
