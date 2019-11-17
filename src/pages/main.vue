<template>
    <f7-page>
        <header-main>
           {{ activeMenu }}
        </header-main>
        <router-view></router-view>
    </f7-page>
</template>

<script>
    import HeaderMain from "../components/headerMain";
    import { mapState } from 'vuex'
    import Login from "./login";
    import Account from "./account";
    import LeftMenu from "../components/leftMenu";
    import routes from './../routes/index'

    export default {
        name: "mainPage",
        components: {LeftMenu, Account, Login, HeaderMain},
        computed: {
            ...mapState([ 'activeMenu', 'login'])
        },
        data () {
            return {
                routes
            }
        }
    }
</script>

<style scoped>

</style>
