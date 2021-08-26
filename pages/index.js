import Head from 'next/head';
import Link from 'next/link';
import Gap from '../src/components/atoms/Gap';
import FeatureCard from '../src/components/moleculs/FeatureCard';
import TestimonialCard from '../src/components/moleculs/TestimonialCard';
import Image from 'next/image';
import IMGTheme from '../src/images/theme-section.png';

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
        <div className="hero">
          <div className="hero-text">
            <h1 className="hero-text-title" style={{ position: 'relative' }}>
              Show Yourself To <span className="underline">The World</span>.
            </h1>
            <h2 className="hero-text-subtitle">
              Create your personal web page to show the world your masterpiece
            </h2>
            <Gap height={10} />
            <div className="hero-text-button">
              <a href="#" className="button-blue " tabIndex={1}>
                Try Now
              </a>
            </div>
          </div>
        </div>
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
      <footer className="footer">
        <div className="footer-item-wrapper">
          <div className="footer-item">
            <h2>Contact</h2>
            <ul>
              <li>
                <a href="https://instagram.com">Instagram</a>
              </li>
              <li>
                <a href="https://facebook.com">Email</a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h2>Contributor</h2>
            <ul>
              <li>
                <a href="https://estotriramdani.github.io">Esto Triramdani N</a>
              </li>
              <li>
                <a href="https://github.com/mazuhdi">M Agung Zuhdi </a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h2>Contributing</h2>
            <ul>
              <li>
                <a href="https://github.com/estotriramdani">
                  Click Here To Contribute
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="bottom-section">
        <p>Copyright © 2021 HalamanPersonal.id</p>
      </div>
    </div>
  );
}
