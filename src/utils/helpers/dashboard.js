import { baseUrl } from '../../configs/baseUrl';

const changeProfile = async (forms, introduction, moreInfo, photo, token) => {
  console.log(forms);
  var myHeaders = new Headers();
  myHeaders.append('Accept', 'application/json');
  myHeaders.append('Authorization', `Bearer ${token}`);

  var formdata = new FormData();
  formdata.append('name', forms.name);
  formdata.append('username', forms.username);
  formdata.append('email', forms.email);
  if (photo) {
    formdata.append('photo', photo);
  }
  formdata.append('introduction', introduction);
  formdata.append('more_info', moreInfo);
  formdata.append('headline', forms.headline);
  formdata.append('facebook', forms.facebook);
  formdata.append('instagram', forms.instagram);
  formdata.append('linkedin', forms.linkedin);
  formdata.append('github', forms.github);
  formdata.append('theme_id', '1');

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow',
  };

  try {
    const response = await fetch(
      baseUrl.API + 'users?_method=PUT',
      requestOptions
    );
    const responseJson = await response.json();
    console.log(responseJson);
    return 'success';
  } catch (error) {
    return error;
  }
};

const createContent = async (token, username, description, forms, photo) => {
  const myHeaders = new Headers();
  myHeaders.append('Accept', 'application/json');
  myHeaders.append('Authorization', `Bearer ${token}`);

  const formdata = new FormData();
  formdata.append('type', forms.type);
  formdata.append('username', username);
  formdata.append('title', forms.title);
  formdata.append('subtitle', forms.subtitle);
  formdata.append('desc', description);
  if (photo) {
    formdata.append('img', photo);
  }

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow',
  };

  try {
    const response = await fetch(baseUrl.API + 'contents', requestOptions);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return error;
  }

  // fetch(baseUrl.API + 'contents', requestOptions)
  //   .then((response) => response.text())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log('error', error));
};

export { changeProfile, createContent };
