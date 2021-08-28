import Link from 'next/link';
import React from 'react';
import Gap from '../../atoms/Gap';
import TestimonialCard from '../../moleculs/TestimonialCard';

const TestimonialSection = () => {
  return (
    <div>
      <div className="testimonial-section">
        <h3>Have A Look</h3>
        <h2>Showcase</h2>
        <Gap height={5} />
        <p>
          In case you want to check the website that already built, follow links
          bellow!
        </p>
        <Gap height={50} />
        <div className="testimonial-card-wrapper">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
        <Gap height={40} />
        <Link href="/all-user">
          <a
            style={{
              textDecoration: 'underline',
            }}
            className="see-all-list"
          >
            See full list here!
          </a>
        </Link>
      </div>
    </div>
  );
};

export default TestimonialSection;
