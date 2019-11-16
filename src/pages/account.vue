<template>
    <f7-page class="main-page" color-theme="green">
        <f7-page no-toolbar no-swipeback class="k-account" style="background: white">
            <div class="profile">
                <div class="profile-name">
                    <div class="profile-name-image">
                    </div>
                    <div class="profile-name-text">
                        Username
                    </div>
                </div>
                <div class="profile-actions">
                    <f7-button raised>Log out</f7-button>
                </div>
            </div>
            <f7-list simple-list>
                <f7-list-item title="Purchases history">
                    <i class="f7-icons">demo-list-icon</i>
                </f7-list-item>
                <f7-list-item title="Recommended recipes"></f7-list-item>
                <f7-list-item title="Edit your diet"></f7-list-item>
                <f7-list-item title="Bonuses"></f7-list-item>
                <f7-list-item title="Settings"></f7-list-item>
                <f7-list-item title="About"></f7-list-item>
            </f7-list>
        </f7-page>
    </f7-page>
</template>

<script>
  export default {
    name: "account"
  };
</script>

<style lang="scss" scoped>
    @import "./../css/main";

    .profile {
        background: $main-color;
        color: #fff;
        font-weight: bold;
        padding: 20px 10px;
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
                border: 1px solid #fff;
                img {
                    width: 100%;
                    height: 100%;
                    background: lighten($main-color, 20%);
                }
            }
            &-text {
                font-size: 20px;
            }
        }
        &-actions .button {
            border-color: #fff;
            font-size: 20px;
            color: #fff;
            height: 50px;
            line-height: 50px;
        }
    }
</style>
