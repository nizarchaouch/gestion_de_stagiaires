/* eslint-disable */
import { defineStore } from "pinia";
import axios from "axios";

export const getDemandeStore = defineStore("demande", {
  state: () => ({ demandes: [] }),
  getters: {
    countDemand: (state) => state.demandes.length,
  },
  actions: {
    async fetchDemande() {
      try {
        const response = await axios.get(
          "http://localhost:8081/demande/showDemande"
        );
        this.demandes = response.data;
      } catch (error) {
        console.log("Internal Server Error:", error);
      }
    },
  },
});
