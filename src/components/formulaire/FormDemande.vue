<script>
import ImageTitle from "./ImageTitre.vue";
export default {
  components: { ImageTitle },
  data() {
    return {
      sections: [],
    };
  },
  methods: {
    addSection() {
      this.sections.push({});
    },
  },
};
</script>
<template>
  <ImageTitle />
  <button
    @click="addSection"
    data-bs-toggle="tooltip"
    data-bs-placement="top"
    title="Ajouter section"
    class="button"
  >
    <i class="fa-solid fa-circle-plus fa-2xl" style="color: #1f5bc1"></i>
  </button>
  <div v-for="(section, index) in sections" :key="index" class="section">
    <div class="title col-lg-5">
      <div class="float-end me-3">
        <div class="form-floating select">
          <select
            class="form-select"
            id="floatingSelectGrid"
            aria-label="Floating label select example"
          >
            <option value="1" selected>Reponse courte</option>
            <option value="2">paragraphe</option>
            <option value="3">Date</option>
            <option value="4">Image</option>
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
