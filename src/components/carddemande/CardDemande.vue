<script>
import { data } from "./stat";
import Modal from "@/components/Modal/ModalM.vue";
export default {
  components: { Modal },
  setup() {
    return { data };
  },
  data() {
    return {
      selectedOBJ: "nizar",
    };
  },
  methods: {
    setSelectedOBJ(obj) {
      console.log(this.selectedOBJ);
      this.selectedOBJ = obj;
      console.log("new", this.selectedOBJ);
    },
  },
};
</script>
<template>
  <Modal :obj="selectedOBJ" />
  <div class="card col-lg-2" v-for="(data, i) in data" :key="i">
    <div
      class="card-body"
      @click="setSelectedOBJ(data)"
      data-bs-toggle="modal"
      data-bs-target="#modaldemande"
    >
      <img class="card-title" :src="data.img" alt="image" />
      <h6 class="card-text">{{ data.nom }}</h6>
      <h6 class="card-subtitle m-2 text-muted">Epi Sousse</h6>
      <hr />
      <p class="card-subtitle text-muted">{{ data.gmail }}</p>
      <h6 class="card-subtitle m-1 text-muted">{{ data.tel }}</h6>
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
