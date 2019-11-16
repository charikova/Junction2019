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
                <f7-list-item
                        v-for="item, index in links"
                        @click="navigate(item.link)"
                        :title="item.title"
                        :key="`key-${index}`"
                >
                </f7-list-item>
            </f7-list>
    </f7-page>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: "account",
    computed: {
        ...mapState(['user'])
    },
    data () {
      return {
          links: [{
              title: 'Yours statistics',
              link: '/'
          },{
              title: 'Recommended recipes',
              link: '/recipes'
          }, {
              title: 'Profile',
              link: '/profile'
          }]
      }
    },
    methods: {
        logOut () {
            this.$store.commit('openPanel', false)
            setTimeout(()=>this.$store.commit('logout'), 300)
        },

        navigate (link) {
            this.$f7route.navigate(link)
        }
    }
  };
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
</style>
