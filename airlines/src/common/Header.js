import React from 'react'
import { Link } from 'react-router-dom'
import messages from './../setup/message.json'

const Header = () => {
  return (
    <div className='header-section'>
      <Link
        to='/app'
        className='logo'
      />
      <div className='contact-section'>
        <Link to='/contact'>
          {messages.header.contactLink}
        </Link>
      </div>
    </div>
  )
}

export default Header
