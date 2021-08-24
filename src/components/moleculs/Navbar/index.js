import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import Link from 'next/link';
import NavLink from '../../atoms/NavLink';

const Navbar = () => {
  const router = useRouter();
  return (
    <div>
      <nav className="navbar">
        <Link href={'/' + router.query.username}>
          <a className="navbar-brand">
            <i className="bi bi-house-fill navbar-brand-icon"></i>
            <h1>{router.query.username || <Skeleton width="50px" />}</h1>
          </a>
        </Link>
        <div className="nav-item">
          <NavLink icon="award-fill" title={'Educations'} href="educations" />
          <NavLink
            icon="signpost-split-fill"
            title={'Experiences'}
            href="experiences"
          />
          <NavLink icon="trophy-fill" title={'Portfolios'} href="portfolios" />
          <NavLink
            icon="unlock-fill"
            title={'Achievements'}
            href="achievements"
          />
        </div>
      </nav>
      <div className="navbar-gap"></div>
    </div>
  );
};

export default Navbar;
