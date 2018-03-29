import Vue from 'vue';
import * as _ from 'lodash';

import store from 'Store';
import AuthApiService from 'Api/auth.service';

export default {
  setLocalStorageAuthData(data) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('user_id', data.user ? data.user.id : null);
    localStorage.setItem('user', JSON.stringify(data.user));
  },

  checkLocalStorage() {
    const userData = JSON.parse(localStorage.getItem('user'));

    if (userData) {
      AuthApiService.setAuthHeader();
    }

    return userData;
  },

  updateUserInLocalStorage(newUserData) {
    const userData = JSON.parse(localStorage.getItem('user'));
    _.assign(userData, newUserData);
    localStorage.setItem('user', JSON.stringify(userData));
  },

  login(data) {
    return AuthApiService.login(data).then((response) => {
      this.setLocalStorageAuthData(response.data);
      AuthApiService.setAuthHeader();
      store.commit('auth', response.data.user);
      Vue.prototype.router.push({ name: 'home' });
      return response;
    });
  },

  register(data) {
    return AuthApiService.register(data);
  },

  logout() {
    this.setLocalStorageAuthData({
      token: null,
      user: null,
    });

    AuthApiService.setAuthHeader();
    store.commit('deauth');
  },

  changePassword(data) {
    return AuthApiService.changePassword(data);
  },

  checkAuthStatus() {
    const userData = this.checkLocalStorage();
    if (!userData) {
      return false;
    }
    store.commit('auth', userData);
    return store.getters.activeUser;
  },
};
