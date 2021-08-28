import React from 'react';
import Gap from '../../atoms/Gap';
import Image from 'next/image';
import IMGTheme from '../../../images/theme-section.png';
const ThemeSection = () => {
  return (
    <div className="theme-section">
      <h2>Theme</h2>
      <Gap height={14} />
      <h4>You are free to choose theme you love</h4>
      <div className="theme-image">
        <Image
          src={IMGTheme}
          alt="Theme illustration"
          layout="fill"
          objectFit="contain"
          quality={50}
        />
      </div>
    </div>
  );
};

export default ThemeSection;
