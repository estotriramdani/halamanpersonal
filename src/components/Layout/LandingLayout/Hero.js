import React from 'react';
import Gap from '../../atoms/Gap';

const Hero = () => {
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
          <a href="#" className="button-blue " tabIndex={1}>
            Try Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
