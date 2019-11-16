<template>
    <f7-panel left resizable swipe class="panel" :opened="openedPanel" ref="panel">
        <account></account>
    </f7-panel>
</template>

<script>
    import $$ from 'dom7'
    import { mapState } from 'vuex'
    import Account from "../pages/account";
    export default {
        name: "leftMenu",
        components: {Account},
        computed: {
            ...mapState(['openedPanel'])
        },
        methods: {
            close () {
                this.$store.commit('openPanel', false)
            }
        },
        mounted() {
            $$('.panel').on('panel:close', this.close);
        }
    }
</script>

<style scoped>

</style>
