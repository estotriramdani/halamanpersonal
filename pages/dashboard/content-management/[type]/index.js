import React from 'react';
import Skeleton from 'react-loading-skeleton';
import useSWR from 'swr';
import Gap from '../../../../src/components/atoms/Gap';
import DashboardContentCard from '../../../../src/components/dashboard/DashboardContentCard';
import DashboardLayout from '../../../../src/components/Layout/DashboardLayout';
import { baseUrl } from '../../../../src/configs/baseUrl';
import useQuery from '../../../../src/utils/hooks/useQuery';
import useUserInfo from '../../../../src/utils/hooks/useUserInfo';
import styles from './content-detail.module.css';
import Link from 'next/link';

export default function Type() {
  const { type } = useQuery();

  const { userInfo } = useUserInfo();

  const { data: contents } = useSWR(
    baseUrl.API + 'contents/' + userInfo.username + '/' + type
  );
  console.log(contents);
  return (
    <DashboardLayout title="Content Management" pageTitle="Content Management">
      <h2 className="dashboard-h2">
        <Link href="/dashboard/content-management">
          <a style={{ textDecoration: 'underline' }}>Content</a>
        </Link>
        : {type || <Skeleton width={200} />}
      </h2>
      <Gap height={20} />
      <div className={styles.cardWrapper}>
        {userInfo && contents && type ? (
          contents.data.map((content) => {
            return (
              <DashboardContentCard
                key={content.slug}
                image={content.img}
                slug={content.slug}
                subtitle={content.subtitle}
                title={content.title}
                type={content.type}
              />
            );
          })
        ) : (
          <Skeleton height={200} width="100%" />
        )}
      </div>
    </DashboardLayout>
  );
}

export async function getServerSideProps({ req }) {
  const { credentials } = req.cookies;
  if (!credentials) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }
  const credentialsDecode = Buffer.from(credentials, 'base64').toString(
    'ascii'
  );
  return {
    props: {
      credentials: credentialsDecode,
    },
  };
}
