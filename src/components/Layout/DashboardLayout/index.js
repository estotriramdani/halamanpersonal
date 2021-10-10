import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ButtonLogout from './ButtonLogout';
import DashboardNav from './DashboardNav';
import HomeButton from './HomeButton';
import DashboardSkeleton from './DashboardSkeleton';

function DashboardLayout({ title, pageTitle, children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');
  const router = useRouter();

  useEffect(() => {
    const user_info = window.localStorage.getItem('user_info');
    setUsername(JSON.parse(user_info).username);
  }, [token, router]);

  return (
    <div className="dashboard-wrapper">
      <Head>
        <title>{pageTitle} - Dashboard</title>
      </Head>
      <DashboardNav />
      <div className="dashboard-content">{children}</div>
      <div className="dashboard-nav">
        <div className="dashboard-nav-item">
          <Link href={'/' + username}>
            <a
              style={{
                width: '100%',
                display: 'inline-block',
                cursor: 'pointer',
              }}>
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
}

export default DashboardLayout;
