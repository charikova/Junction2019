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

    export default {
        name: "mainPage",
        components: {HeaderMain},
        computed: {
            ...mapState([ 'activeMenu'])
        }
    }
</script>

<style scoped>

</style>
