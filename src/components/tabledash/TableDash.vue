<script>
import TableRow from "./TableRow.vue";
export default {
  components: { TableRow },
  setup() {
    return { name: "nizar" };
  },
};
</script>

<template>
  <table class="table container">
    <thead>
      <tr>
        <th>Image</th>
        <th>Nom & Prenom</th>
        <th>RÔLE</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <TableRow />
    </tbody>
  </table>
</template>
<style scoped>
.table {
  margin-top: 60px;
}
img {
  width: 37.6px;
  height: 37.6px;
  border-radius: 60px;
  background-color: black;
}
a {
  margin-right: 15px;
}
</style>
