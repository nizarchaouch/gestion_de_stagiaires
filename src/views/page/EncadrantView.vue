<template>
  <div class="float-start ms-5"><h4>Liste Encadreur</h4></div>
  <div class="float-end me-5"><ModalA /></div>
  <div class="float-end me-5"><ModalAss /></div>
  <TableE />
</template>

<script>
import ModalA from "@/components/encadrant/MdalAjoutEncad.vue";
import ModalAss from "@/components/encadrant/assigner/ModalAssig.vue";
import TableE from "@/components/encadrant/tableencad/TableEncad.vue";
export default {
  components: { ModalA, TableE, ModalAss },
  setup() {},
};
</script>
