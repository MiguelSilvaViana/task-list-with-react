import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

import './Form.css';

export default function Form(props) {
  const { handleSubmit, handleChange, newTask, inputRef } = props;

  return (
    <form action="#" onSubmit={handleSubmit} className="form">
      <input
        type="text"
        onChange={handleChange}
        value={newTask || ''}
        ref={inputRef}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

/* Form.defaultProps = {

}
*/

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
  newTask: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  inputRef: PropTypes.any.isRequired,
};
