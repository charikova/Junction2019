<template>
    <f7-page style="background: white">
        <div class="stats">
            <div class="stats-section ">
                <div class="stats-section-chart">
                    <CircleDiagram />
                </div>
            </div>
            <div class="stats-section">
                <div class="stats-row">
                    <progress-bar percents="100" name="Sugar" value="100 g" />
                    <div class="stats-i-icon">
                        <i class="f7-icons">info</i>
                    </div>
                </div>
                <div class="stats-row">
                    <progress-bar percents="46" name="Saturated fats" value="100 g" />
                    <div class="stats-i-icon">
                        <i class="f7-icons">info</i>
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
    components: { ProgressBar, CircleDiagram }
  };
</script>

<style scoped lang="scss">
    @import "../css/main";

    .stats {
        max-width: 500px;
        margin: 0 auto;
        &-section {
            padding: 15px;
            border-bottom: 1px solid #ddd;
        }
        &-row{
            display: flex;
            flex-direction: row;
            margin-bottom: 10px;
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
    }
</style>
