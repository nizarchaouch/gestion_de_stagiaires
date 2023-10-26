<script>
import axios from "axios";
export default {
  data() {
    return { offers: [] };
  },
  props: {
    titre: String,
    description: String,
  },
  methods: {
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
};
</script>

<template>
  <div class="card col-lg-3">
    <div class="card-header">Offer</div>
    <div class="card-body">
      <h5 class="card-title">{{ titre }}</h5>
      <p class="card-text">{{ description }}</p>
      <button type="button" class="btn btn-outline-danger me-2">
        Supprime
      </button>
      <button type="button" class="btn btn-outline-secondary">Modifier</button>
    </div>
  </div>
</template>
<style scoped>
.card {
  margin: 40px;
  position: relative;
  float: left;
}
</style>
