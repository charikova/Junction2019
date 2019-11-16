import axios from "axios";
import Vue from "vue";


const URL = `http://${process.env.VUE_APP_API_HOST}:${
  process.env.VUE_APP_API_PORT
  }/api/`;

const initialState = () => ({
  user: {},
  activeMenu: 'Your statistics',
  login: true,
  openedPanel: false
});

const state = initialState();
const axiosConfig = {
  headers: {
    "Content-Type": "application/json"
  }
};


const axiosConfigAut = {
  headers: {
    "Content-Type": "application/json",
    "Authorization": state.user.token
  }
};

const getters = {

};

const actions = {
  login({getters, commit}, data) {

    return axios
        .post(`${URL}login`,data, axiosConfig)
        .then(({data}) => {
          commit("setUser", data)
          return true
        })
        .catch((error) => {
          throw error
        })
  }
};

const mutations = {
  setUser (state, data) {
    state.user = data
    localStorage.setItem('token', state.user.token)
  },

  openPanel (state, data) {
   state.openedPanel = data;
  },

  logout (state) {
    state.user = {};
    state.login = true;
    localStorage.setItem('token', '')
  },
  setMenuName(state, activeMenu) {
    state.activeMenu = activeMenu;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
