/* eslint-disable */
import { defineStore } from "pinia";
import axios from "axios";

export const getOfferStore = defineStore("offer", {
  state: () => ({ offers: [] }),
  getters: {
    countOffer: (state) => state.offers.length,
  },
  actions: {
    async fetchOffer() {
      try {
        const response = await axios.get(
          "http://localhost:8081/offer/showOffer"
        );
        this.offers = response.data;
      } catch (error) {
        console.error("Internal Server Error:", error);
      }
    },
  },
});
