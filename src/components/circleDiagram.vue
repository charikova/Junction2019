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
  props: ["proteins", "carbohydrates", "fats"],
  mounted() {
    const chartdata = {
      datasets: [
        {
          data: [Math.round(this.proteins), Math.round(this.fats), Math.round(this.carbohydrates)],
          // data: [
          //   randomScalingFactor(),
          //   randomScalingFactor(),
          //   randomScalingFactor()
          // ],
          backgroundColor: [
            chartColors.green,
            chartColors.yellow,
            chartColors.red
          ],
          label: "Dataset 1"
        }
      ],
      labels: ["Proteins", "Fats", "Carbohydrates"]
    };
    this.renderChart(chartdata, this.chartoptions);
  },
  data() {
    return {
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
