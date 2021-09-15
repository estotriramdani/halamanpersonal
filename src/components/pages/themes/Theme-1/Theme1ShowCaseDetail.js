import Theme1Layout from './Theme1Layout';
import Theme1Navigation from './Theme1Navigation';
import Image from 'next/image';
import Theme1ItemCard from './Theme1ItemCard';
import Link from 'next/link';

export default function Theme1ShowCaseDetail({ username, type }) {
  let pageTitle = '';
  if (type) {
    pageTitle = type[0].toUpperCase() + type.substr(1);
  }
  return (
    <Theme1Layout title={pageTitle} username={username}>
      <Theme1Navigation username={username} />
      <section className="theme-1-dark-section">
        <div className="theme-1-showcase-hero-detail">
          <div className="theme-1-showcase-hero-detail-cover">
            <Image
              src="http://esto.my.id/files/images/experiences/thumb/automateall.jpg"
              alt="/"
              data-aos="zoom-in-up"
              data-aos-duration="1200"
              placeholder="blur"
              blurDataURL="/img/placeholder-landscape.jpg"
              layout="fill"
            />
            <a
              href="http://esto.my.id/files/images/experiences/thumb/automateall.jpg"
              target="_blank"
              rel="noreferrer"
              className="theme-1-showcase-hero-detail-cover-link"
            >
              See original image
            </a>
          </div>
          <div className="theme-1-showcase-hero-detail-text">
            <div className="theme-1-showcase-hero-detail-text-title">
              CV Solusi Automasi Indonesia
            </div>
            <div className="theme-1-showcase-hero-detail-text-subtitle">
              Front-end Web Developer Internship (February 2021 - May 2021)
            </div>
            <hr className="theme-1-showcase-hero-detail-text-breakline" />
            <div className="theme-1-showcase-hero-detail-text-desc">
              <p>
                I worked with team and updating Automate All website (landing
                page, course detail page, and course video page). I built them
                with Vanilla JavaScript for client-side scripting and for do
                some programming logics, and I used Sass (SCSS syntax) as CSS
                preprocessor to styled them.
              </p>
            </div>
            <Link href={`/${username}/${type}`}>
              <a
                className="theme-1-showcase-hero-detail-text-hashtag"
                style={{ color: '#71798f' }}
              >
                #{type}
              </a>
            </Link>
          </div>
        </div>
        <a href="#light-section" className="theme-1-dark-section-scroll-down">
          <i className="theme-1-theme-1-bi bi-arrow-down"></i> scroll
        </a>
      </section>
      <section
        className="theme-1-light-section"
        id="light-section"
        data-aos="fade-in"
        data-aos-duration="2000"
      >
        <Theme1ItemCard
          username={username}
          type={type}
          image="http://esto.my.id/files/images/experiences/thumb/automateall.jpg"
          slug="cv-solusi-automasi"
          title="CV Solusi Automasi Indonesia"
          subtitle="Front-end Web Developer"
        />
        <Theme1ItemCard
          username={username}
          type={type}
          image="http://esto.my.id/files/images/experiences/thumb/automateall.jpg"
          slug="cv-solusi-automasi"
          title="CV Solusi Automasi Indonesia"
          subtitle="Front-end Web Developer"
        />
        <div style={{ height: '15px' }}></div>
        <Link href={`/${username}`}>
          <a className="theme-1-back-to-home-link">Back To Home</a>
        </Link>
      </section>
    </Theme1Layout>
  );
}
