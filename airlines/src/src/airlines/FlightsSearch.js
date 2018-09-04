import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import InputField from '../common/InputField'
import {Button} from 'react-bootstrap'
import messages from './../setup/message.json'

const formID = 'search-form'
class FlightsSearch extends Component {
  render () {
    const {
      handleSubmit,
      onSubmit
    } = this.props
    return (
      <div className='fligths-search'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            id='cityFrom'
            name='cityFrom'
            component={InputField}
            type='text'
            placeholder='Flying From'
          />
          <Field
            id='startDate'
            name='startDate'
            component={InputField}
            type='date'
            placeholder='Flying From Date'
          />
          <Field
            id='cityTo'
            name='cityTo'
            component={InputField}
            type='text'
            placeholder='Flying To'
          />
          <Field
            id='endDate'
            name='endDate'
            component={InputField}
            type='date'
            placeholder='Flying To Date'
          />
          <Button
            className='submit'
            type='submit'
          >
            {messages.common.submit}
          </Button>
        </form>
      </div>
    )
  }
}

FlightsSearch.propTypes = {
  onSubmit: PropTypes.func,
  handleSubmit: PropTypes.func
}

export default reduxForm({
  form: formID
})(FlightsSearch)
