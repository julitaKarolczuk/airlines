import React from 'react'
import Flights from './Flights'
import ReservationsSearch from '../search/ReservationsSearch'
import './airlines.css'

const Airlines = () => {
  return (
    <div className='main'>
      <Flights />
      <ReservationsSearch />
    </div>
  )
}

export default Airlines
