import React from 'react';

const InputUpload = ({ name, onChange, label, accept }) => {
  return (
    <div className="auth-form-group">
      <label
        style={{
          fontSize: '14px',
          marginBottom: '5px',
          display: 'inline-block',
        }}
      >
        {label}
      </label>
      <input
        type="file"
        name={name}
        id={name}
        className="auth-form-upload"
        onChange={onChange}
        accept={accept}
      />
    </div>
  );
};

export default InputUpload;
