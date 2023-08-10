<script>
import Card from "@/components/carddash/CardDash";
import Table from "@/components/tabledash/TableDash.vue";
export default {
  name: "HomeView",

  components: { Card, Table },
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
  <Table />
</template>

<style lang="scss" scoped>
.contianer {
  margin-top: 10px;
  .row {
    justify-content: space-evenly;
  }
}
</style>
