<script setup>
/* eslint-disable */
import { onMounted } from "vue";
import { getEncadStore } from "@/stores/encadreur";
import { getStagiStore } from "@/stores/stagiaire";
import { getOfferStore } from "@/stores/offer";


const storeEncad = getEncadStore();
const storeStag = getStagiStore();
const storeOffer = getOfferStore();


onMounted(async () => {
  await storeEncad.fetchEncadreurs();
  await storeOffer.fetchOffer();
  await storeStag.fetchStagiaires();

});
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="card col-md-7 col-12 col-sm-12 ms-1">
        <h4>Graphique à barres</h4>
        <canvas id="myChart2"></canvas>
      </div>
      <div class="card col-md-4 col-12 col-sm-12 ms-1">
        <div class="row">
          <h4>Sexe des stagiaires</h4>
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
h4 {
  color: #797d8c;
  font-family: Nunito;
  font-weight: 600;
}
</style>
