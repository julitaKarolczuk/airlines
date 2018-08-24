import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import messages from '../setup/message.json'
import './reservations.css'
import {Button} from 'react-bootstrap'
import ReservationsSearchTable from './ReservationsSearchTable'
import {getReservation} from './ReservationsActions'


class ReservationsSearch extends React.Component {
  constructor () {
    super()

    this.state = {
      displayReservation: false
    }

    this.showReservationDetails = this.showReservationDetails.bind(this)
  }

  showReservationDetails () {
    this.setState(prevState => ({displayReservation: !prevState.displayReservation}))
    const id = this.refs.reservationIndex.value
    this.props.getReservation(id)
  }

  render () {
    const displayReservation = this.state.displayReservation
    return (
      <div className='reservation-search'>
        <h1>
          {messages.reservation.header}
        </h1>
        <div className='search-content'>
          <div className='search-form'>
            <input
              type='text'
              ref='reservationIndex'
              name='reservationIndex'
              id='resIndex'
            />
            <Button
              className='submit'
              onClick={this.showReservationDetails}
            >
              {messages.common.submit}
            </Button>
          </div>
          {displayReservation
            ? (<ReservationsSearchTable data={this.props.reservation}/>)
            : null
          }
        </div>
      </div>
    )
  }
}

ReservationsSearch.propTypes = {
  getReservation: PropTypes.func
}

const mapStateToProps = state => ({
  reservation: state.ticket.flightDetails
})

export default connect(mapStateToProps, {getReservation})(ReservationsSearch)
