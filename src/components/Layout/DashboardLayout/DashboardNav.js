import Link from 'next/link';

export default function DashboardNav() {
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

  return (
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
  );
}
