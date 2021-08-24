import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import titleGenerator from '../../utils/titleGenerator';

const PageHeading = () => {
  const router = useRouter();
  let pageTitle = 'Loading ...';
  if (router.query.pageName) {
    pageTitle = titleGenerator(router.query.pageName);
  }
  return (
    <div className="page-heading">
      <h1>{pageTitle || <Skeleton width={`50%`} height="100%" />}</h1>
    </div>
  );
};

export default PageHeading;
