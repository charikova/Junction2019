<template>
    <f7-navbar ref="navbar" class="myheader-navbar">
        <f7-nav-title class="mytitle">Log In</f7-nav-title>
        <div class="close">
            <i class="f7-icons" @click="openedLogin = false">close</i>
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
    .myheader-navbar {
        background: $main-color;
        height: 72px;
        color: #fff;
    }
    .mytitle {
        font-size: 20px!important;
    }
</style>
