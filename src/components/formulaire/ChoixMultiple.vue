<script>
export default {
  props: {
    choix: String,
  },
  data() {
    return {
      choixMultiples: [{ selectedValue: "reponse", inputChoix: "" }],
    };
  },
  methods: {
    addChoixMultiple() {
      this.choixMultiples.push({ inputChoix: "" });
      console.log(this.choixMultiples);
    },
    handelSelectDelete(index) {
      this.choixMultiples.splice(index, 1);
    },
    handelSelectDuplicate(index) {
      const sectionToDuplicate = JSON.parse(
        JSON.stringify(this.choixMultiples[index])
      );
      this.choixMultiples.push(sectionToDuplicate);
      console.log("Duplicated choix:", sectionToDuplicate);
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
      <div v-if="choix != 'deroulante'">
        <i class="fa-solid fa-x btn" @click="handelSelectDelete(index)"></i>
        <div class="form-check inputc">
          <input
            class="form-check-input"
            :type="choix"
            name="flexDefault1"
            :id="'option-' + index"
          />
          <label class="form-check-label" :for="'option-' + index">
            <input
              type="text"
              name="flexDefault1"
              :id="'option-' + index"
              :placeholder="'Option ' + (index + 1)"
              value=""
              style="border: none"
            />
          </label>
        </div>
      </div>
      <div v-else>
        <i class="fa-solid fa-x btn" @click="handelSelectDelete(index)"></i>
        <div class="inputc">
          <label class="form-check-label">{{ index + 1 }}. </label>
          <input
            type="text"
            name="flexDefault2"
            :id="'option-' + index"
            :placeholder="'Option ' + (index + 1)"
            style="border: none"
          />
        </div>
      </div>
    </div>
    <div class="form-check inputc">
      <input
        class="form-check-input"
        :type="choix"
        name="flexDefault1"
        :id="'option-' + choixMultiples.length"
        disabled
      />
      <label class="form-check-label" :for="'option-' + choixMultiples.length">
        <input
          @click="addChoixMultiple()"
          type="text"
          name="flexDefault1"
          :id="'option-' + choixMultiples.length"
          placeholder="Double-cliquez pour ajouter une option"
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
