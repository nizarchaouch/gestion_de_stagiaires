<script>
/* eslint-disable */
import axios from "axios";
export default {
  data() {
    return {
      alert: {
        message: "",
        color: "",
        visible: false,
      },
      encadruers: [],
      stagiaires: [],
      selectedStagiaire: null,
      selectedEncadreurs: null,
    };
  },
  mounted() {
    this.fetchEncadreurs();
    this.fetchStagiaires();
  },
  props: {
    obj: String,
  },
  methods: {
    showAlert(message) {
      this.alert.message = message;
      this.alert.visible = true;

      setTimeout(() => {
        this.hideAlert();
      }, 1500);
    },
    hideAlert() {
      this.alert.visible = false;
    },
    handleFileChange(event) {
      const selectedFile = event.target.files[0];
      this.imageUrl = URL.createObjectURL(selectedFile);
    },

    async fetchEncadreurs() {
      try {
        const response = await axios.get(
          "http://localhost:8081/encadreur/showEncad"
        );
        this.encadruers = response.data;
      } catch (error) {
        console.error("Internal Server Error:", error);
      }
    },

    async fetchStagiaires() {
      try {
        const response = await axios.get(
          "http://localhost:8081/stagiaire/showStagi"
        );
        this.stagiaires = response.data;
      } catch (error) {
        console.error("Internal Server Error:", error);
      }
    },

    async submitForm() {
      console.log("Stagiaire ID:", this.selectedStagiaire);
      console.log("Encadreurs IDs:", this.selectedEncadreurs);
    },
  },
};
</script>

<template>
  <div
    class="modal fade"
    id="modalAssS"
    tabindex="-1"
    aria-labelledby="modalAssSLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable modal-lg">
      <div v-if="alert.visible" :class="'alert alert-' + alert.color">
        {{ alert.message }}
      </div>
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title title">Nomination Stagiaire</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="input-group mb-3">
                <div class="input-group-text">Stagiaires</div>
                <select
                  class="form-select"
                  id="prepend-text-single-field"
                  data-placeholder="Choose one thing"
                  v-model="selectedStagiaire"
                >
                  <option
                    v-for="stagiaire in stagiaires"
                    :key="stagiaire._id"
                    :value="stagiaire._id"
                  >
                    {{ stagiaire.nom }} {{ stagiaire.prenom }}
                  </option>
                </select>
              </div>

              <div class="input-group mb-3">
                <div class="input-group-text">Encadreurs</div>
                <select
                  class="form-select"
                  data-placeholder="Choose anything"
                  id="prepend-text-multiple-field"
                  multiple
                  v-model="selectedEncadreurs"
                >
                  <option
                    v-for="encadruer in encadruers"
                    :key="encadruer._id"
                    :value="encadruer._id"
                  >
                    {{ encadruer.nom }} {{ encadruer.prenom }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button @click="submitForm" class="btn btn-primary">Ajouter</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.btn {
  color: aliceblue;
  display: inline-flex;
  padding: 7px 15px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  background: #233eae;
  width: 134px;
  height: 36px;
  float: left;
  margin-left: 30px;

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);
}
.title::before {
  content: " ";
  background-color: #233eae;
  width: 6px;
  height: 30px;
  position: absolute;
  left: 5px;
  border-radius: 15px;
}
img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  background: #dfdfdf;
}
label {
  position: relative;
  float: left;
  margin-left: 10px;
  margin-bottom: 20px;
}
input {
  border-radius: 5px;
  border: rgba(128, 128, 128, 0.511) solid 1px;
  margin-bottom: 20px;
}
</style>
