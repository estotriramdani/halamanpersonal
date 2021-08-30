import React from 'react';

const AuthAlert = ({ type, message }) => {
  const styles = {
    borderRadius: '5px',
    padding: '20px',
    fontSize: '14px',
    marginBottom: '15px',
    backgroundColor: '',
    color: '',
  };
  if (type === 'success') {
    styles.backgroundColor = 'green';
    styles.color = 'white';
  }
  if (type === 'danger') {
    styles.backgroundColor = 'red';
    styles.color = 'white';
  }

  return <div style={styles}>{message}</div>;
};

export default AuthAlert;
