import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const useUserInfo = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [available, setAvailable] = useState(false);
  const [userInfo, setUserInfo] = useState('');
  const [token, setToken] = useState('');
  useEffect(() => {
    if (isLoaded === false) {
      const user_info = JSON.parse(window.localStorage.getItem('user_info'));
      const credentials = atob(Cookies.get('credentials'));
      if (credentials) {
        setToken(credentials);
        setUserInfo(user_info);
        setAvailable(true);
      }
    }
    return () => {
      setIsLoaded(true);
    };
  }, [isLoaded]);
  return {
    available,
    userInfo,
    token,
  };
};

export default useUserInfo;
