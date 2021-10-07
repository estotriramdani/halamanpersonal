import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { baseUrl } from '../../../configs/baseUrl';
import useUserInfo from '../../../utils/hooks/useUserInfo';
import AuthAlert from '../../atoms/Alert';

function ButtonLogout() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { userInfo, token } = useUserInfo();

  const handleLogout = () => {
    setIsLoggingOut(true);
    const username = userInfo.username;
    const myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    const formdata = new FormData();
    formdata.append('username', username);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch(baseUrl.API + 'logout', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .then(() => {
        setIsLoggingOut(false);
        window.localStorage.setItem('credentials', '');
        window.localStorage.setItem('user_info', '{}');
        Cookies.remove('credentials');
        setTimeout(() => {
          toast.warn('Logging you out');
          scrollTo(top);
        }, 400);
        setTimeout(() => {
          toast.success('Logout success');
          router.push('/auth/login');
        }, 2000);
      })
      .catch((error) => console.log('error', error));
  };

  return (
    <div className="dashboard-nav-item">
      <a
        style={{ width: '100%', display: 'inline-block', cursor: 'pointer' }}
        onClick={handleLogout}>
        <i className="bi bi-box-arrow-left"></i>&nbsp; Logout
      </a>
    </div>
  );
}

export default ButtonLogout;
