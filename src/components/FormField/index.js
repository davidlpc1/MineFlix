import React from 'react';
import PropTypes from 'prop-types';

function FormField({
  type, label, name, value, onChange
}) {
  const fieldId = `id_${name}`;
  return (
    <>
      <label
        htmlFor={fieldId}
      >
        {label}
        <input
          id={fieldId}
          type={type}
          value={value}
          onChange={onChange}
          name={name}
        />
      </label>
    </>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type : PropTypes.string,
  name : PropTypes.string.isRequired,
  value : PropTypes.string,
  onChange : PropTypes.func,
};

export default FormField;
