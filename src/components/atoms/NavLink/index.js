import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

const NavLink = ({ title, icon, href }) => {
  const router = useRouter();

  return (
    <Link href={'/' + router.query.username + '/' + href}>
      <a
        className="nav-link"
        style={
          href === router.query.pageName ? { color: 'white: !important' } : {}
        }
      >
        <i className={'bi bi-' + icon + ' nav-link-icon'}></i>
        <span className="nav-link-title">{title}</span>
      </a>
    </Link>
  );
};

export default NavLink;
