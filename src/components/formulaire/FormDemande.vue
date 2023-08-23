<script>
import ImageTitle from "./ImageTitre.vue";
import ChoixMultiple from "./ChoixMultiple.vue";
export default {
  components: { ImageTitle, ChoixMultiple },
  data() {
    return {
      sections: [{ selectedValue: "reponse", inputText: "" }],
    };
  },
  methods: {
    addSection() {
      this.sections.push({ selectedValue: "reponse", inputText: "" });
    },
    handleSelectChange(index, event) {
      this.sections[index].selectedValue = event.target.value;
      console.log("Selected value:", this.sections[index].selectedValue);
    },
    handelSelectDelete(index) {
      this.sections.splice(index, 1);
    },
    handelSelectDuplicate(index) {
      const sectionToDuplicate = JSON.parse(
        JSON.stringify(this.sections[index])
      );
      this.sections.push(sectionToDuplicate);
      console.log("Duplicated section:", sectionToDuplicate);
    },
    handelSelectDuplicates(index) {
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
  <ImageTitle />
  <button
    @click="addSection()"
    data-bs-toggle="tooltip"
    data-bs-placement="top"
    title="Ajouter section"
    class="button"
  >
    <i class="fa-solid fa-circle-plus fa-2xl" style="color: #1f5bc1"></i>
  </button>
  <div v-for="(section, index) in sections" :key="index">
    <div class="title col-lg-5">
      <div class="float-end me-3">
        <div class="form-floating select">
          <select
            class="form-select"
            :id="'section-' + index"
            aria-label="Floating label select example"
            @change="handleSelectChange(index, $event)"
          >
            <option value="reponse">Reponse courte</option>
            <option value="paragraphe">Reponse longue</option>
            <option value="date">Date</option>
            <option value="importer">Importer ficher</option>
            <option value="multiples">Choix multiples</option>
            <option value="cocher">Cases a cocher</option>
            <option value="deroulante">Liste déroulante</option>
            <option value="titre">Titre</option>
          </select>
          <label :for="'section-' + index">choix multiple</label>
        </div>
      </div>
      <div v-if="section.selectedValue === 'titre'">
        <input
          type="text"
          :id="'titre-' + index"
          class="fs-1 fw-bold"
          placeholder="Formulaire "
          style="border: none"
          v-model="section.inputText"
        />
      </div>
      <div v-else-if="section.selectedValue === 'reponse'">
        <input
          type="text"
          :id="'question-' + index"
          class="fs-5 fw-bold input"
          placeholder="Question "
          v-model="section.inputText"
        />
        <input
          type="text"
          :id="'reponse-' + index"
          class="text-lead input"
          placeholder="Voter reponse "
        />
      </div>
      <div v-else-if="section.selectedValue === 'paragraphe'">
        <input
          type="text"
          :id="'question-' + index"
          class="fs-5 fw-bold input"
          placeholder="Question "
          v-model="section.inputText"
        />
        <textarea
          type="text"
          :id="'reponse-' + index"
          class="text-lead input"
          placeholder="Voter reponse "
          style="width: 50%; height: 44px"
        ></textarea>
      </div>
      <div v-else-if="section.selectedValue === 'date'">
        <input
          type="text"
          :id="'question-' + index"
          class="fs-5 fw-bold input"
          placeholder="Question "
        />
        <input
          type="date"
          :id="'reponse-' + index"
          class="text-lead input"
          placeholder="Voter reponse "
        />
      </div>
      <div v-else-if="section.selectedValue === 'importer'">
        <input
          type="text"
          :id="'question-' + index"
          class="fs-5 fw-bold input"
          placeholder="Question "
        />
        <input
          type="date"
          :id="'reponse-' + index"
          class="text-lead input"
          placeholder="Voter reponse "
        />
      </div>
      <div v-else-if="section.selectedValue === 'multiples'">
        <ChoixMultiple choix="radio" />
      </div>
      <div v-else-if="section.selectedValue === 'cocher'">
        <ChoixMultiple choix="checkbox" />
      </div>

      <div class="float-end me-5">
        <button
          type="button"
          class="btn"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="dupliquer"
          @click="handelSelectDuplicate(index)"
        >
          <i class="fa-regular fa-clone"></i>
        </button>
        <button
          type="button"
          class="btn"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="supprimer"
          @click="handelSelectDelete(index)"
        >
          <i class="fa-solid fa-trash"></i>
        </button>
        <i
          v-if="section.selectedValue != 'titre'"
          class="fa-solid fa-minus fa-rotate-90 fa-2xl"
        ></i>
        <div
          v-if="section.selectedValue != 'titre'"
          class="form-check form-switch float-end mt-2"
        >
          <input
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label class="form-check-label" for="flexSwitchCheckDefault"
            >Obligatoire</label
          >
        </div>
      </div>
      <p>&thinsp;</p>
      <p>&thinsp;</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.button {
  border: none;
  background-color: transparent;
  font-size: xx-large;
  position: fixed;
  right: 10px;
  bottom: 10px;
  z-index: 100;
}
.title {
  height: auto;
  width: 800px;
  border-radius: 8px;
  margin: 25px 0;
  margin-left: 22.6%;
  background-color: white;
  padding-top: 20px;
  .input,
  textarea {
    display: block;
    border: none;
    margin: 20px;
    width: 30%;
  }
  .select {
    width: 190px;
    height: 50px;
  }
}
</style>
