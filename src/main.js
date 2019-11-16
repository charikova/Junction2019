/* eslint-disable no-unused-vars */
import "@babel/polyfill";

// Import Vue
import Vue from "vue";

// Import F7
import Framework7 from "framework7/framework7.esm.bundle.js";

// Import F7 Vue Plugin
import Framework7Vue from "framework7-vue/framework7-vue.esm.bundle.js";


// Combine F7 & Vue
Framework7.use(Framework7Vue);
import VueQrcode from '@chenfengyuan/vue-qrcode';
Vue.component(VueQrcode.name, VueQrcode);


// Import store
import store from "./store";
import Framework7Styles from "framework7/css/framework7.css";
// Import App Component
import App from "./app";
//Import App Icons
import IconsStyles from "./css/icons.css";


// Init App
new Vue({
  template: '<App/>',
  components: {
    app: App
  },
  store,
  data() {
    return {
      theme: "ios"
    };
  },
  render: h => h(App)
}).$mount("#app");
