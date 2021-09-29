/* eslint-disable react/no-string-refs */
import React from 'react';
import Theme1Layout from './Theme1Layout';
import Image from 'next/image';
import Theme1TypeCard from './Theme1TypeCard';
import Theme1Navigation from './Theme1Navigation';
import { baseUrl } from '../../../../configs/baseUrl';
import useSWR from 'swr';
import fetcher from '../../../../utils/helpers/fetcher';
import Theme1Socmed from './Theme1Socmed';
import Skeleton from 'react-loading-skeleton';

export default function Theme1Home({ username, userData }) {
  const { data: types, errorType } = useSWR(
    baseUrl.API + 'types/' + username,
    fetcher
  );

  const { data: socmeds, errorSocmed } = useSWR(
    baseUrl.API + 'user/' + username + '/socmed',
    fetcher
  );

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
                src={userData.photo}
                alt="profile photo"
                layout="fill"
                objectFit="cover"
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
                {socmeds
                  ? socmeds.data.map((socmed) => {
                      return (
                        <Theme1Socmed
                          key={socmed.id}
                          href={socmed.socmed_link}
                          name={socmed.socmed_name}
                        />
                      );
                    })
                  : [1, 2, 3, 4].map((skeleton) => (
                      <Skeleton
                        key={skeleton}
                        width={40}
                        height={40}
                        circle={true}
                        style={{ marginRight: '10px' }}
                      />
                    ))}
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
            {types
              ? types.data !== 'NULL'
                ? types.data.map((type) => {
                    return (
                      <Theme1TypeCard
                        key={type}
                        pageName={type}
                        username={username}
                        icon="app"
                      />
                    );
                  })
                : ''
              : ''}
          </div>
        </section>
      </Theme1Layout>
    </>
  );
}
