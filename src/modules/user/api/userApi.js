import Api from '../../../api';

export function loginUser (data) {
  return Api('/login', data, 'post', '');
};