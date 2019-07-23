import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from './../common/Header'
import { BrowserRouter } from 'react-router-dom'

storiesOf('Header', module)
  .addDecorator(story => (
    <BrowserRouter initialEntries={['/']}>{story()}</BrowserRouter>
  ))
    .add('with header', () => (
      <Header />
    ))
