import React from 'react';
import Skeleton from 'react-loading-skeleton';
import Head from 'next/head';
import Gap from '../../atoms/Gap';

export default function DashboardSkeleton({ title }) {
  return (
    <div className="dashboard-wrapper">
      <Head>
        <title>{title}</title>
        <meta name="description" content="....." />
      </Head>
      <div className="dashboard-nav">
        <p style={{ margin: 'auto', width: '100%' }}>
          <Skeleton width="100%" height="35px" />
        </p>
      </div>
      <div className="dashboard-content">
        <Skeleton width="100%" height="40px" />
        <Gap height="15px" />
        <Skeleton width="100%" height="20px" />
        <Gap height="15px" />
        <Skeleton width="100%" height="35vh" />
        <Gap height="10px" />
        <Skeleton width="100%" height="30px" />
      </div>
      <div className="dashboard-nav">
        <p style={{ margin: 'auto', width: '100%' }}>
          <Skeleton width="100%" height="35px" />
        </p>
      </div>
    </div>
  );
}
