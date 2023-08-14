<template>
  <modalA />
  <tableS></tableS>
  <pagination />
</template>

<script>
import modalA from "@/components/ModalAjoutStag.vue";
import tableS from "@/components/tablestag/TableStag.vue";
import pagination from "@/components/pagination/PaginationD.vue";
export default {
  components: { modalA, tableS, pagination },
  setup() {},
};
</script>
