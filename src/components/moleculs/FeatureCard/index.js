import React from 'react';

const FeatureCard = () => {
  return (
    <div className="feature-card">
      <div className="feature-card-heading">
        <div className="feature-card-heading-icon">
          <i className="bi bi-award-fill"></i>
        </div>
        <h3 className="feature-card-heading-title">
          Add Your Education History
        </h3>
      </div>
      <div className="feature-card-body">
        <p>
          Add your education history so everyone will know which field you
          capable of.
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
