import { useEffect, useState } from 'react';

const useUserInfo = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const [userInfo, setUserInfo] = useState('');
  const [token, setToken] = useState('');
  useEffect(() => {
    if (isLoaded === false) {
      const user_info = JSON.parse(window.localStorage.getItem('user_info'));
      const credentials = window.localStorage.getItem('credentials');
      if (credentials != null || credentials != '') {
        setToken(credentials);
        setUserInfo(user_info);
      }
    }
    return () => {
      setIsLoaded(true);
    };
  }, [isLoaded]);
  return {
    userInfo,
    token,
  };
};

export default useUserInfo;
