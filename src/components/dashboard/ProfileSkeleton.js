import React from 'react';
import Skeleton from 'react-loading-skeleton';
import Gap from '../atoms/Gap';

const ProfileSkeleton = () => {
  return (
    <div>
      <Gap height={10} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Skeleton circle={true} height={200} width={200} />
      </div>
      <Gap height={20} />
      {[1, 2, 3, 4, 5, 6, 7].map((number) => {
        return (
          <div key={number}>
            <Skeleton width="100%" height={42} />
            <Gap height={10} />
          </div>
        );
      })}
    </div>
  );
};

export default ProfileSkeleton;
