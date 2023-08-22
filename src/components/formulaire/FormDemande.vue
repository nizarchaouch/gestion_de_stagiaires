<script>
import ImageTitle from "./ImageTitre.vue";
export default {
  components: { ImageTitle },
  data() {
    return {
      index: 0,
      selectedOption: "reponse",
      sections: [],
      paragraphes: [],
    };
  },
  watch: {
    selectedOption(newVal) {
      this.checkOption(newVal);
    },
  },
  methods: {
    addSection() {
      this.sections.push({});
    },
    addParagraphe() {
      this.paragraphes.push({});
      console.log(this.paragraphes.length + " nizar");
      this.saveIndex();
    },
    saveIndex() {
      this.index = this.paragraphes.length;
      console.log("index: " + this.index);
    },
    checkOption(selectedValue) {
      if (selectedValue === "reponse") {
        this.addSection();
      } else if (selectedValue === "paragraphe") {
        this.addParagraphe();
      } else if (selectedValue === "date") {
        console.log("Option 'Date' sélectionnée.");
      } else if (selectedValue === "importer") {
        console.log("Option 'Image' sélectionnée.");
      } else if (selectedValue === "multiples") {
        console.log("Option 'Autre option' sélectionnée.");
      } else if (selectedValue === "cocher") {
        console.log("Option 'Autre option' sélectionnée.");
      } else if (selectedValue === "deroulante") {
        console.log("Option 'Autre option' sélectionnée.");
      }
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
            id="floatingSelectGrid"
            aria-label="Floating label select example"
          >
            <option value="reponse">Reponse</option>
            <option value="paragraphe">Paragraphe</option>
            <option value="date">Date</option>
            <option value="importer">Importer ficher</option>
            <option value="multiples">Choix multiples</option>
            <option value="cocher">Cases a cocher</option>
            <option value="deroulante">Liste déroulante</option>
          </select>
          <label for="floatingSelectGrid">choix multiple</label>
        </div>
      </div>
      <div v-if="OptionHTMLAttributes.value === 'paragraphe'">hello</div>
      <input
        type="text"
        id="title"
        class="fs-5 fw-bold input"
        value="Question "
      />
      <input
        type="text"
        id="title"
        class="text-lead input"
        placeholder="Voter reponse "
      />
      <div class="float-end me-5">
        <button
          type="button"
          class="btn"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="dupliquer"
          @click="console.log(index)"
        >
          <i class="fa-regular fa-clone"></i>
        </button>
        <button
          type="button"
          class="btn"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="supprimer"
        >
          <i class="fa-solid fa-trash"></i>
        </button>
        <i class="fa-solid fa-minus fa-rotate-90 fa-2xl"></i>
        <div class="form-check form-switch float-end mt-2">
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
    </div>
  </div>
  <div v-for="(paragraphe, index) in paragraphes" :key="index">
    <div class="title col-lg-5">
      <div class="float-end me-3">
        <div class="form-floating select">
          <select
            class="form-select"
            id="floatingSelectGrid"
            aria-label="Floating label select example"
            v-model="selectedOption"
          >
            <option value="reponse">Reponse</option>
            <option value="paragraphe" selected>Paragraphe</option>
            <option value="date">Date</option>
            <option value="importer">Importer ficher</option>
            <option value="multiples">Choix multiples</option>
            <option value="cocher">Cases a cocher</option>
            <option value="deroulante">Liste déroulante</option>
          </select>
          <label for="floatingSelectGrid">choix multiple</label>
        </div>
      </div>
      <input
        type="text"
        id="title"
        class="fs-5 fw-bold input"
        value="Question "
      />
      <textarea
        name="voter reponse"
        id="reponse"
        cols="1"
        rows="2"
        placeholder="Voter reponse"
      ></textarea>
      <div class="float-end me-5">
        <button
          type="button"
          class="btn"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="dupliquer"
          @click="console.log(index)"
        >
          <i class="fa-regular fa-clone"></i>
        </button>
        <button
          type="button"
          class="btn"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="supprimer"
        >
          <i class="fa-solid fa-trash"></i>
        </button>
        <i class="fa-solid fa-minus fa-rotate-90 fa-2xl"></i>
        <div class="form-check form-switch float-end mt-2">
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
  height: 200px;
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
