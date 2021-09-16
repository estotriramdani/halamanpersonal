import { baseUrl } from '../../../configs/baseUrl';

const deleteContent = async (token, slug) => {
  const headers = new Headers();
  headers.append('Authorization', 'Bearer ' + token);

  const requestOptions = {
    method: 'DELETE',
    headers: headers,
    redirect: 'follow',
  };

  try {
    const response = await fetch(
      `${baseUrl.API}contents/${slug}`,
      requestOptions
    );
    const responseJson = response.json();
    return responseJson;
  } catch (error) {
    return error;
  }
};
export default deleteContent;
