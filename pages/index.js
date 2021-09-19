/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import Head from 'next/head';
import Gap from '../src/components/atoms/Gap';
import dynamic from 'next/dynamic';
const Hero = dynamic(() =>
  import('../src/components/Layout/LandingLayout/Hero')
);
const CTASection = dynamic(() =>
  import('../src/components/Layout/LandingLayout/CTASection')
);
const FeatureSection = dynamic(() =>
  import('../src/components/Layout/LandingLayout/FeatureSection')
);
const Footer = dynamic(() =>
  import('../src/components/Layout/LandingLayout/Footer')
);
const TestimonialSection = dynamic(() =>
  import('../src/components/Layout/LandingLayout/TestimonialSection')
);

export default function Home() {
  return (
    <div style={{ backgroundClip: '#ffffff' }}>
      <Head>
        <title>HalamanPersonal.my.id</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        />
      </Head>
      <main>
        <Hero />
        <Gap height={70} />
        <FeatureSection />
        <Gap height={70} />
        <CTASection />
        <Gap height={40} />
        <TestimonialSection />
        <Gap height={40} />
      </main>
      <Footer />
    </div>
  );
}
