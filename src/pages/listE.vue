<template>
    <f7-page>
        <f7-block-title>Products</f7-block-title>
        <f7-list media-list>
            <f7-list-item
                    v-for="(product, index) in products"
                    :key="index+'-key'"
                    :link="product.picture_url"
                    :title="product.name_eng || product.name_fin"
                    :text="product.ing_eng || product.ing_fin"
            >
                <img slot="media" :src="product.picture_url+'?fit=clip&h=40&w=40'" width="40" />
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
