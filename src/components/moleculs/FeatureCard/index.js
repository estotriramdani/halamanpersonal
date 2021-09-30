import React from 'react';

const FeatureCard = ({ icon, headline, description }) => {
  return (
    <div className="feature-card">
      <div className="feature-card-heading">
        <div className="feature-card-heading-icon">
          <i className={'bi bi-' + icon}></i>
        </div>
        <h3 className="feature-card-heading-title">{headline}</h3>
      </div>
      <div className="feature-card-body">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
