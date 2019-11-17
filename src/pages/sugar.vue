<template>
    <f7-page style="background: white">
        <f7-block strong :style="`background:white;color:black;`">
            <h2>Products with high level of </h2>
            <h4>{{`This is ${e.description}. Side effetcs: ${e.side_effects}.`}}</h4>
        </f7-block>
        <f7-block-title>Products</f7-block-title>
        <f7-list media-list>
            <f7-list-item
                    v-for="(product, index) in products"
                    :key="index+'-key'"
                    :link="product.picture_url"
                    :title="product.name_eng || product.name_fin"
                    :text="product.ing_eng || product.ing_fin"
            >
                <img slot="media" :src="product.picture_url+'?fit=clip&h=160&w=160'" width="40" />
            </f7-list-item>
        </f7-list>
    </f7-page>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: "sugar",
    computed: {
      ...mapState(['products', 'e'])
    },
    mounted() {
      console.log(this.e)
    }
  }
</script>

<style scoped>

</style>
