<template>
    <f7-navbar ref="navbar" class="k-header-navbar">
        <f7-nav-left>
            <i class="f7-icons" style="font-weight: bold;" @click="openPanel">menu</i>
        </f7-nav-left>
        <f7-nav-title class="k-title">
            <slot></slot>
        </f7-nav-title>
    </f7-navbar>
</template>

<script>
  export default {
    name: "HeaderMain",
    mounted() {
      this.$refs.navbar.size();
    },

    methods: {
        openPanel () {
            this.$store.commit('openPanel', true)
        }
    }
  };
</script>

<style scoped lang="scss">
    @import "./../css/main";
    .k-header-navbar {
        position: fixed;
        z-index: 5001;
        background: $main-color;
        height: 52px;
        color: #fff;

        .navbar-inner .sliding {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .k-title {
        font-size: 20px!important;
    }

    .k-right {
        position: absolute;
        top: 10px;
        left: 15px;

        i {
            font-size: 26px !important;
        }
    }
</style>
