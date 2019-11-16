<template>
  <div class="stats-progress" ref="barRef">
    <div
      class="stats-progress-bar"
      :style="`width: ${percentsReal}%; background: ${color}`"
    ></div>
    <div class="stats-progress-text">
      {{ name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "progressBar",
  props: ["percents", "name"],
  computed: {
    color: function() {
      return "#ff6e7d";
    }
  },
  data() {
    return {
      percentsReal: 0
    };
  },
  mounted() {
    setTimeout(() => {
      this.percentsReal = this.percents;
    }, 1);
  }
};
</script>

<style scoped lang="scss">
@import "../css/main";
.stats-progress {
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  position: relative;
  flex: 1;
  border-radius: 3px;
  background: lighten($red-color, 13);
  &-bar {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background: rgb(255, 220, 155);
    border-radius: 3px;
    z-index: 10;
    transition: width 0.5s ease-in-out;
  }
  &-text {
    z-index: 11;
    position: relative;
    color: white;
    font-weight: bold;
  }
}
</style>
