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
        <Card />
        <Card />
        <Card />
        <Card />
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
