import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { baseUrl } from '../../configs/baseUrl';
import fetcher from '../helpers/fetcher';
import useUserInfo from './useUserInfo';

const useIsMe = () => {
  const router = useRouter();
  const username = router.query.username;
  const [isMe, setIsMe] = useState(false);
  const { data, error } = useSWR(baseUrl.API + 'user/' + username, fetcher);

  const { userInfo, available } = useUserInfo();

  useEffect(() => {
    if (data && userInfo) {
      if (data.data.username === userInfo.username) {
        setIsMe(true);
      }
    }
  }, [userInfo, data, available]);

  return isMe;
};

export default useIsMe;
