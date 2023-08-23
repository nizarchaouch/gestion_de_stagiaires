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
    handelSelectDelete(index) {
      this.choixMultiples.splice(index, 1);
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
    <div v-for="(choixMultiple, index) in choixMultiples" :key="index">
      <div>
        <i class="fa-solid fa-x btn" @click="handelSelectDelete(index)"></i>
        <div class="form-check inputc">
          <input
            class="form-check-input"
            :type="choix"
            :name="'flexDefault' + (index + 1)"
            :id="'option-' + index"
          />
          <label class="form-check-label" :for="'option-' + index">
            <input
              type="text"
              :name="'option-' + index"
              :id="'option-' + index"
              :placeholder="'Option ' + (index + 1)"
              value=""
              style="border: none"
            />
          </label>
        </div>
      </div>
    </div>
    <div class="form-check inputc" @click="addChoixMultiple()">
      <input
        class="form-check-input"
        :type="choix"
        :name="'flexDefault' + (choixMultiples.length + 1)"
        :id="'option-' + choixMultiples.length"
      />
      <label class="form-check-label" :for="'option-' + choixMultiples.length">
        <input
          type="text"
          :name="'option-' + choixMultiples.length"
          :id="'option-' + choixMultiples.length"
          placeholder="Double-cliquez pour ajouter une option"
          value=""
          style="border: none"
        />
      </label>
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
i {
  position: absolute;
}
</style>
