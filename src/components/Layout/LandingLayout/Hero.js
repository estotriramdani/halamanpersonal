import React from 'react';
import Gap from '../../atoms/Gap';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';

const Hero = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

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
          Show Yourself To <span className="underline">The World</span>.
        </h1>
        <h2 className="hero-text-subtitle">
          Create your personal web page to show the world your masterpiece
        </h2>
        <Gap height={10} />
        <div className="hero-text-button">
          <Link href={isLoggedIn ? '/dashboard' : '/auth/login'}>
            <a className="button-primary" tabIndex={1}>
              Get Started
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
