import React from 'react';
import Gap from '../../atoms/Gap';
import Image from 'next/image';
import IMGTheme from '../../../images/theme-section.png';
const ThemeSection = () => {
  return (
    <div className="theme-section">
      <h2>Tema</h2>
      <Gap height={14} />
      <style jsx>{`
        h4 {
          width: 100%;
          margin: auto;
        }
        @media (min-width: 768px) {
          h4 {
            width: 50%;
          }
        }
      `}</style>
      <h4>
        Kami menyediakan beberapa tema untuk Anda gunakan. Silakan pilih yang
        sesuai dengan Anda. Dan, tentunya kami akan memperbarui kesediaan tema
        pada HalamanPersonal
      </h4>
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
