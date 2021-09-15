import Head from 'next/head';
import React from 'react';
import Gap from '../../atoms/Gap';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import DashboardSkeleton from '../DashboardLayout/DashboardSkeleton';

const AuthLayout = ({ title, children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const user_info = window.localStorage.getItem('user_info');
    if (user_info === null || user_info === '{}') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      router.push('/dashboard');
    }
  }, [router]);

  if (isLoggedIn) {
    return (
      <div>
        <div className="auth-wrapper">
          <Head>
            <title>{title} - HalamanPersonal</title>
            <meta name="description" content="....." />
          </Head>
          <div className="auth-content">
            <h1 className="auth-h1">{title}</h1>
            <Gap height={40} />
            {children}
          </div>
        </div>
      </div>
    );
  } else {
    return <DashboardSkeleton title="Auth" />;
  }
};

export default AuthLayout;
