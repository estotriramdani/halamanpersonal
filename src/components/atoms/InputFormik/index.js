import { Field } from 'formik';
import React from 'react';

const InputFormik = ({
  errors,
  touched,
  validator,
  name,
  type,
  placeholder,
  label,
  icon,
}) => {
  return (
    <div className="auth-form-group">
      <label className="auth-form-control-label">{label}</label>
      <div className="auth-form-control-wrapper">
        <div className="auth-form-control-icon">
          <i className={`bi bi-` + icon}></i>
        </div>
        <Field
          name={name}
          type={type}
          validate={validator}
          className="auth-form-control"
          autoComplete="off"
          placeholder={placeholder}
        />
      </div>
      {errors[name] && touched[name] && (
        <div className="auth-form-message">{errors[name]}</div>
      )}
    </div>
  );
};

export default InputFormik;
