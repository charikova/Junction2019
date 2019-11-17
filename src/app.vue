<template>
  <f7-app id="app"
          :params="f7params">
    <main-page v-if="!login"></main-page>
    <login v-if="login"></login>
    <left-menu></left-menu>
  </f7-app>
</template>
<script>


  import routes from "./routes/index";
  import Login from "./pages/login";
  import MainPage from "./pages/main";
  import { mapState } from "vuex"
  import LeftMenu from "./components/leftMenu";

  export default {
    components: {LeftMenu, MainPage, Login },

    data() {
      return {
        popupOpened: false,
        isIE: this.$device.ie,
        isLogin: false,
        f7params: {
          id: "io.framework7.hack",
          name: "Hack",
          theme: "ios",
          routes,
          pushState: true,
          history: true
        },
      };
    },

    computed: {
      ...mapState(['login', 'exit'])
    },

    mounted() {
      if (localStorage.getItem('token')) {
        console.log(localStorage.getItem('token'))
        this.$store.state.user.token = localStorage.getItem('token')
      }
    }
  };
</script>
<style>
</style>
