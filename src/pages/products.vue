<template>
  <f7-page style="background: white">
    <div class="products">
        <div class="products-description">
            {{description}}
        </div>
    </div>
  </f7-page>
</template>

<script>
export default {
  name: "products",
  mounted() {
    this.$store.commit("setMenuName", "Purchases");
    console.log(this.$f7route.params.subject);
  },
  computed: {
    description: function() {
      if (this.$f7route.params.subject === "sugar") {
        return "Products with high level of sugar you have bought this month";
      }
      return "";
    }
  }
};
</script>

<style scoped lang="scss">
@import "../css/main";
.products {
  max-width: 500px;
  margin: 20px auto;
  padding: 0 20px;
    &-description {
        font-size: 1.3em;
    }
}
</style>
