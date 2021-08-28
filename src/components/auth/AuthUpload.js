import React from 'react';

const AuthUpload = ({ onChange }) => {
  return (
    <>
      <div className="auth-form-group">
        <label
          style={{
            fontSize: '14px',
            marginBottom: '5px',
            display: 'inline-block',
          }}
        >
          Select Profile Photo
        </label>
        <input
          type="file"
          id="photo"
          className="auth-form-upload"
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default AuthUpload;
