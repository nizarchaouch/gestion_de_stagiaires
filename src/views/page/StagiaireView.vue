<template>
  <h4 class="float-start ms-5">Liste Stagiaire</h4>
  <div class="float-end me-5">
    <modalA />
  </div>
  <tableS></tableS>
  <!-- <pagination /> -->
</template>

<script>
import modalA from "@/components/tablestag/ModalAjoutStag.vue";
import tableS from "@/components/tablestag/TableStag.vue";
// import pagination from "@/components/pagination/PaginationD.vue";
export default {
  components: { modalA, tableS },
  setup() {},
};
</script>
