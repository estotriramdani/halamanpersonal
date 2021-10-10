import Head from 'next/head';
import React from 'react';
import Gap from '../../atoms/Gap';

const AuthLayout = ({ title, children }) => {
  return (
    <div>
      <div className="auth-wrapper">
        <Head>
          <title>{title} - HalamanPersonal</title>
        </Head>
        <div className="auth-content">
          <h1 className="auth-h1">{title}</h1>
          <Gap height={40} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
