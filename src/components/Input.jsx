import React from 'react';
import { useState } from 'react';
import { validate } from '../utils/validators';

const Input = ({ label, id, type, validators, errorText }) => {
  const [INPUT_STATES, INPUT_STATES_SET] = useState({
    UNTOUCHED: true,
    isValid: true,
  });

  return (
    <div
      className={`form-input ${
        INPUT_STATES.isValid ? '' : 'form-input--invalid'
      } `}
      data-testid="form-input"
    >
      <label htmlFor="id">{label}</label>
      <input
        onChange={(e) => {
          if (INPUT_STATES.UNTOUCHED) return;
          INPUT_STATES.isValid = validate(e.target.value, validators);
          INPUT_STATES_SET({ ...INPUT_STATES });
        }}
        onBlur={(e) => {
          if (INPUT_STATES.UNTOUCHED) {
            INPUT_STATES.UNTOUCHED = false;
            INPUT_STATES.isValid = validate(e.target.value, validators);
            INPUT_STATES_SET({ ...INPUT_STATES });
          }
        }}
        type={type}
        id={id}
      />

      <p> {!INPUT_STATES.isValid && errorText}</p>
    </div>
  );
};

export default Input;
