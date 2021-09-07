import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import Gap from '../../atoms/Gap';
import ButtonLogout from './ButtonLogout';
import DashboardNav from './DashboardNav';
import HomeButton from './HomeButton';

function DashboardLayout({ title, pageTitle, children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const router = useRouter();

  useEffect(() => {
    const user_info = window.localStorage.getItem('user_info');

    if (user_info === null || user_info === '{}') {
      setIsLoggedIn(false);
      setTimeout(() => {
        router.push('/auth/login');
      }, 1000);
    } else {
      setTimeout(() => {
        setIsLoggedIn(true);
      }, 1000);
    }
  }, [token, router]);

  if (isLoggedIn) {
    return (
      <div className="dashboard-wrapper">
        <Head>
          <title>{pageTitle} - Dashboard</title>
          <meta name="description" content="....." />
        </Head>
        <DashboardNav />
        <div className="dashboard-content">{children}</div>
        <div className="dashboard-nav">
          <div className="dashboard-nav-item">
            <Link href={'/estotriramdani'}>
              <a
                style={{
                  width: '100%',
                  display: 'inline-block',
                  cursor: 'pointer',
                }}
              >
                <i className={'bi bi-' + 'globe'}></i>&nbsp; {'View Your Site'}
              </a>
            </Link>
          </div>
        </div>
        <div className="dashboard-nav">
          <HomeButton />
          <ButtonLogout />
        </div>
      </div>
    );
  } else {
    return (
      <div className="dashboard-wrapper">
        <Head>
          <title>{pageTitle} - Dashboard</title>
          <meta name="description" content="....." />
        </Head>
        <div className="dashboard-nav">
          <p style={{ margin: 'auto', width: '100%' }}>
            <Skeleton width="100%" height="35px" />
          </p>
        </div>
        <div className="dashboard-content">
          <Skeleton width="100%" height="40px" />
          <Gap height="15px" />
          <Skeleton width="100%" height="20px" />
          <Gap height="15px" />
          <Skeleton width="100%" height="35vh" />
          <Gap height="10px" />
          <Skeleton width="100%" height="30px" />
        </div>
        <div className="dashboard-nav">
          <p style={{ margin: 'auto', width: '100%' }}>
            <Skeleton width="100%" height="35px" />
          </p>
        </div>
      </div>
    );
  }
}

export default DashboardLayout;
