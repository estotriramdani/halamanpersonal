import React from 'react';

const AuthInput = ({
  type,
  label,
  placeholder,
  id,
  icon,
  message,
  ...rest
}) => {
  return (
    <div className="auth-form-group">
      <label className="auth-form-control-label">{label}</label>
      <div className="auth-form-control-wrapper">
        <div className="auth-form-control-icon">
          <i className={`bi bi-` + icon}></i>
        </div>
        <input
          type={type}
          id={id}
          className="auth-form-control"
          placeholder={placeholder}
          {...rest}
        />
      </div>
      <div className="auth-form-message">{message}</div>
    </div>
  );
};

export default AuthInput;
