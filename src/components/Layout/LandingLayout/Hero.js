import React from 'react';
import Gap from '../../atoms/Gap';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user_info = window.localStorage.getItem('user_info');
    if (user_info !== null || user_info !== '{}') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  return (
    <div className="hero">
      <div className="hero-text">
        <h1 className="hero-text-title" style={{ position: 'relative' }}>
          Tunjukkan Dirimu Kepada <span className="underline">Dunia</span>.
        </h1>
        <h2 className="hero-text-subtitle">
          Bangun personal website dan tunjukkan karya-karya terbaikmu!
        </h2>
        <Gap height={10} />
        <div className="hero-text-button">
          <Link href={isLoggedIn ? '/dashboard' : '/auth/login'}>
            <a className="button-primary" tabIndex={1}>
              Mulai
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
