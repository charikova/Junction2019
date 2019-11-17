<template>
<f7-page class="main-page login" color-theme="green">
    <div class="k-choice-login">
        <f7-block class="k-choice-login-block">
            <div class="k-choice-login-logo">
            </div>
            <f7-col tag="p">
                <f7-col tag="span">
                    <f7-button class="k-choice-login-button" round raised @click="openLogin">Log in</f7-button>
                </f7-col>
                <f7-col tag="span">
                    <f7-button class="k-choice-login-button" round  raised>Sign up</f7-button>
                </f7-col>
            </f7-col>
        </f7-block>
    </div>
    <f7-login-screen color-theme="green" class="openLogin" :opened="openedLogin && $store.state.login">
        <f7-navbar class="login-navbar">
            <f7-nav-title>Log In</f7-nav-title>
            <div class="close">
                <i class="f7-icons" @click="openedLogin = false">close</i>
            </div>
        </f7-navbar>
        <f7-page login-screen>
            <div class="login-popup">
                <f7-list class="login-form" form>
                    <f7-list-input
                            label="CardId"
                            type="text"
                            placeholder="Your cardId"
                            :value="cardId"
                            @input="cardId = $event.target.value"
                            class="login-input"
                    ></f7-list-input>
                </f7-list>
                <f7-button round @click="logIn" class="login-button">Log In</f7-button>
            </div>
        </f7-page>
    </f7-login-screen>
</f7-page>
</template>

<script>
    export default {
        name: "login",
        data () {
            return {
                openedLogin: false,
                cardId: ''
            }
        },
        methods: {
            openLogin () {
                this.openedLogin = !this.openedLogin
            },

            logIn () {
                if (!this.cardId) return
                this.$store.dispatch("login", {
                    card_id: this.cardId
                })
                    .then (() => {
                        this.openedLogin = false
                        setTimeout(
                            () => this.$store.state.login = false,
                            300)
                    })
                    .catch(() =>{
                        const toastCenter = this.$f7.toast.create({
                            text: "CardId undefined",
                            position: "center",
                            closeTimeout: 1000,
                            cssClass: "text-align-center"
                        });
                        toastCenter.open();
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./../css/main";
    .k-choice-login {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 85%;
        &-block {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            height: 80%;
        }

        &-button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 300px;
            height: 44px;
            margin-bottom: 30px;
            cursor: pointer;
            border-width: 2px;
            font-weight: bold;
            text-transform: uppercase;
        }

        &-logo {
            width: 100%;
            height: 80px;
            background: url('./../img/loloJ.png');
            background-size: cover;
        }
    }

    .close {
        position: absolute;
        top: 10px;
        right: 15px;
        cursor: pointer;
    }

    .login-navbar {
        color: white;
        background: $main-color;
        height: 52px;

        .title {
            font-size: 20px !important;
        }
    }

    .login-button {
        height: 44px;
        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-width: 2px;
        font-weight: bold;
        text-transform: uppercase;
    }

    .login-popup {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 80px;
    }

    .login-form {
        width: 100%;
        margin-bottom: 60px !important;
    }

    .login {
        background: white !important;
    }

    .login-input {
        .item-input-wrap {
            border-bottom: 1px black solid;
        }
    }

</style>
