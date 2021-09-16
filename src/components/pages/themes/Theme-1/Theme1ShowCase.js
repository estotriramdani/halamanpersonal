import Theme1Layout from './Theme1Layout';
import Link from 'next/link';
import Theme1Navigation from './Theme1Navigation';
import Theme1ItemCard from './Theme1ItemCard';
import useSWR from 'swr';
import fetcher from '../../../../utils/helpers/fetcher';
import { baseUrl } from '../../../../configs/baseUrl';
import Skeleton from 'react-loading-skeleton';
import { useEffect, useState } from 'react';
import Theme1ListCard from './Theme1ListCard';

export default function Theme1ShowCase({ username, type }) {
  const [isLoaded, setIsLoaded] = useState(false);
  let pageTitle = '...';
  if (type) {
    pageTitle = type[0].toUpperCase() + type.substr(1);
  }

  useEffect(() => {
    if (isLoaded === false) {
      setTimeout(() => {
        setIsLoaded(true);
      }, 1500);
    }
  }, [isLoaded]);

  const { data: quote, error } = useSWR(
    'https://api.quotable.io/random',
    fetcher
  );

  return (
    <Theme1Layout title={pageTitle} username={username}>
      <Theme1Navigation username={username} />
      <section
        className="theme-1-dark-section"
        style={{ height: '400px!important' }}
      >
        <div className="theme-1-showcase-hero-index">
          <p
            className="theme-1-showcase-hero-index-hashtag"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            {isLoaded ? (
              <Link href={`/${username}/${type}`}>
                <a style={{ color: '#fff', textDecoration: 'underline' }}>
                  {' '}
                  #{type}
                </a>
              </Link>
            ) : (
              <Skeleton width={200} height={25} />
            )}
          </p>
          <p
            className="theme-1-showcase-hero-index-headline"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            {pageTitle !== '...' ? (
              quote ? (
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
              )
            ) : (
              <Skeleton width={'80vh'} height={25} count={5} />
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
        <Theme1ListCard type={type} username={username} />
        <div style={{ height: '15px' }}></div>
        <Link href={`/${username}`}>
          <a className="theme-1-back-to-home-link">Back To Home</a>
        </Link>
      </section>
    </Theme1Layout>
  );
}
