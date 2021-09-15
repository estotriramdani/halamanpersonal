/* eslint-disable react/no-string-refs */
import React from 'react';
import Theme1Layout from './Theme1Layout';
import Image from 'next/image';
import Theme1TypeCard from './Theme1TypeCard';
import Theme1Navigation from './Theme1Navigation';

export default function Theme1Home({ username }) {
  return (
    <>
      <Theme1Layout title="Home | Esto Triramdani N">
        <Theme1Navigation username={username} />
        <section className="theme-1-dark-section">
          <div className="theme-1-profile">
            <div
              className="theme-1-profile-photo"
              data-aos="fade-down"
              data-aos-duration="900"
            >
              <Image
                src="https://estotriramdani.github.io/img/photo-1x1.jpg"
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
              <p className="theme-1-profile-desc-name">
                Esto Triramdani Nurlustiawan
              </p>
              <p className="theme-1-profile-desc-headline">
                Front-end Engineer
              </p>
              <p className="theme-1-profile-desc-introduction">
                I am a fast leaner, speed worker, and adaptive person. When
                working on a project, I can turn myself into target-oriented
                mode. I love to solve problems with code and keep the solution
                as simple as possible. I also have written some books
                (bukuesto.github.io).
              </p>
              <p className="theme-1-profile-desc-email">
                estotriramdani@gmail.com
              </p>
              <div className="theme-1-profile-desc-socmed">
                <a href="#">
                  <i className="theme-1-bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="theme-1-bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="theme-1-bi bi-github"></i>
                </a>
                <a href="#">
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
          <div className="theme-1-more-info">
            <p>
              <strong>Programming Languages</strong>
            </p>
            <p>JavaScript • PHP • Python • Dart • SQL</p>
            <p>
              <strong>Frameworks / Libraries</strong>
            </p>
            <p>
              React JS • React Native • Bootstrap CSS • Laravel • CodeIgniter •
              Vue JS • SASS • Angular • jQuery • Node JS • Express JS •
              MySQL/MariaDB/PostgreSQL
            </p>
            <p>
              <strong>Design Tools</strong>
            </p>
            <p>Adobe Photoshop • Adobe XD • Adobe Illustrator • Figma</p>
          </div>
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
