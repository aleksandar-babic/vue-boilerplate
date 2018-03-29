import Axios from 'axios';

const PREFIX = '/auth';
const ENDPOINTS = {
  LOGIN: '/login',
  REGISTER: '/signup',
  CHANGE_PASSWORD: '/change-password',
};
const AUTH_HEADER = 'Authorization';

export default {
  setAuthHeader() {
    Axios.defaults.headers.common[AUTH_HEADER] = `JWT ${localStorage.getItem('token')}`;
  },

  register(data) {
    return Axios.post(PREFIX + ENDPOINTS.REGISTER, data);
  },

  login(data) {
    return Axios.post(PREFIX + ENDPOINTS.LOGIN, data);
  },

  changePassword(data) {
    return Axios.put(PREFIX + ENDPOINTS.CHANGE_PASSWORD, data);
  },
};
