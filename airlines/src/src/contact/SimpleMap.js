import React from 'react'
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react'

const SimpleMap = props => {
  return (
    <div className='map'>
      <GoogleMapReact
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      />
    </div>
  )
}

SimpleMap.defaultProps = {
  center: {
    lat: 53.15,
    lng: 23.0844
  },
  zoom: 8
}

SimpleMap.propTypes = {
  center: PropTypes.shape,
  zoom: PropTypes.number
}

export default SimpleMap
