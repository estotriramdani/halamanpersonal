import Link from 'next/link';

function Theme1NavMenu({ username, menu, toggleDrawer }) {
  return (
    <li>
      <Link href={`/${username}/${menu}`}>
        <a onClick={toggleDrawer} style={{ textTransform: 'capitalize' }}>
          {menu}
        </a>
      </Link>
    </li>
  );
}

export default Theme1NavMenu;
