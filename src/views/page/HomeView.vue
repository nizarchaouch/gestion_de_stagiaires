<script>
import Card from "@/components/carddash/CardDash";
import ChartsD from "@/components/charts/ChartsD.vue";
import ChartsP from "@/components/charts/ChartsD.vue";
export default {
  name: "HomeView",

  components: { Card, ChartsD, ChartsP },
};
</script>

<template>
  <div class="contianer">
    <div class="container-fluid">
      <div class="row">
        <Card title="Demande stage" number="25" />
        <Card title="Stagiares en cours" number="15" />
        <Card title="STAGIAIRES REFUSES" number="5" />
        <Card title="DEMANDE EN ATTENTES" number="5" />
      </div>
    </div>
  </div>
  <div style="width: 400px" class="float-end">
    <ChartsD />
  </div>
  <div style="width: 400px" class="float-start">
    <ChartsP />
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
