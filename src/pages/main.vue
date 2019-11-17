<template>
    <f7-page>
        <header-main>
           {{ activeMenu }}
        </header-main>
        <f7-view id="main-view"
                 :router="true"
                 :push-state="true"></f7-view>
    </f7-page>
</template>

<script>
    import HeaderMain from "../components/headerMain";
    import { mapState } from 'vuex'
    import Login from "./login";
    import Account from "./account";

    export default {
        name: "mainPage",
        components: {Account, Login, HeaderMain},
        computed: {
            ...mapState([ 'activeMenu', 'login'])
        }
    }
</script>

<style scoped>

</style>
