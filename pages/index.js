import Head from 'next/head';
import Link from 'next/link';
import Gap from '../src/components/atoms/Gap';
import FeatureCard from '../src/components/moleculs/FeatureCard';
import TestimonialCard from '../src/components/moleculs/TestimonialCard';
import Image from 'next/image';
import IMGTheme from '../src/images/theme-section.png';
import Hero from '../src/components/Layout/LandingLayout/Hero';
import Footer from '../src/components/Layout/LandingLayout/Footer';

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
        <div className="feature-section">
          <div className="heading-group-wrapper">
            <h3>Just few clicks</h3>
            <Gap height={14} />
            <h2>Features</h2>
            <Gap height={14} />
            <h4>
              Build personal page easily. You can check the example, if you meet
              any problem.
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
        <div className="theme-section">
          <h2>Theme</h2>
          <Gap height={14} />
          <h4>You are free to choose theme you love</h4>
          <div className="theme-image">
            <Image
              src={IMGTheme}
              alt="Theme illustration"
              layout="fill"
              objectFit="contain"
              quality={50}
            />
          </div>
        </div>
        <div className="cta-section">
          <h3>Let&apos;s Build Your Own</h3>
          <h2>Build</h2>
          <Gap height={5} />
          <p>
            It is easy to set everything up. Just follow the instructions and,
            boom, you will get your own website!
          </p>
          <Gap height={40} />
          <div className="button-wrapper">
            <a href="https://halamanpersonal.id/build" className="button-red">
              Start
            </a>
          </div>
        </div>
        <Gap height={40} />
        <div className="testimonial-section">
          <h3>Have A Look</h3>
          <h2>Showcase</h2>
          <Gap height={5} />
          <p>
            In case you want to check the website that already built, follow
            links bellow!
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
        <Gap height={40} />
      </main>
      <Footer />
    </div>
  );
}
