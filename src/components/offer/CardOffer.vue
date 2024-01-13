<script>
import axios from "axios";
export default {
  props: {
    titre: String,
    description: String,
    id: Object,
  },
  data() {
    return {
      updatedTitre: this.titre,
      updatedDescription: this.description,
    };
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

    async updatedOffer(IdOffer) {
      try {
        await axios.put(`http://localhost:8081/offer/updateOffer/${IdOffer}`, {
          titre: this.updatedTitre,
          description: this.updatedDescription,
        });
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
      <!-- <h5 class="card-title">{{ titre }}</h5> -->
      <h5 class="card-title">
        <!-- <input type="text" :value="titre" /> -->
        <textarea v-model="updatedTitre"></textarea>
      </h5>
      <p class="card-text">
        <textarea v-model="updatedDescription"></textarea>
      </p>
      <button
        type="button"
        class="btn btn-outline-danger me-2"
        @click="deleteOffer(id)"
      >
        Supprime
      </button>
      <button
        type="button"
        class="btn btn-outline-secondary"
        @click="updatedOffer(id)"
      >
        Modifier
      </button>
    </div>
  </div>
</template>
<style scoped>
.card {
  width: 80%;
  margin: 40px;
}
input,
textarea {
  border: none;
}
</style>
