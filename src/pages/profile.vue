<template>
  <f7-page style="background: white">
    <div class="stats">
      <div class="stats-section">
        <CircleDiagram />
      </div>
      <div class="stats-section">
        kek
      </div>
    </div>
  </f7-page>
</template>

<script>
import CircleDiagram from "../components/circleDiagram";

export default {
  name: "profile",
  components: { CircleDiagram }
};
</script>

<style scoped lang="scss">
.stats {
  max-width: 500px;
  margin: 0 auto;
  &-section {
    padding: 0 0 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid #ddd;
  }
}
</style>
