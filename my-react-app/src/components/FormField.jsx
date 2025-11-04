import React from 'react';

const FormField = ({ id, label, required, error, helpText, children }) => (
  <div className={`field ${error ? 'has-text-danger' : ''}`}>
    {label && (
      <label className="label has-text-weight-semibold" htmlFor={id}>
        {label} {required ? <span aria-hidden="true">*</span> : null}
      </label>
    )}
    <div className="control">{children}</div>
    {error ? (
      <p className="help is-danger">{error}</p>
    ) : (
      helpText && <p className="help is-info">{helpText}</p>
    )}
  </div>
);

export default FormField;
