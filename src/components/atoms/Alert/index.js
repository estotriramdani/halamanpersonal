import React from 'react';

const AuthAlert = ({ type, message }) => {
  const styles = {
    borderRadius: '5px',
    padding: '20px',
    fontSize: '14px',
    marginBottom: '15px',
    backgroundColor: '',
    color: '',
    boxShadow: '2px 2px 16px rgba(0, 0, 0, 0.2)',
  };
  if (type === 'success') {
    styles.backgroundColor = '#2ecc71';
    styles.color = 'white';
  }
  if (type === 'danger') {
    styles.backgroundColor = '#e74c3c';
    styles.color = 'white';
  }
  if (type === 'warning') {
    styles.backgroundColor = '#f1c40f';
    styles.color = 'white';
  }

  return <div style={styles}>{message}</div>;
};

export default AuthAlert;
