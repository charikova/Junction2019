import axios from "axios";
import Vue from "vue";

const URL = `http://${process.env.VUE_APP_API_HOST}:${
  process.env.VUE_APP_API_PORT
}/api/`;

const initialState = () => ({
  user: {},
  activeMenu: "Your statistics",
  login: true,
  openedPanel: false,
  statistics: [],
  products: []
});

const state = initialState();
const axiosConfig = {
  headers: {
    "Content-Type": "application/json"
  }
};

const getters = {};

const actions = {
  login({ getters, commit }, data) {
    return axios
      .post(`${URL}login`, data, axiosConfig)
      .then(({ data }) => {
        commit("setUser", data);
        return true;
      })
      .catch(error => {
        throw error;
      });
  },

  getStatistics({ getters, commit, state }) {
    const axiosConfigAuth = {
      headers: {
        "Content-Type": "application/json",
        Authorization: state.user.token
      }
    };
    return axios
      .get(`${URL}statistics`, axiosConfigAuth)
      .then(({ data }) => {
        commit("setStatistics", data);
        return true;
      })
      .catch(error => {
        throw error;
      });
  },

  getProducts({ getters, commit, state }, data) {
    const axiosConfigAuth = {
      headers: {
        "Content-Type": "application/json",
        Authorization: state.user.token
      }
    };
    return axios
      .post(`${URL}products`, data, axiosConfigAuth)
      .then(({ data }) => {
        commit("setProducts", data);
        return true;
      })
      .catch(error => {
        throw error;
      });
  },

  getFats({ getters, commit, state }, data) {
    const axiosConfigAuth = {
      headers: {
        "Content-Type": "application/json",
        Authorization: state.user.token
      }
    };
    return axios
      .get(`${URL}fats`, data, axiosConfigAuth)
      .then(({ data }) => {
        commit("setFats", data);
        return true;
      })
      .catch(error => {
        throw error;
      });
  },

  getSugar({ getters, commit, state }, data) {
    const axiosConfigAuth = {
      headers: {
        "Content-Type": "application/json",
        Authorization: state.user.token
      }
    };
    return axios
      .get(`${URL}sugar`, data, axiosConfigAuth)
      .then(({ data }) => {
        commit("setSugar", data);
        return true;
      })
      .catch(error => {
        throw error;
      });
  }
};

const mutations = {
  setUser(state, data) {
    state.user = data;
    localStorage.setItem("token", state.user.token);
  },

  openPanel(state, data) {
    state.openedPanel = data;
  },

  logout(state) {
    state.user = {};
    state.login = true;
    localStorage.setItem("token", "");
  },
  setMenuName(state, activeMenu) {
    state.activeMenu = activeMenu;
  },
  setStatistics(state, data) {
    state.statistics = data;
  },
  setProducts(state, data) {
    state.products = data;
    console.log(state.products);
  },
  setFats(state, data) {
    state.fats = data;
    console.log(state.fats);
  },
  setSugar(state, data) {
    state.sugar = data;
    console.log(state.sugar);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
