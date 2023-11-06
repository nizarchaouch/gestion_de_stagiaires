<script>
import axios from "axios";
export default {
  props: {
    titre: String,
    description: String,
    id: Object,
  },
  methods: {
    async deleteOffer(IdOffer) {
      try {
        await axios.delete(`http://localhost:8081/offer/delOffer/${IdOffer}`);
        window.location.reload();
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
      <button
        type="button"
        class="btn btn-outline-danger me-2"
        @click="deleteOffer(id)"
      >
        Supprime
      </button>
      <button type="button" class="btn btn-outline-secondary">Modifier</button>
    </div>
  </div>
</template>
<style scoped>
.card {
  margin: 40px;
  float: left;
}
</style>
