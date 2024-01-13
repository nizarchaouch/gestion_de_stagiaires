<template>
  <div class="float-start ms-5"><h4>Liste Encadreur</h4></div>
  <div class="float-end me-5"><ModalA /></div>
  <div class="float-end me-5"><ModalA /></div>
  <div style="pointer-events: none"><ModalM /></div>
  <TableE />
</template>

<script>
import ModalA from "@/components/encadrant/MdalAjoutEncad.vue";
import ModalM from "@/components/encadrant/MdalModifEncad.vue";
import TableE from "@/components/encadrant/tableencad/TableEncad.vue";
export default {
  components: { ModalA, TableE, ModalM },
  setup() {},
};
</script>
