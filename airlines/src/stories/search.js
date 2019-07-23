import React from 'react'
import { storiesOf } from '@storybook/react'
import {ReservationsSearch} from '../search/ReservationsSearch'
import ReservationsSearchList from '../search/ReservationsSearchList'

storiesOf('Reservation', module)
  .add('with search', () => (
    <ReservationsSearch />
  ))
  .add('with search list', () => (
    <ReservationsSearchList data={{
      "bookingNumber": 123,
      "owner": "asd",
      "passengers": "asd",
      "flightFrom": "asd",
      "flightDate": "asd",
      "destination": "asd",
      "backDate": "asde",
      "payment": "asd"
    }} />
  ))
