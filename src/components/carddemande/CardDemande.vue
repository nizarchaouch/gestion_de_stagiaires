<script>
import { data } from "./stat";
import Modal from "@/components/Modal/ModalM.vue";
import axios from "axios";
export default {
  components: { Modal },
  setup() {
    return { data };
  },
  data() {
    return {
      selectedOBJ: "null",
      demandes: [],
    };
  },
  mounted() {
    this.fetchDemande();
  },
  methods: {
    setSelectedOBJ(obj) {
      console.log(this.selectedOBJ);
      this.selectedOBJ = obj;
      console.log("new", this.selectedOBJ);
    },

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
};
</script>
<template>
  <Modal :obj="selectedOBJ" />
  <div class="card col-lg-2" v-for="demande in demandes" :key="demande._id">
    <div
      class="card-body"
      @click="setSelectedOBJ(demande)"
      data-bs-toggle="modal"
      data-bs-target="#modaldemande"
    >
      <img class="card-title" :src="demande.img" alt="image" />
      <h6 class="card-text">{{ demande.nom }}</h6>
      <h6 class="card-subtitle m-2 text-muted">{{ demande.ecole }}</h6>
      <hr />
      <p class="card-subtitle text-muted">{{ demande.mail }}</p>
      <h6 class="card-subtitle m-1 text-muted">{{ demande.tel }}</h6>
    </div>
  </div>
</template>
<style scoped>
.card {
  margin: 30px;
  border-radius: 20px;
  border: 2px solid #5041bc;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: inline-block;
  width: 250px;
  cursor: pointer;
}
img {
  border-radius: 200px;
  width: 76px;
  height: 69px;
}
</style>
