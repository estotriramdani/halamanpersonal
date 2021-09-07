import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../../configs/baseUrl';
import AuthAlert from '../../atoms/Alert';

function ButtonLogout() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [token, setToken] = useState('');
  const [isLoggingOut, setIsLoggingOut] = useState(false);

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
        setTimeout(() => {
          setIsLoggedOut(true);
          scrollTo(top);
        }, 400);
        setTimeout(() => {
          setIsLoggedOut(false);
          router.push('/auth/login');
        }, 2000);
      })
      .catch((error) => console.log('error', error));
  };

  useEffect(() => {
    if (!isLoaded) {
      const user_info = JSON.parse(window.localStorage.getItem('user_info'));
      const credentials = window.localStorage.getItem('credentials');
      setToken(credentials);
      axios
        .get(baseUrl.API + user_info.username)
        .then((response) => {
          setUserInfo(response.data.data);
        })
        .then(() => {
          setIsLoaded(true);
        });
    }
  }, [isLoaded, token]);
  return (
    <div className="dashboard-nav-item">
      {isLoggedOut ? (
        <div
          style={{
            width: '300px',
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: '40',
          }}
        >
          <AuthAlert message="Logout success!" type="success" />
        </div>
      ) : (
        ''
      )}
      {isLoggingOut ? (
        <div
          style={{
            width: '300px',
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: '40',
          }}
        >
          <AuthAlert message="Logging you out. Please wait..." type="warning" />
        </div>
      ) : (
        ''
      )}
      <a
        style={{ width: '100%', display: 'inline-block', cursor: 'pointer' }}
        onClick={handleLogout}
      >
        <i className="bi bi-box-arrow-left"></i>&nbsp; Logout
      </a>
    </div>
  );
}

export default ButtonLogout;
