import Theme1Layout from './Theme1Layout';
import Theme1Navigation from './Theme1Navigation';
import Image from 'next/image';
import Theme1ItemCard from './Theme1ItemCard';
import Link from 'next/link';
import useSWR from 'swr';
import { baseUrl } from '../../../../configs/baseUrl';
import Theme1ListCard from './Theme1ListCard';

export default function Theme1ShowCaseDetail({ username, type, slug }) {
  let pageTitle = '';
  if (type) {
    pageTitle = type[0].toUpperCase() + type.substr(1);
  }
  const { data } = useSWR(`${baseUrl.API}contents/${username}/${type}/${slug}`);
  console.log(data);

  return (
    <Theme1Layout title={pageTitle} username={username}>
      <Theme1Navigation username={username} />
      <section className="theme-1-dark-section">
        <div className="theme-1-showcase-hero-detail">
          {data ? (
            <>
              <div className="theme-1-showcase-hero-detail-cover">
                <Image
                  src={baseUrl.IMAGE + 'content-image/' + data.data.img}
                  alt={data.data.title}
                  data-aos="zoom-in-up"
                  data-aos-duration="1200"
                  placeholder="blur"
                  blurDataURL="/img/placeholder-landscape.jpg"
                  layout="fill"
                />
                <a
                  href={baseUrl.IMAGE + 'content-image/' + data.data.img}
                  target="_blank"
                  rel="noreferrer"
                  className="theme-1-showcase-hero-detail-cover-link"
                >
                  See original image
                </a>
              </div>
              <div className="theme-1-showcase-hero-detail-text">
                <div className="theme-1-showcase-hero-detail-text-title">
                  {data.data.title}
                </div>
                <div className="theme-1-showcase-hero-detail-text-subtitle">
                  {data.data.subtitle}
                </div>
                <hr className="theme-1-showcase-hero-detail-text-breakline" />
                <div
                  className="theme-1-showcase-hero-detail-text-desc"
                  dangerouslySetInnerHTML={{ __html: data.data.desc }}
                ></div>
                <Link href={`/${username}/${type}`}>
                  <a
                    className="theme-1-showcase-hero-detail-text-hashtag"
                    style={{ color: '#71798f', textDecoration: 'underline' }}
                  >
                    #{type}
                  </a>
                </Link>
              </div>
            </>
          ) : (
            ''
          )}
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
        <Theme1ListCard type={type} username={username} />
        <div style={{ height: '15px' }}></div>
        <Link href={`/${username}`}>
          <a className="theme-1-back-to-home-link">Back To Home</a>
        </Link>
      </section>
    </Theme1Layout>
  );
}
