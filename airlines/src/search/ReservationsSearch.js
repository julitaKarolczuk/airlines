import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import messages from '../setup/message.json'
import './reservations.css'
import {Button} from 'react-bootstrap'
import ReservationsSearchTable from './ReservationsSearchTable'
import {getReservation} from './ReservationsActions'

const data = {
  'bookingNumber': '37850088199',
  'owner': 'Ashton Sanchez',
  'passengers': ['Clayton', 'Ramona', 'Nina', 'Candace'],
  'flightFrom': 'Stirling',
  'flightDate': '08.09.18',
  'destination': 'Warrnambool',
  'backDate': '09.14.18',
  'payment': 6757
}

class ReservationsSearch extends React.Component {
  constructor () {
    super()

    this.state = {
      displayReservation: false
    }

    this.showReservationDetails = this.showReservationDetails.bind(this)
  }

  showReservationDetails () {
    if (Object.keys(data).length !== 0) {
      this.setState(prevState => ({displayReservation: !prevState.displayReservation}))
      const id = this.refs.reservationIndex.value
      console.log(id)
      // this.props.getReservation(id)
    } else {
      window.alert('Nie ma takej rezerwacji')
    }
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
            ? (<ReservationsSearchTable data={data} />)
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

export default connect(null, {getReservation})(ReservationsSearch)
