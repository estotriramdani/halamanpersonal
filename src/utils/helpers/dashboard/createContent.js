import { baseUrl } from '../../../configs/baseUrl';

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
};

export default createContent;
