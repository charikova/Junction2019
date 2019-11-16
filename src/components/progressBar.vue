<template>
  <div class="stats-progress" ref="barRef">
    <div class="stats-progress-bar" :style="`width: ${percents}%; background: ${color}`"></div>
    <div class="stats-progress-text">Saturated fats: <b>100 g</b></div>
  </div>
</template>

<script>
const chartColors = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(201, 203, 207)"
};

export default {
  name: "progressBar",
  props: ["percents"],
  computed: {
    color: function() {
      if (this.percents > 75) return chartColors.red;
      if (this.percents > 50) return chartColors.yellow;
      return chartColors.green;
    }
  }
};
</script>

<style scoped lang="scss">
.stats-progress {
  height: 30px;
  line-height: 30px;
  color: black;
  padding: 0 10px;
  position: relative;
  flex: 1;
  &-bar {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background: rgb(255, 220, 155);
    border-radius: 5px;
    z-index: -1;
  }
  &-text {
  }
}
</style>
