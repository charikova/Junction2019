<template>
  <div class="stats-progress" ref="barRef">
    <div class="stats-progress-bar" :style="`width: ${percents}%; background: ${color}`"></div>
    <div class="stats-progress-text">{{name}}: <b>{{value}}</b></div>
  </div>
</template>

<script>

export default {
  name: "progressBar",
  props: ["percents", "name", "value"],
  computed: {
    color: function() {
      if (this.percents > 75) return '#ff6e7d';
      if (this.percents > 50) return '#ffc935'
      return '#95d059';
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
