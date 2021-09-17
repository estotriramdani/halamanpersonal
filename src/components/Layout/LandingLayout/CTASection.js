import Link from 'next/link';
import React from 'react';
import Gap from '../../atoms/Gap';

const CTASection = () => {
  return (
    <div className="cta-section">
      <h3>Mulai Bangun Milikmu</h3>
      <h2>Bangun</h2>
      <Gap height={10} />
      <style jsx>{`
        p {
          width: 100%;
          margin: auto;
        }
        @media (min-width: 768px) {
          p {
            width: 50%;
          }
        }
      `}</style>
      <p>
        HalamanPersonal dirancang untuk mudah digunakan oleh siapapun. Cukup
        ikuti langkah-langkahnya dan Anda akan memiliki website personal secara
        instan!
      </p>
      <Gap height={40} />
      <div className="button-wrapper">
        <Link href="/auth/register">
          <a className="button-secondary">MULAI</a>
        </Link>
      </div>
    </div>
  );
};

export default CTASection;
