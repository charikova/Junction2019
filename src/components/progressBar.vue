<template>
    <div class="stats-progress" ref="barRef">
        <div class="stats-progress-bar" :style="`width: ${percents}%`"></div>
        <div class="stats-progress-text">
            Saturated fats: <b>100 g</b>
        </div>
    </div>
</template>

<script>
  export default {
    name: "progressBar",
    props: ['percents']
  };
</script>

<style scoped lang="scss">
    .stats-progress {
        display: flex;
        height: 30px;
        line-height: 30px;
        color: black;
        padding: 0 10px;
        position: relative;
        &-bar {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            background: rgb(255, 220, 155);
            border-radius: 5px;
            z-index: 10;
        }
        &-text {
            z-index: 11;
        }
    }
</style>
