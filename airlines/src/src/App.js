import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'
import Header from './common/Header'

class App extends Component {
  render () {
    return (
      <div className='airlines-app'>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.array
}

export default App
