import React from 'react';
import AuthAlert from '../Alert';

function AlertFloating({ message, type }) {
  return (
    <div
      style={{
        width: '300px',
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: '40',
      }}
    >
      <AuthAlert message={message} type={type} />
    </div>
  );
}

export default AlertFloating;
