import React from 'react'
import PropTypes from 'prop-types'
import {Modal} from 'react-bootstrap'
import './ticketModal.css'
import messages from '../setup/message.json'
import BookingForm from './BookingForm'
import { buyTicket } from './TicketActions'
import {connect} from 'react-redux'

class TicketFormModal extends React.Component {
  constructor () {
    super()

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (values) {
    this.props.buyTicket(values)
  }

  render () {
    const columns = Object.entries(messages.modal.columns)
    const {
      flightDetails,
      closeModal
    } = this.props
    return (
      <div className='modal'>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>
              {messages.modal.header}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className='customer-data'>
              <BookingForm
                closeModal={closeModal}
                onSubmit={this.onSubmit}
              />
            </div>
            <div className='flight-details'>
              {
              columns.map(([key, value], index) =>
                <p
                  key={`col-${index}`}
                >
                  {`${value}: ${flightDetails[key]}`}
                </p>
              )
            }
            </div>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    )
  }
}

TicketFormModal.propTypes = {
  closeModal: PropTypes.func,
  buyTicket: PropTypes.func,
  flightDetails: PropTypes.object
}

export default connect(null, { buyTicket })(TicketFormModal)
