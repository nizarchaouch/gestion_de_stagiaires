<script>
import TableRow from "./TableRow.vue";
export default {
  components: { TableRow },
  setup() {
    return {};
  },
};
</script>

<template>
  <table class="container table">
    <thead>
      <tr>
        <th>Image</th>
        <th>Nom et Prenom</th>
        <th>Projet</th>
        <th>Durée du stage</th>
        <th>Encadrant</th>
        <th>status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <TableRow />
    </tbody>
  </table>
</template>
<style scoped>
table {
  margin-top: 60px;
}
</style>
