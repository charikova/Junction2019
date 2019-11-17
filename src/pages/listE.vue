<template>
    <f7-page>
        <f7-block-title>Songs</f7-block-title>
        <f7-list media-list>
            <f7-list-item
                    v-for="product in produtcs"
                    :link="product.picture_url"
                    :title="product.name_eng || product.name_fin"
                    subtitle="Beatles"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
            >
                <img slot="media" :src="product.picture_url" width="80" />
            </f7-list-item>
        </f7-list>
    </f7-page>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "listE",
        computed: {
            ...mapState(['products'])
        }
    }
</script>

<style scoped>

</style>
