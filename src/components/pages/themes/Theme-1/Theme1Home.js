/* eslint-disable react/no-string-refs */
import React from 'react';
import Theme1Layout from './Theme1Layout';
import Image from 'next/image';
import Theme1TypeCard from './Theme1TypeCard';
import Theme1Navigation from './Theme1Navigation';
import { baseUrl } from '../../../../configs/baseUrl';

export default function Theme1Home({ username, userData }) {
  return (
    <>
      <Theme1Layout title="Home" username={username}>
        <Theme1Navigation username={username} />
        <section className="theme-1-dark-section">
          <div className="theme-1-profile">
            <div
              className="theme-1-profile-photo"
              data-aos="fade-down"
              data-aos-duration="900"
              style={{ background: '#fff' }}
            >
              <Image
                src={baseUrl.IMAGE + userData.photo}
                alt="profile photo"
                layout="fill"
                quality={50}
                blurDataURL="/img/placeholder-landscape.jpg"
                placeholder="blur"
              />
            </div>
            <div
              className="theme-1-profile-desc"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              <p className="theme-1-profile-desc-name">{userData.name}</p>
              <p className="theme-1-profile-desc-headline">
                {userData.headline}
              </p>
              <p
                className="theme-1-profile-desc-introduction"
                dangerouslySetInnerHTML={{ __html: userData.introduction }}
              ></p>
              <p className="theme-1-profile-desc-email">{userData.email}</p>
              <div className="theme-1-profile-desc-socmed">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://instagram.com/${userData.instagram}`}
                >
                  <i className="theme-1-bi bi-instagram"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://facebook.com/${userData.facebook}`}
                >
                  <i className="theme-1-bi bi-facebook"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://github.com/${userData.github}`}
                >
                  <i className="theme-1-bi bi-github"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://linkedin.com/in/${userData.linkedin}`}
                >
                  <i className="theme-1-bi bi-linkedin"></i>
                </a>
              </div>
            </div>
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
          <div
            className="theme-1-more-info"
            dangerouslySetInnerHTML={{ __html: userData.more_info }}
          ></div>
          <div className="theme-1-content-menu">
            <Theme1TypeCard
              pageName="experiences"
              username={username}
              icon="award"
            />
            <Theme1TypeCard
              pageName="portfolios"
              username={username}
              icon="laptop"
            />
            <Theme1TypeCard
              pageName="educations"
              username={username}
              icon="book"
            />
          </div>
        </section>
      </Theme1Layout>
    </>
  );
}
