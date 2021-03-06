import { useRouter } from 'next/dist/client/router';
import { useCallback, useEffect, useState } from 'react';
import Theme1Home from '../../src/components/pages/themes/Theme-1/Theme1Home';
import { baseUrl } from '../../src/configs/baseUrl';
import NotFoundPage from '../../src/components/pages/NotFoundPage';
import Preloader from '../../src/components/pages/Preloader/Index';
import axios from 'axios';

function Home() {
  const router = useRouter();
  const [data, setData] = useState({});
  const [username, setUsername] = useState('');
  const getUserData = useCallback(async (username) => {
    const data = await axios.get(baseUrl.API + 'user/' + username);
    setData(data.data);
    setUsername(username);
  }, []);
  useEffect(() => {
    if (router.isReady) {
      getUserData(router.query.username);
    }
  }, [router, getUserData]);
  if (data) {
    if (data.status === 'success') {
      return (
        <>
          {/* {isMe ? <ButtonToDashboard /> : ''} */}
          <Theme1Home username={username} userData={data.data} />
        </>
      );
    } else {
      return <NotFoundPage />;
    }
  }
  return <Preloader />;
}

export default Home;
