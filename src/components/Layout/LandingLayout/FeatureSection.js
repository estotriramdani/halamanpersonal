import React from 'react';
import Gap from '../../atoms/Gap';
import FeatureCard from '../../moleculs/FeatureCard';

const features = [
  {
    id: 1,
    icon: 'award-fill',
    headline: 'Tambahkan Riwayat Pendidikan Anda',
    description:
      'Latar belakang pendidikan sedikit banyak dapat memengaruhi rekam jejak Anda.',
  },
  {
    id: 2,
    icon: 'laptop-fill',
    headline: 'Tunjukkan Portofolio',
    description:
      'Portofolio merupakan salah satu bukti nyata bahwa Anda sudah berkarya.',
  },
  {
    id: 3,
    icon: 'skip-backward-fill',
    headline: 'Uraikan Pengalaman Anda',
    description:
      'Pengalaman sukarela hingga pengalaman kerja dapat Anda cantukan di HalamanPersonal.',
  },
  {
    id: 4,
    icon: 'file-earmark-pdf-fill',
    headline: 'Deskripsikan Sertifikasi yang Pernah Diikuti',
    description:
      'Sertifikat yang telah Anda peroleh akan memengaruhi proses personal branding Anda!',
  },
  {
    id: 5,
    icon: 'sort-alpha-down',
    headline: 'Dan masih banyak lagi...',
    description:
      'Kami akan berusaha untuk terus menambahkan fitur HalamanPersonal. Stay tuned!',
  },
];

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
        {features.map((feature) => {
          return (
            <FeatureCard
              key={feature.id}
              description={feature.description}
              headline={feature.headline}
              icon={feature.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeatureSection;
