import { useRouter } from 'next/dist/client/router';
import React from 'react';
import useSWR from 'swr';
import Theme1Home from '../../src/components/pages/themes/Theme-1/Theme1Home';
import fetcher from '../../src/utils/helpers/fetcher';
import { baseUrl } from '../../src/configs/baseUrl';
import NotFoundPage from '../../src/components/pages/NotFoundPage';
import Preloader from '../../src/components/pages/Preloader/Index';

function Home() {
  const router = useRouter();
  const username = router.query.username;

  const { data, error } = useSWR(baseUrl.API + 'user/' + username, fetcher);

  if (data) {
    if (data.status === 'success') {
      return <Theme1Home username={username} userData={data.data} />;
    } else {
      return <NotFoundPage />;
    }
  }
  return <Preloader />;
}

export default Home;
