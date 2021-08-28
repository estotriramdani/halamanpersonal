import Head from 'next/head';
import Link from 'next/link';
import Gap from '../src/components/atoms/Gap';
import TestimonialCard from '../src/components/moleculs/TestimonialCard';
import Hero from '../src/components/Layout/LandingLayout/Hero';
import Footer from '../src/components/Layout/LandingLayout/Footer';
import FeatureSection from '../src/components/Layout/LandingLayout/FeatureSection';
import ThemeSection from '../src/components/Layout/LandingLayout/ThemeSection';
import CTASection from '../src/components/Layout/LandingLayout/CTASection';
import TestimonialSection from '../src/components/Layout/LandingLayout/TestimonialSection';

export default function Home() {
  return (
    <div style={{ backgroundClip: '#ffffff' }}>
      <Head>
        <title>HalamanPersonal.my.id</title>
        <meta
          name="description"
          content="Halaman Personal merupakan sebuah plaform untuk halaman personal"
        />
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
        <ThemeSection />
        <Gap height={40} />
        <CTASection />
        <Gap height={40} />
        <TestimonialSection />
        <Gap height={40} />
      </main>
      <Footer />
    </div>
  );
}
