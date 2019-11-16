<script>
import { Doughnut } from "vue-chartjs";

const randomScalingFactor = function() {
  return Math.round(Math.random() * 100);
};
const chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};

export default {
  extends: Doughnut,
  mounted() {
    this.renderChart(this.chartdata, this.chartoptions);
  },
  data() {
    return {
      chartdata: {
        datasets: [
          {
            data: [
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
            ],
            backgroundColor: [
              chartColors.red,
              chartColors.yellow,
              chartColors.green
            ],
            label: "Dataset 1"
          }
        ],
        labels: ["Proteins", "Fats", "Carbohydrates"]
      },
      chartoptions: {
        responsive: true,
        legend: {
          position: "bottom"
        },
        title: {
          display: true,
          text: "November"
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    };
  }
};
</script>

<style></style>
