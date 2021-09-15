import { baseUrl } from '../../configs/baseUrl';

const changeProfile = async (forms, introduction, moreInfo, photo, token) => {
  var myHeaders = new Headers();
  myHeaders.append('Accept', 'application/json');
  myHeaders.append('Authorization', `Bearer ${token}`);

  var formdata = new FormData();
  formdata.append('name', forms.name);
  formdata.append('username', forms.username);
  formdata.append('email', forms.email);
  formdata.append('password', 'qwe123');
  formdata.append('photo', photo);
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
    return 'success';
  } catch (error) {
    return error;
  }
};

export { changeProfile };
