<script>
import Chart from "chart.js/auto";
export default {
  mounted() {
    const ctx1 = document.getElementById("myChart1");
    const ctx2 = document.getElementById("myChart2");

    const data1 = {
      labels: ["Hommes", "Femmes"],
      datasets: [
        {
          label: "Stagiaires",
          data: [60, 50],
          backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)"],
          hoverOffset: 2,
        },
      ],
    };

    const data2 = {
      labels: ["A", "B", "c", "d"],
      datasets: [
        {
          label: "Données 2",
          data: [30, 40, 30, 30],
          backgroundColor: [
            "rgb(255, 206, 86)",
            "rgb(75, 192, 192)",
            "rgb(75, 300, 192)",
            "rgb(75, 250, 250)",
          ],
          hoverOffset: 4,
        },
      ],
    };

    // Vérifiez si un graphique existe déjà et détruisez-le
    if (ctx1.chart) {
      ctx1.chart.destroy();
    }

    if (ctx2.chart) {
      ctx2.chart.destroy();
    }

    const myChart1 = new Chart(ctx1, { type: "doughnut", data: data1 });
    const myChart2 = new Chart(ctx2, { type: "bar", data: data2 });

    // Stockez les instances de graphique sur les éléments canvas
    ctx1.chart = myChart1;
    ctx2.chart = myChart2;
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="card col-md-7 col-12 col-sm-12 ms-1">
        <canvas id="myChart2"></canvas>
      </div>
      <div class="card col-md-4 col-12 col-sm-12 ms-1">
        <div class="row">
          <canvas id="myChart1"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.row {
  display: flex;
  justify-content: center;
}
</style>
