import React, { Component } from 'react'
import PropTypes from 'prop-types'
import messages from '../setup/message.json'

class FlightsResultTable extends Component {
  constructor () {
    super()

    this.renderBodyRow = this.renderBodyRow.bind(this)
    this.renderHeaderCell = this.renderHeaderCell.bind(this)
    this.renderBodyCell = this.renderBodyCell.bind(this)
  }

  renderHeaderCell () {
    return (item, index) => {
      return (
        <th
          key={`${index}-${item.name}`}
          className='results-table-th'
          style={{ width: item.width }}
        >
          <span className='th-title'>
            {item.name}
          </span>
        </th>
      )
    }
  }

  renderBodyCell (item) {
    return (column, index) => (
      <td
        key={`td-${index}`}
      >
        {column.renderCell(item)}
      </td>
    )
  }

  renderBodyRow (item, index) {
    const columns = this.props.columns
    return (
      <tr
        key={`${item.name}-${index}`}
      >
        {columns.map(this.renderBodyCell(item))}
      </tr>
    )
  }

  render () {
    const {
      columns,
      data
    } = this.props
    const rows = data || []
    const isDataEmpty = !rows.length
    return (
      <table className='results-table'>
        <thead>
          <tr>
            {columns.map(this.renderHeaderCell())}
          </tr>
        </thead>
        <tbody>
          {isDataEmpty
            ? (
              <tr className='results-table-empty'>
                <td colSpan={columns.length}>
                  {messages.airlines.emptyData}
                </td>
              </tr>
            )
            : rows.map(this.renderBodyRow)
          }
        </tbody>
      </table>
    )
  }
}

FlightsResultTable.defaultProps = {
  data: []
}

FlightsResultTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array
}

export default FlightsResultTable
