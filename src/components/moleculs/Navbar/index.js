import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import Link from 'next/link';
import NavLink from '../../atoms/NavLink';

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="navbar">
      <Link href={'/' + router.query.username}>
        <a className="navbar-brand">
          <i className="bi bi-house-fill navbar-brand-icon"></i>
          <h1>{router.query.username || <Skeleton width="50px" />}</h1>
        </a>
      </Link>
      <div className="nav-item">
        <NavLink icon="award-fill" title={'Educations'} />
        <NavLink icon="signpost-split-fill" title={'Experiences'} />
        <NavLink icon="trophy-fill" title={'Portfolios'} />
        <NavLink icon="unlock-fill" title={'Achievements'} />
      </div>
    </nav>
  );
};

export default Navbar;
