import Link from 'next/link';
import React from 'react';
import Gap from '../../atoms/Gap';

const CTASection = () => {
  return (
    <div className="cta-section">
      <h3>Let&apos;s Build Your Own</h3>
      <h2>Build</h2>
      <Gap height={5} />
      <p>
        It is easy to set everything up. Just follow the instructions and, boom,
        you will get your own website!
      </p>
      <Gap height={40} />
      <div className="button-wrapper">
        <Link href="/auth/register">
          <a className="button-secondary">Start</a>
        </Link>
      </div>
    </div>
  );
};

export default CTASection;
