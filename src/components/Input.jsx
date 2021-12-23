import React from 'react'
import { validate } from '../utils/validators'

const INPUT_STATES = {
  UNTOUCHED: 'UNTOUCHED',
  VALID: 'VALID',
  INVALID: 'INVALID',
}

const Input = ({ label, id, type, validators, errorText }) => {
  return (
    <div className="form-input" data-testid="form-input">
      <label></label>
      <input />
      <p></p>
    </div>
  )
}

export default Input
