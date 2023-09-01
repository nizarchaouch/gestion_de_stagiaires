<script>
import Card from "@/components/carddash/CardDash";
import ChartsD from "@/components/charts/ChartsD.vue";
export default {
  name: "HomeView",

  components: { Card, ChartsD },
};
</script>

<template>
  <div class="contianer">
    <div class="container-fluid">
      <div class="row">
        <Card title="Demande stage" number="25" />
        <Card title="Stagiares en cours" number="15" />
        <Card title="NOMBRE DE PROJETS" number="5" />
        <Card title="DEMANDE EN ATTENTES" number="5" />
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
