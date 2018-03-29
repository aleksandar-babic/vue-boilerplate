import * as _ from 'lodash';

const state = {
  activeUser: null,
};

const getters = {
  activeUser: (state) => state.activeUser,
  check: (state) => !_.isEmpty(state.activeUser),
  admin: (state) => {
    return state.activeUser ? state.activeUser.admin : null;
  },
};

const mutations = {
  deauth(state) {
    localStorage.clear();
    state.activeUser = null;
  },
  auth(state, activeUser) {
    state.activeUser = activeUser;
  },
};

export {
  state,
  getters,
  mutations,
};
