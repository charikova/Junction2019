<template>
  <f7-page style="background: white">
    <div
      v-if="!loaded"
      style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center"
    >
      <f7-preloader :size="42"></f7-preloader>
    </div>
    <div class="stats" v-if="loaded">
      <div class="stats-section">
        <f7-swiper navigation :params="{ initialSlide: 2 }">
          <f7-swiper-slide v-for="curMonth in months">
            <div class="stats-section-chart">
              <CircleDiagram
                :proteins="curMonth.proteins"
                :carbohydrates="curMonth.carbohydrates"
                :fats="curMonth.fats"
                :month="curMonth.month"
              />
            </div>
          </f7-swiper-slide>
        </f7-swiper>
      </div>
      <div class="stats-section">
        <div class="stats-row" @click="sugarClick">
          <div class="stats-label">Sugar</div>
          <div class="stats-number" style="border-color: #ff6e7d">
            {{ Math.round(monthData.sugar) }}
          </div>
        </div>
        <div class="stats-row">
          <progress-bar
            :percents="
              Math.round((monthData.fats_saturated / monthData.fats) * 100)
            "
            name="Saturated fats"
          />
          <div class="stats-number" style="border-color: #ff6e7d">
            {{ Math.round(monthData.fats_saturated) }}
          </div>
          <!--<div class="stats-i-icon">-->
          <!--<i class="f7-icons">info</i>-->
          <!--</div>-->
        </div>
      </div>
      <div class="stats-section">
        <div class="stats-section-title">Food additives</div>
        <div class="stats-row" v-for="e in monthData.top">
          <div>
            <span class="stats-label" :style="`background-color: ${e.color}`">{{
              e.e
            }}</span>
            <span style="margin-left: 10px">{{ e.name }}</span>
          </div>
          <div class="stats-number" :style="`border-color: ${e.color}`">
            {{ e.count }}
          </div>
        </div>
      </div>
    </div>
  </f7-page>
</template>

<script>
import CircleDiagram from "../components/circleDiagram";
import ProgressBar from "../components/progressBar";

export default {
  name: "profile",
  components: { ProgressBar, CircleDiagram },
  methods: {
    sugarClick() {
      this.$f7router.navigate("/purchases/sugar");
    }
  },
  mounted() {
    this.$store.dispatch("getStatistics").then(() => {
      this.loaded = true;
    });
  },
  data() {
    return {
      loaded: false,
      monthNames: ["August", "September", "October"],
      currentMonth: "October"
    };
  },
  computed: {
    monthData: function() {
      const result = this.$store.state.statistics.find(
        data => data.month === this.currentMonth
      );
      result.top = result.top.map(item => ({
        ...item,
        color: item.danger_level > 3 ? "#ff6e7d" : "#ffc935"
      }));
      return result;
    },
    months: function() {
      return this.monthNames.map(name =>
        this.$store.state.statistics.find(
          data => data.month === name
        )
      );
    }
  }
};
</script>

<style scoped lang="scss">
@import "../css/main";

.stats {
  max-width: 500px;
  margin: 0 auto 40px;
  &-section {
    padding: 15px;
    border-bottom: 1px solid #ddd;
    &-title {
      color: $main-color;
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
  &-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
  &-section-chart {
    width: 80%;
    box-sizing: border-box;
    margin: auto;
  }
  &-i-icon {
    color: lighten($main-color, 20);
    font-size: 18px;
    margin-left: 10px;
    cursor: pointer;
    &:hover {
      color: $main-color;
    }
  }
  &-number {
    border-radius: 15px;
    border-width: 3px;
    margin-left: 10px;
    font-weight: bold;
    height: 30px;
    line-height: 24px;
    box-sizing: border-box;
    border-style: solid;
    padding: 0 9px;
    min-width: 42px;
    text-align: center;
  }
  &-label {
    background: $red-color;
    border-radius: 3px;
    height: 30px;
    padding: 0 10px;
    line-height: 30px;
    color: #fff;
    font-weight: bold;
    display: inline-block;
    min-width: 57px;
    box-sizing: border-box;
  }
}
</style>
