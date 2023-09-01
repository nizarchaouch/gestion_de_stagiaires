<script>
import Chart from "chart.js/auto";
export default {
  mounted() {
    const ctx = document.getElementById("myChart");
    const data = {
      labels: ["Homme", "Femme"],
      datasets: [
        {
          label: "Stagiaires",
          data: [60, 50],
          backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132) "],
          hoverOffset: 4,
        },
      ],
    };
    const myChart = new Chart(ctx, { type: "doughnut", data: data });
    myChart;
  },
};
</script>
<template>
  <div>
    <canvas id="myChart" width="10" height="10"></canvas>
  </div>
</template>
