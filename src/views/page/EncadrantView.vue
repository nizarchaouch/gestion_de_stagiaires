<template>
  <div class="float-start ms-5"><h4>Liste Encadrant</h4></div>
  <div class="float-end me-5"><ModalA /></div>
  <TableE />
</template>

<script>
import ModalA from "@/components/encadrant/MdalAjoutEncad.vue";
import TableE from "@/components/encadrant/tableencad/TableEncad.vue";
export default {
  components: { ModalA, TableE },
  setup() {},
};
</script>
