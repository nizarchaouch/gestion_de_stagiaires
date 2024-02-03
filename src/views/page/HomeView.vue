<script>
import Card from "@/components/carddash/CardDash";
import ChartsD from "@/components/charts/ChartsD.vue";
export default {
  name: "HomeView",

  components: { Card, ChartsD },
};
</script>
<script setup>
/* eslint-disable */
import { onMounted } from "vue";
import { getDemandeStore } from "@/stores/demande";
import { getStagiStore } from "@/stores/stagiaire";
const storedemande = getDemandeStore();
const storeStag = getStagiStore();
onMounted(async () => {
  await storedemande.fetchDemande();
  console.log(storedemande.countDemand);
});
</script>
<template>
  <div class="contianer">
    <div class="container-fluid">
      <div class="row">
        <Card
          title="Demande stage"
          :number="storedemande.countDemand + storeStag.hf"
        />
        <Card title="DEMANDE EN ATTENTES" :number="storedemande.countDemand" />
        <Card title="Taux de présence" number="75%" />
        <Card title="taux de déroulement" number="45%" />
      </div>
    </div>
  </div>
  <div>
    <ChartsD />
  </div>
</template>

<style lang="scss" scoped>
.contianer {
  margin-top: 10px;
  .row {
    justify-content: space-evenly;
  }
}
</style>
-
