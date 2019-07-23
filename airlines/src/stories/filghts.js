import React from 'react';
import { storiesOf } from '@storybook/react'
import { FlightsTable } from '../airlines/FlightsTable'
import { FlightsSearch } from '../airlines/FlightsSearch'
import withReduxForm from 'redux-form-storybook'

storiesOf('Flights', module)
  .add('with empty table', () => (
    <FlightsTable />
  ))
  .add('with table', () => (
    <FlightsTable flights={[
      {
        id: 4,
        cityFrom: 'Bucharest',
        cityTo: 'Paris',
        startDateString: '2018-05-25 15:50',
        endDateString: '2018-05-25 17:50',
        price: 5400
      },
      {
        id: 5,
        cityFrom: 'Warszawa',
        cityTo: 'Berlin',
        startDateString: '2018-05-26 15:50',
        endDateString: '2018-05-26 17:50',
        price: 2065
      },
      {
        id: 6,
        cityFrom: 'Sofia',
        cityTo: 'Berlin',
        startDateString: '2018-05-27 15:50',
        endDateString: '2018-05-27 17:50',
        price: 2200
      },
      {
        id: 7,
        cityFrom: 'Kazan',
        cityTo: 'Berlin',
        startDateString: '2018-05-28 15:50',
        endDateString: '2018-05-28 17:50',
        price: 1000
      }
    ]} />
  ))
  .addDecorator(withReduxForm)
    .add('with search', () => <FlightsSearch handleSubmit={() => {}} />)

