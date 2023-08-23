<script>
export default {
  props: {
    choix: String,
  },
  data() {
    return {
      choixMultiples: [{ inputText: "" }],
    };
  },
  methods: {
    addChoixMultiple() {
      this.choixMultiples.push({ inputText: "" });
      console.log(this.choixMultiples);
    },
  },
};
</script>
<template>
  <div class="titre">
    <input
      type="text"
      id="titre"
      class="fs-5 fw-bold input inputc"
      placeholder="Question "
    />
    <div class="form-check inputc">
      <input
        class="form-check-input"
        :type="choix"
        name="flexRadioDefault"
        id="flexRadioDefault1"
      />
      <label class="form-check-label" for="flexRadioDefault1">
        <input
          type="text"
          name=""
          id=""
          placeholder="option 1"
          style="border: none"
        />
      </label>
    </div>
    <div v-for="(choixMultiple, index) in choixMultiples" :key="index">
      <div class="form-check inputc" @click="addChoixMultiple()">
        <input
          class="form-check-input"
          :type="choix"
          name="flexDefault1"
          id="flexDefault1"
        />
        <label class="form-check-label" for="flexDefault1">
          <input
            type="text"
            name=""
            id=""
            placeholder="Ajouter une option"
            style="border: none"
          />
        </label>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.titre {
  height: auto;
  width: 800px;
  border-radius: 8px;
  margin: 25px 0;
  background-color: white;
  padding-top: 20px;
  .inputc {
    display: block;
    border: none;
    margin: 20px;
    width: 30%;
  }
}
</style>
