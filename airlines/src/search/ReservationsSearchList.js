import React from 'react'
import messages from '../setup/message.json'
import PropTypes from 'prop-types'

const ReservationsSearchList = props => {
  const columns = Object.entries(messages.reservation.columns)
  const data = props.data

  return (
    <div className='reservation-search-results'>
      {JSON.stringify(data) !== '{}'
        ? (
          columns.map(([key, value], index) => (
            <p
              key={`col-${index}`}
            >
              {`${value}: ${data[key]}`}
            </p>
          ))) : (
            <p>{messages.airlines.emptyData}</p>
          )
      }
    </div>
  )
}

ReservationsSearchList.propTypes = {
  data: PropTypes.object
}

export default ReservationsSearchList
