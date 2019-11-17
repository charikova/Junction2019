<template>
  <f7-page style="background: white">
    <div class="stats" v-if="loaded">
      <div class="stats-section ">
        <div class="stats-section-chart">
          <CircleDiagram
            :proteins="monthData.proteins"
            :carbohydrates="monthData.carbohydrates"
            :fats="monthData.fats"
          />
        </div>
      </div>
      <div class="stats-section">
        <div class="stats-row" @click="sugarClick">
          <div class="stats-label">Sugar</div>
          <div class="stats-number">
            {{ 12 }}
          </div>
        </div>
        <div class="stats-row">
          <progress-bar percents="46" name="Saturated fats" />
          <div class="stats-number" style="border-color: #ff6e7d">
            {{ 12 }}
          </div>
          <!--<div class="stats-i-icon">-->
          <!--<i class="f7-icons">info</i>-->
          <!--</div>-->
        </div>
      </div>
      <div class="stats-section">
        <div class="stats-section-title">Food additives</div>
        <div class="stats-row">
          <div>
            <span class="stats-label" style="background-color: #ff6e7d"
              >E102</span
            >
            <span style="margin-left: 10px">Tartrazine</span>
          </div>
          <div class="stats-number" style="border-color: #ff6e7d">
            {{ 12 }}
          </div>
        </div>
        <div class="stats-row">
          <div>
            <span class="stats-label" style="background-color: #ffc935"
              >E124</span
            >
            <span style="margin-left: 10px">Ponceau</span>
          </div>
          <div class="stats-number" style="border-color: #ffc935">
            {{ 12 }}
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
    this.$store.dispatch("getStatistics").finally(() => {
      this.loaded = true;
    });
  },
  data() {
    return {
      loaded: false
    };
  },
  computed: {
    monthData: function() {
      const result = this.$store.state.statistics.find(
        data => data.month === "10"
      );
      return result;
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
  }
}
</style>
