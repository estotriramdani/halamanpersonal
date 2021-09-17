import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';
import Gap from '../../atoms/Gap';
import TestimonialCard from '../../moleculs/TestimonialCard';
import { baseUrl } from '../../../configs/baseUrl';
import Skeleton from 'react-loading-skeleton';
import fetcher from '../../../utils/helpers/fetcher';

const TestimonialSection = () => {
  const { data } = useSWR(baseUrl.API + 'users', fetcher);

  return (
    <div>
      <div className="testimonial-section">
        <h3>Website yang Telah Dibuat</h3>
        <Gap height={5} />
        <h2>Showcase</h2>
        <Gap height={5} />
        <style jsx>{`
          p {
            width: 100%;
            margin: auto;
          }
          @media (min-width: 768px) {
            p {
              width: 50%;
            }
          }
        `}</style>
        <p>
          Jika Anda ingin mengecek website yang telah dibangun, cukup klik link
          menuju website user kami! In case you want to check the website that
          already built, follow links bellow!
        </p>
        <Gap height={50} />
        <div className="testimonial-card-wrapper">
          {data
            ? data.data.map((data) => {
                return (
                  <TestimonialCard
                    key={data.id}
                    headline={data.headline}
                    photo={data.photo}
                    name={data.name}
                    username={data.username}
                  />
                );
              })
            : [1, 3, 4, 5].map((data) => {
                return <Skeleton key={data} width={200} height={100} />;
              })}
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
    </div>
  );
};

export default TestimonialSection;
