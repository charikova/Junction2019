<template>
    <f7-page class="profile-page">
        <div>
            <f7-list form>
                <f7-list-input
                        label="Name"
                        type="text"
                        placeholder="Your name"
                        :value="name"
                        clear-button
                ></f7-list-input>

                <f7-list-input
                        label="E-mail"
                        type="email"
                        :value="email"
                        placeholder="Your e-mail"
                        clear-button
                ></f7-list-input>
                <f7-list simple-list>
                    <f7-list-item
                            v-for="tag in tags"
                            :title="tag.name"
                    >
                        <f7-toggle :checked="tag.flag"></f7-toggle>
                    </f7-list-item>
                </f7-list>
                <f7-button round @click="save" class="login-button">Save</f7-button>
            </f7-list>
        </div>
    </f7-page>
</template>

<script>
    import LeftMenu from "../components/leftMenu";
    import { mapState } from "vuex"

    export default {
        name: "settings",
        components: {LeftMenu},
        data() {
            return {
                email: '',
                name: '',
                tags: [{
                    name: 'vegan',
                    flag: true
                },
                    {
                        name: 'vegetarian',
                        flag: true
                    },
                    {
                        name: 'gluten',
                        flag: false
                    }, {
                        name: 'lactose',
                        flag: true,
                    },
                    {
                        name: 'no-sugar',
                        flag: false,
                    }
                ]
            }
        },
        computed: {
            ...mapState(['user'])
        },

        methods: {
            save () {

            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./../css/main";
    .profile-page {
        background: white;
    }
    .login-button {
        height: 44px;
        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        text-transform: uppercase;
        border: 2px $main-color solid;
        color: $main-color;
        margin: auto;
    }
</style>
