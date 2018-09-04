import React from 'react'
import { Field, reduxForm } from 'redux-form'
import InputField from '../common/InputField'
import { Modal, Button} from 'react-bootstrap'
import PropTypes from 'prop-types'
import messages from '../setup/message.json'

const formID = 'booking-form'

class BookingForm extends React.Component {
  constructor () {
    super()

    this.onCancel = this.onCancel.bind(this)
  }

  onCancel () {
    this.props.closeModal()
  }

  render () {
    const { 
      handleSubmit,
      onSubmit
    } = this.props

    return (
      <div className='booking-form'>
        <Button onClick={this.onCancel} className='exit' />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            id='firstName'
            name='firstName'
            component={InputField}
            type='text'
            placeholder='First Name' />
          <Field
            id='lastName'
            name='lastName'
            component={InputField}
            type='text'
            placeholder='Last Name' />
          <Field
            id='email'
            name='email'
            component={InputField}
            type='email'
            placeholder='Email' />
          <Field
            id='birthdate'
            name='birthdate'
            component={InputField}
            type='date'
            placeholder='Date Of Birth' />
          <Modal.Footer>
            <Button onClick={this.onCancel} bsStyle='primary' className='cancel'>
              {messages.common.cancel}
            </Button>
            <Button bsStyle='primary' className='book' type='submit'>
              {messages.common.accept}
            </Button>
          </Modal.Footer>
        </form>
      </div>
    )
  }
}

BookingForm.propTypes = {
  closeModal: PropTypes.func,
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func
}

export default reduxForm({
  form: formID
})(BookingForm)
