import axios from "axios";
import Vue from "vue";


const URL = `http://${process.env.VUE_APP_API_HOST}:${
  process.env.VUE_APP_API_PORT
  }/api/`;

const initialState = () => ({
  user: {},
  activeMenu: 'Log In',
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
          const toastCenter = this.$f7.toast.create({
            text: "CardId undefined",
            position: "center",
            closeTimeout: 1000,
            cssClass: "text-align-center"
          });
          toastCenter.open();
          throw error
        })
  }
};

const mutations = {
  setUser (state, data) {
    this.state.user = data
  },

  openPanel (state, data) {
    this.state.openedPanel = data;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
