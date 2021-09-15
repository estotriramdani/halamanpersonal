import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Theme1Home from '../../src/components/pages/themes/Theme-1/Theme1Home';

function Home() {
  const router = useRouter();
  const username = router.query.username;
  return <Theme1Home username={username} />;
}

export default Home;
