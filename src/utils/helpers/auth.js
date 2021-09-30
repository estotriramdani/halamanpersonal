import axios from 'axios';
import { baseUrl } from '../../configs/baseUrl';

const register = async (values) => {
  const data = new FormData();
  data.append('name', values.name);
  data.append('username', values.username);
  data.append('email', values.email);
  data.append('password', values.password);
  data.append('theme_id', '1');
  const config = {
    method: 'post',
    url: baseUrl.API + 'register',
    headers: {
      Accept: 'application/json',
    },
    data: data,
  };
  try {
    const response = await axios(config);
    const responseJson = await response.data;
    if (responseJson.token) {
      return responseJson;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

const login = async (values) => {
  const myHeaders = new Headers();
  myHeaders.append('Accept', 'application/json');
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

  const urlencoded = new URLSearchParams();
  urlencoded.append('email', values.email);
  urlencoded.append('password', values.password);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow',
  };

  try {
    const response = await fetch(baseUrl.API + 'login', requestOptions);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return error;
  }
};

const forgotPassword = async (value) => {
  return value ? 'OK' : 'NOT OK';
};

export { register, login, forgotPassword };
