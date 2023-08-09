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
        <th>Nom & Prenom</th>
        <th>Gmail</th>
        <th>Date de Debut</th>
        <th>Date de fin</th>
        <th>Encadrant</th>
        <th>Type de stage</th>
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
