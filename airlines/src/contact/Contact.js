import React, {Fragment} from 'react'
import SimpleMap from './SimpleMap'
import './contact.css'
import messages from '../setup/message.json'

const Contact = () => {
  return (
    <Fragment>
      <div className='content'>
        <div className='airlines-data'>
          <div className='contact-data'>
            <h2>
              {messages.contact.header}
            </h2>
            <div className='services-help'>
              <p>
                {messages.contact.help}
              </p>
              <p>
                {messages.contact.servicePhone}
              </p>
            </div>
            <h4>
              {messages.contact.name}
            </h4>
            <p>
              {messages.contact.address}
            </p>
            <p>
              {messages.contact.phone}
            </p>
            <p>
              {messages.contact.fax}
            </p>
          </div>
        </div>
        <SimpleMap />
      </div>
    </Fragment>
  )
}

export default Contact
