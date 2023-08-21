<template>
  <div
    class="btn-group"
    role="group"
    aria-label="Basic radio toggle button group"
  >
    <input
      type="radio"
      class="btn-check"
      name="btnradio"
      id="btnradio1"
      autocomplete="off"
      v-model="selectedRadio"
      value="radio1"
    />
    <label class="btn btn-outline-primary" for="btnradio1"
      >Formulaire de demande
    </label>

    <input
      type="radio"
      class="btn-check"
      name="btnradio"
      id="btnradio2"
      autocomplete="off"
      v-model="selectedRadio"
      value="radio2"
    />
    <label class="btn btn-outline-primary" for="btnradio2"
      >Formulaire de stage
    </label>
  </div>
  <FormDemande v-if="selectedRadio === 'radio1'" />
</template>
<script>
import FormDemande from "./FormDemande.vue";
export default {
  components: { FormDemande },
  data() {
    return {
      selectedRadio: "radio1",
    };
  },
};
</script>
