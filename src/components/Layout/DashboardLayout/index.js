import Head from 'next/head';
import Link from 'next/link';
import Gap from '../../atoms/Gap';
import ButtonLogout from './ButtonLogout';
import HomeButton from './HomeButton';
function DashboardLayout({ title, pageTitle, children }) {
  const navItem = [
    {
      menu: 'Profile',
      href: '/dashboard',
      icon: 'person-circle',
    },
    {
      menu: 'Content',
      href: '/dashboard/content-management',
      icon: 'pencil-fill',
    },
    {
      menu: 'DevCor',
      href: '/dashboard/developer-corner',
      icon: 'code',
    },
  ];

  const footerItem = [
    {
      menu: 'Home',
      href: '/',
      icon: 'house-fill',
    },
    {
      menu: 'Logout',
      href: '/',
      icon: 'box-arrow-left',
    },
  ];
  return (
    <div className="dashboard-wrapper">
      <Head>
        <title>{pageTitle} - Dashboard</title>
        <meta name="description" content="....." />
      </Head>
      <div className="dashboard-nav">
        {navItem.map((item) => {
          return (
            <div className="dashboard-nav-item" key={item.menu}>
              <Link href={item.href}>
                <a>
                  <i className={'bi bi-' + item.icon}></i>&nbsp; {item.menu}
                </a>
              </Link>
            </div>
          );
        })}
      </div>
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
}

export default DashboardLayout;
