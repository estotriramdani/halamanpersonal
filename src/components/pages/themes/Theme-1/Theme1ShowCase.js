import Theme1Layout from './Theme1Layout';
import Link from 'next/link';
import Theme1Navigation from './Theme1Navigation';
import Theme1ItemCard from './Theme1ItemCard';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function Theme1ShowCase({ username, type }) {
  let pageTitle = '...';
  if (type) {
    pageTitle = type[0].toUpperCase() + type.substr(1);
  }
  const { data: quote, error } = useSWR(
    'https://api.quotable.io/random',
    fetcher
  );

  return (
    <Theme1Layout title={pageTitle}>
      <Theme1Navigation username={username} />
      <section className="theme-1-dark-section">
        <div className="theme-1-showcase-hero-index">
          <p
            className="theme-1-showcase-hero-index-hashtag"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            #{type}
          </p>
          <p
            className="theme-1-showcase-hero-index-headline"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            {quote ? (
              <span>
                {quote.content} <br />{' '}
                <p
                  style={{
                    fontSize: '16px',
                    marginTop: '20px',
                    color: '#71798f',
                  }}
                >
                  {quote.author}
                </p>
              </span>
            ) : (
              '..................'
            )}
          </p>
        </div>
        <a href="#light-section" className="theme-1-dark-section-scroll-down">
          <i className="theme-1-bi bi-arrow-down"></i> scroll
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
