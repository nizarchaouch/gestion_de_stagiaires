<script>
import Chart from "chart.js/auto";
export default {
  mounted() {
    const ctx = document.getElementById("myChart");
    const data = {
      labels: ["Hommes", "Femmes"],
      datasets: [
        {
          label: "Stagiaires",
          data: [60, 50],
          backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132) "],
          hoverOffset: 4,
        },
      ],
    };
    if (ctx.chart) {
      ctx.chart.destroy();
    }
    const myChart = new Chart(ctx, { type: "bar", data: data });
    myChart;
  },
};
</script>
<template>
  <div>
    <canvas id="myChart"></canvas>
  </div>
</template>
