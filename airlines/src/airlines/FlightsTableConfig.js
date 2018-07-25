import React from 'react'
import PropTypes from 'prop-types'
import FlightsTableResults from './FlightsTableResults'
import messages from './../setup/message.json'
import {Button} from 'react-bootstrap'

class FlightsTableConfig extends React.Component {
  render () {
    const {
      showModal,
      data
    } = this.props

    const columns = [
      {
        name: `${messages.airlines.column1Name}`,
        key: 'cityFrom',
        width: '20%',
        renderCell (data) {
          return (
            <span>
              {data.cityFrom}
            </span>
          )
        }
      },
      {
        name: `${messages.airlines.column2Name}`,
        key: 'startDate',
        width: '28%',
        renderCell (data) {
          return (
            <span>
              {data.startDate}
            </span>
          )
        }
      },
      {
        name: `${messages.airlines.column3Name}`,
        key: 'cityTo',
        width: '20%',
        renderCell (data) {
          return (
            <span>
              {data.cityTo}
            </span>
          )
        }
      },
      {
        name: `${messages.airlines.column4Name}`,
        key: 'endDate',
        width: '28%',
        renderCell (data) {
          return (
            <span>
              {data.endDate}
            </span>
          )
        }
      },
      {
        name: '',
        key: 'buyButton',
        width: '4%',
        renderCell (data) {
          const click = (e) => {
            return e => {showModal(data)}
          }
          return (
            <span>
              <Button
                onClick={click(data)}
                className='buy'
              >
                {messages.airlines.buyButton}
              </Button>
            </span>
          )
        }
      }
    ]
    return (
      <FlightsTableResults columns={columns} data={data} />
    )

  }
}

FlightsTableConfig.propTypes = {
  showModal: PropTypes.func
}

export default (FlightsTableConfig)
