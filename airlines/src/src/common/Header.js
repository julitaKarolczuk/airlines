import React from 'react'
import { Link } from 'react-router-dom'
import messages from './../setup/message.json'
import config from './../setup/config'

const Header = () => {
  const {
    api,
    contact
  } = config.routes
  return (
    <div className='header-section'>
      <Link
        to={api}
        className='logo'
      />
      <div className='contact-section'>
        <Link to={contact}>
          {messages.header.contactLink}
        </Link>
      </div>
    </div>
  )
}

export default Header
