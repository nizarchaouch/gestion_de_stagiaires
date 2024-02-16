import { defineStore } from "pinia";
import axios from "axios";
import Chart from "chart.js/auto";
import { getEncadStore } from "@/stores/encadreur";
import { getOfferStore } from "@/stores/offer";

export const getStagiStore = defineStore("stagi", {
  state: () => ({ homme: 0, femme: 0, hf: 0, apiUrl: "http://localhost:8081" }),
  getters: {
    stagHomme: (state) => state.homme,
    stagFemme: (state) => state.femme,
  },
  actions: {
    async fetchStagiaires() {
      let stagiaires;
      try {
        const response = await axios.get(
          "http://localhost:8081/stagiaire/showStagi"
        );
        stagiaires = response.data;
        let hommeCount = 0;
        let femmeCount = 0;
        for (const stagiaire of stagiaires) {
          if (stagiaire.sexe === "homme") {
            hommeCount++;
          } else {
            femmeCount++;
          }
        }
        this.homme = hommeCount;
        this.femme = femmeCount;
        this.hf = femmeCount + hommeCount;

        this.createCharts();
      } catch (error) {
        console.error("Internal Server Error:", error);
      }
    },

    createCharts() {
      const ctx1 = document.getElementById("myChart1");
      const ctx2 = document.getElementById("myChart2");

      const data1 = {
        labels: ["Hommes", "Femmes"],
        datasets: [
          {
            label: "Stagiaires",
            data: [this.homme, this.femme],
            backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)"],
            hoverOffset: 2,
          },
        ],
      };

      const data2 = {
        labels: ["Stagiaire", "Encadreur", "Projet" /* , "Stage" */],
        datasets: [
          {
            label: "",
            data: [
              this.hf,
              getEncadStore().countEncad,
              getOfferStore().countOffer,
              // 6,
            ],
            backgroundColor: [
              "rgb(255, 206, 86)",
              "rgb(75, 192, 192)",
              "rgb(75, 300, 192)",
              // "rgb(75, 250, 250)",
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
  },
});
