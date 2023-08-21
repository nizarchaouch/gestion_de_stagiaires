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

    <div v-if="selectedRadio === 'radio1'">Contenu de la radio 1</div>
    <div v-else-if="selectedRadio === 'radio2'">Contenu de la radio 2</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedRadio: "radio1",
    };
  },
};
</script>
