<template>
    <f7-navbar ref="navbar" class="k-header-navbar">
        <f7-nav-left></f7-nav-left>
        <f7-nav-title class="k-title">
            <slot></slot>
        </f7-nav-title>
        <div class="k-right">
            <i class="f7-icons">menu</i>
        </div>
    </f7-navbar>
</template>

<script>
  export default {
    name: "HeaderMain",
    mounted() {
      this.$refs.navbar.size();
    }
  };
</script>

<style scoped lang="scss">
    @import "./../css/main";
    .k-header-navbar {
        background: $main-color;
        height: 52px;
        color: #fff;
    }
    .k-title {
        font-size: 20px!important;
    }

    .k-right {
        position: absolute;
        top: 10px;
        right: 10px;

        i {
            font-size: 26px !important;
        }
    }
</style>
