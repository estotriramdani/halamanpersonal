import React from 'react';
import Gap from '../../atoms/Gap';
import FeatureCard from '../../moleculs/FeatureCard';

const FeatureSection = () => {
  return (
    <div className="feature-section">
      <div className="heading-group-wrapper">
        <h3>Just few clicks</h3>
        <Gap height={14} />
        <h2>Features</h2>
        <Gap height={14} />
        <h4>
          Build personal page easily. You can check the example, if you meet any
          problem.
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
