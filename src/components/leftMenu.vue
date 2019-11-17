<template>
    <f7-panel left resizable @panel:close="close" class="panel-menu" ref="panel">
        <account></account>
    </f7-panel>
</template>

<script>
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

        watch: {
            openedPanel (newValue) {
                console.log(this.$refs)
                if (newValue) {
                    this.$refs.panel.open()
                }
                else {
                    this.$refs.panel.close()
                }
            }
        }
    }
</script>

<style scoped>
    .panel-menu {
        box-shadow: 0 0 3px 2px rgba(0,0,0,0.1);
    }
</style>
