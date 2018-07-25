import React from 'react'
import PropTypes from 'prop-types'

const InputField = ({ input, placeholder, type, meta: { touched, error } }) => (
  <div className='input-field'>
    <input {...input} type={type} placeholder={placeholder} />
    {touched && error && <span>{error}</span>}
  </div>
)

InputField.propTypes = {
  input: PropTypes.object,
  type: PropTypes.string,
  meta: PropTypes.object,
  placeholder: PropTypes.string
}

export default InputField
