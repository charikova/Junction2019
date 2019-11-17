<template>
    <f7-page class="main-page" color-theme="green" style="background: white">
        <div class="profile">
            <div class="profile-name">
                <div class="profile-name-image">
                </div>
                <div class="profile-name-text">
                    {{ user.name }}
                </div>
            </div>
            <div class="profile-actions">
                <f7-button raised @click="logOut">Log out</f7-button>
            </div>
        </div>
        <f7-list simple-list>
            <div
                    v-for="(item, index) in links"
                    @click="navigateLink(item)"
                    :key="`key-${index}`"
                    class="item-menu"
            >
                {{item.title}}
            </div>
        </f7-list>
    </f7-page>
</template>

<script>
    import {mapState} from 'vuex'
    import vue from './../main'

    export default {
        name: "account",
        computed: {
            ...mapState(['user'])
        },
        data() {
            return {
                links: [{
                    title: 'Your statistics',
                    link: '/'
                }, {
                    title: 'Recommended recipes',
                    link: '/recipes'
                }, {
                    title: 'Profile',
                    link: '/profile'
                }]
            }
        },
        methods: {
            logOut() {
                this.$store.commit('openPanel', false)
                setTimeout(() => this.$store.commit('logout'), 300)
            },
            navigateLink(item) {
                vue.$f7.views.main.router.navigate(item.link, {
                    reloadCurrent: true,
                    ignoreCache: true,
                    reloadAll:true})
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./../css/main";

    .profile {
        background: transparent;
        color: black;
        font-weight: bold;
        padding: 10px 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        &-name {
            display: flex;
            flex-direction: row;
            align-items: center;

            &-image {
                margin-right: 10px;
                border-radius: 50%;
                height: 50px;
                width: 50px;
                border: 1px solid black;

                img {
                    width: 100%;
                    height: 100%;
                    background: lighten($main-color, 20%);
                }
            }

            &-text {
                font-size: 16px;
            }
        }

        &-actions .button {
            display: flex;
            justify-content: center;
            align-items: center;
            border-color: black;
            font-size: 12px;
            color: black;
            padding: 10px;
        }
    }

    .item-menu {
        padding-left: 15px;
        padding-right: 15px;
        line-height: 44px;
        height: 44px;
        position: relative;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 100%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-line-pack: center;
        align-content: center;
    }
</style>
