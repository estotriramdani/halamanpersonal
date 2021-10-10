import React from 'react';
import Skeleton from 'react-loading-skeleton';
import Gap from '../atoms/Gap';

function DashboardContentCardSkeleton() {
  return (
    <>
      <div>
        <Skeleton height={150} width="100%" />
        <div style={{ padding: '10px' }}>
          <Skeleton height={20} width="100%" style={{ marginBottom: '4px' }} />
          <Skeleton
            height={18}
            width="50%"
            style={{ marginBottom: '4px' }}
          />{' '}
          <br />
          <Skeleton height={17} width="25%" />
        </div>
        <Skeleton height={35} width="100%" />
      </div>
      <Gap height={40} />
    </>
  );
}

export default DashboardContentCardSkeleton;
