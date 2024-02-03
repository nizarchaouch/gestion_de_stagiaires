/* eslint-disable */
import { defineStore } from "pinia";
import axios from "axios";

export const getEncadStore = defineStore("encad", {
  state: () => ({ encadruers: [] }),
  getters: {
    countEncad: (state) => state.encadruers.length,
  },
  actions: {
    async fetchEncadreurs() {
      try {
        const response = await axios.get(
          "http://localhost:8081/encadreur/showEncad"
        );
        this.encadruers = response.data;
      } catch (error) {
        console.error("Internal Server Error:", error);
      }
    },
  },
});
