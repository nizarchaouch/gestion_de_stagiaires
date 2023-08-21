<template>
  <FormNav />
  <br />
  <Btn />
  <UplImage />
</template>
<script>
import FormNav from "@/components/formulaire/FormNav.vue";
import Btn from "@/components/formulaire/FormDemande.vue";
import UplImage from "@/components/formulaire/ImageTitre.vue";
export default {
  components: { FormNav, Btn, UplImage },
  setup() {},
};
</script>
