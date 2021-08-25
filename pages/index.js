import Head from 'next/head';
import Gap from '../src/components/atoms/Gap';
import FeatureCard from '../src/components/moleculs/FeatureCard';
import Image from 'next/image';

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
          {/* <div className="hero-image">
            <Image
              src="http://esto.my.id/files/images/portfolios-mockup/thumbnail/daily-prayer.jpg"
              alt={'no alt'}
              layout="fill"
            />
          </div> */}
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
        <div className="cta-section">
          <h3>Let&apos;s Build Your Own</h3>
          <h2>Build</h2>
          <Gap height={30} />
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
        <div className="testimonial-section"></div>
      </main>
    </div>
  );
}
