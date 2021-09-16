import React from 'react';
import { TrixEditor } from 'react-trix/dist/react-trix';

function TextareaFormik({ onChange, value, placeholder, label }) {
  return (
    <div>
      <label style={{ marginBottom: '10px', display: 'block' }}>{label}</label>
      <TrixEditor
        className="form-control"
        style={{ minHeight: '150px' }}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default TextareaFormik;
