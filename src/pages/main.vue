<template>
    <f7-page>
        <header-main>
           {{ activeMenu }}
        </header-main>
        <f7-view id="main-view"
                 :router="true"
                 :push-state="true"></f7-view>
        <left-menu></left-menu>
    </f7-page>
</template>

<script>
    import HeaderMain from "../components/headerMain";
    import { mapState } from 'vuex'
    import LeftMenu from "../components/leftMenu";
    import Login from "./login";

    export default {
        name: "mainPage",
        components: {Login, LeftMenu, HeaderMain},
        computed: {
            ...mapState([ 'activeMenu', 'login'])
        }
    }
</script>

<style scoped>

</style>
