<script>
import Card from "@/components/carddemande/CardDemande.vue";
import Pagination from "@/components/pagination/PaginationC.vue";
import Modal from "@/components/ModalDemand.vue";
export default {
  components: {
    Card,
    Pagination,
    Modal,
  },
};
</script>
<template>
  <Modal></Modal>
  <Card />
  <Pagination />
</template>
