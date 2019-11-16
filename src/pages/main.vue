<template>
<f7-page class="main-page" color-theme="green">
    <f7-page no-toolbar no-navbar no-swipeback login-screen class="login-screen-page k-choice-login">
        <f7-block class="k-choice-login-block">
            <div class="k-choice-login-logo">
            </div>
            <f7-col tag="p">
                <f7-col tag="span">
                    <f7-button class="k-choice-login-button" raised>Log in</f7-button>
                </f7-col>
                <f7-col tag="span">
                    <f7-button class="k-choice-login-button" raised>Sign up</f7-button>
                </f7-col>
            </f7-col>
        </f7-block>
    </f7-page>
</f7-page>
</template>

<script>
    export default {
        name: "main",
    }
</script>

<style lang="scss" scoped>
    @import "./../css/main";
    .k-choice-login {
        &-block {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            height: 70%;
        }

        &-button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 300px;
            height: 44px;
            margin-bottom: 30px;
            cursor: pointer;
        }

        &-logo {
            width: 140px;
            height: 140px;
            border-radius: 100px;
            background: $main-color;
        }
    }
</style>
