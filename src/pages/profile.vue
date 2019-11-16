<template>
  <f7-page style="background: white">
    <div class="stats">
      <div class="stats-section stats-section-chart">
        <CircleDiagram />
      </div>
      <div class="stats-section">
        <progress-bar percents="100" />
      </div>
    </div>
  </f7-page>
</template>

<script>
import CircleDiagram from "../components/circleDiagram";
import ProgressBar from "../components/progressBar";

export default {
  name: "profile",
  components: { ProgressBar, CircleDiagram }
};
</script>

<style scoped lang="scss">
.stats {
  max-width: 500px;
  margin: 0 auto;
  &-section {
    padding: 15px;
    border-bottom: 1px solid #ddd;
  }
  &-section-chart {
    padding: 15px 0 15px;
  }
}
</style>
