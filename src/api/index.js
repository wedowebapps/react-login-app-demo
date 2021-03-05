import ApiConstants from './ApiConstants';

export default function api(path, params, method, token, isFormData) {
  let options;
  options = {
    headers:
      isFormData === true
        ? {
            Accept: 'application/json',
            ...(token && { Authorization: token }),
          }
        : {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...(token && { Authorization: token }),
          },
    method: method,
    ...(params && { body: isFormData ? params : JSON.stringify(params) }),
  };
  return new Promise((resolve, reject) => {
    return fetch(ApiConstants.BASE_URL + path, options)
      .then((resp) => resp.json())
      .then((json) => {
        if (json.status_code !== 200) {
          return reject(json);
        }
        return resolve(json);
      })
      .catch((error) => {
        return reject(error);
      });
  });
}
