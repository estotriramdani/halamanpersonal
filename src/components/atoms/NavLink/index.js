import React from 'react';
import Link from 'next/link';

const NavLink = ({ title, icon }) => {
  return (
    <Link href="/esto">
      <a className="nav-link">
        <i className={'bi bi-' + icon + ' nav-link-icon'}></i>
        <span className="nav-link-title">{title}</span>
      </a>
    </Link>
  );
};

export default NavLink;
