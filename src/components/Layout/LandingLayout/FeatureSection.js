import React from 'react';
import Gap from '../../atoms/Gap';
import FeatureCard from '../../moleculs/FeatureCard';

const FeatureSection = () => {
  return (
    <div className="feature-section">
      <div className="heading-group-wrapper">
        <h3>Hanya beberapa klik</h3>
        <Gap height={14} />
        <h2>Fitur</h2>
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
          Bangun personal webiste dengan mudah. Jika menemui kesulitan, Anda
          bisa melihat contoh yang sudah ada. Kami akan selalu memperbarui
          fitur-fitur yang tersedia!
        </h4>
      </div>
      <div className="feature-card-wrapper">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </div>
  );
};

export default FeatureSection;
