import Link from 'next/link';
import useSWR from 'swr';
import { baseUrl } from '../../../../configs/baseUrl';
import fetcher from '../../../../utils/helpers/fetcher';
import Theme1NavMenu from './Theme1NavMenu';

function Theme1Navigation({ username }) {
  const toggleDrawer = () => {
    const menu = document.querySelector('.theme-1-menu');
    menu.classList.toggle('theme-1-showDrawer');
  };

  const { data: menuUsers, errorType } = useSWR(
    baseUrl.API + 'types/' + username,
    fetcher
  );
  return (
    <>
      <nav className="theme-1-navigation">
        <button
          className="theme-1-menu-open"
          id="theme-1-openDrawer"
          onClick={() => toggleDrawer()}
        >
          <i className="bi bi-list"></i>
        </button>
      </nav>
      <div className="theme-1-menu">
        <button className="theme-1-menu-close" onClick={() => toggleDrawer()}>
          <i className="bi bi-x-lg"></i>
        </button>
        <div className="theme-1-menu-drawer">
          <ul>
            <li>
              <Link href={`/${username}`}>
                <a onClick={toggleDrawer}>Home</a>
              </Link>
            </li>
            {menuUsers
              ? menuUsers.data !== 'NULL'
                ? menuUsers.data.map((menu) => {
                    return (
                      <Theme1NavMenu
                        menu={menu}
                        key={menu}
                        toggleDrawer={toggleDrawer}
                        username={username}
                      />
                    );
                  })
                : '...'
              : ''}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Theme1Navigation;
