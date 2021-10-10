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
  const headers = new Headers();
  headers.append('Accept', 'application/json');
  headers.append('Content-Type', 'application/x-www-form-urlencoded');

  const urlencoded = new URLSearchParams();
  urlencoded.append('email', values.email);
  urlencoded.append('password', values.password);

  const requestOptions = {
    method: 'POST',
    headers: headers,
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

const forgotPassword = async (values) => {
  var formdata = new FormData();
  formdata.append('email', values.email);

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
  };

  try {
    const response = await fetch(
      'https://halamanpersonal-backend.herokuapp.com/api/forgot-password',
      requestOptions
    );
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return error;
  }
};

const resetPassword = async (values, token) => {
  var formdata = new FormData();
  formdata.append('email', values.email);
  formdata.append('password', values.password);
  formdata.append('password_confirmation', values.password_confirmation);
  formdata.append('token', token);
  console.log(values, token);
  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
  };

  try {
    const response = await fetch(
      `https://halamanpersonal-backend.herokuapp.com/api/reset-password/${token}`,
      requestOptions
    );
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return error;
  }
};

export { register, login, forgotPassword, resetPassword };
