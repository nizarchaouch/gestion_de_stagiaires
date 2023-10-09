<script>
import axios from "axios";
export default {
  data() {
    return {
      alert: {
        message: "",
        color: "",
        visible: false,
      },
      imageUrl: "https://2cm.es/tLVi",
      nom: "",
      prenom: "",
      mail: "",
      tel: "",
      specialite: "",
      Stagiaire: "",
    };
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

    async ajouterEncadreur() {
      const data = {
        nom: this.nom,
        prenom: this.prenom,
        mail: this.mail,
        tel: this.tel,
        specialite: this.specialite,
        Stagiaire: this.Stagiaire,
      };

      try {
        const response = await axios.post(
          "http://localhost:8081/encadreur/addEncad",
          data
        );
        console.log("Encadreur ajouté avec succès !", response.data);
        this.showAlert("Encadreur ajouté avec succès !");
        this.alert.color = "success";
      } catch (error) {
        console.error("Erreur lors de l'ajout de l'encadreur :", error);
        this.showAlert("Erreur lors de l'ajout de l'encadreur :");
        this.alert.color = "danger";
      }
    },
  },
};
</script>
<template>
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#modal"
    data-bs-whatever="@getbootstrap"
  >
    Ajouter
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="20"
      viewBox="0 0 24 23"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19 12.3158H13V18H11V12.3158H5V10.421H11V4.73682H13V10.421H19V12.3158Z"
        fill="white"
      />
    </svg>
  </button>

  <div
    class="modal fade"
    id="modal"
    tabindex="-1"
    aria-labelledby="modalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable modal-lg">
      <div v-if="alert.visible" :class="'alert alert-' + alert.color">
        {{ alert.message }}
      </div>
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title title">Ajouter Encadreur</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit.prevent="ajouterEncadreur()">
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row">
                <label for="file">
                  <img :src="imageUrl" alt="Image" />
                </label>
                <input
                  type="file"
                  id="file"
                  @change="handleFileChange"
                  style="display: none"
                />
              </div>
              <div class="row">
                <div class="form-floating col-md-6 col-6">
                  <input
                    type="text"
                    class="form-control"
                    id="nom"
                    placeholder="Nom"
                    v-model="this.nom"
                  />
                  <label for="nom">Nom</label>
                </div>
                <div class="form-floating col-md-6 col-6">
                  <input
                    type="text"
                    class="form-control"
                    id="prenom"
                    placeholder="Prenom"
                    v-model="this.prenom"
                  />
                  <label for="prenom">Prenom</label>
                </div>
              </div>
              <div class="row">
                <div class="form-floating col-md-6 col-6">
                  <input
                    type="mail"
                    class="form-control"
                    id="mail"
                    placeholder="E-mail"
                    v-model="this.mail"
                  />
                  <label for="mail">E-mail</label>
                </div>
                <div class="form-floating col-md-6 col-6">
                  <input
                    type="number"
                    class="form-control"
                    id="tel"
                    placeholder="Telephone"
                    v-model="this.tel"
                  />
                  <label for="tel">Telephone</label>
                </div>
              </div>
              <div class="row">
                <div class="form-floating col-md-6 col-6">
                  <input
                    type="text"
                    class="form-control"
                    id="specialite"
                    placeholder="spécialité"
                    v-model="this.specialite"
                  />
                  <label for="specialite">Spécialité</label>
                </div>
                <div class="form-floating col-md-6 col-6">
                  <input
                    type="text"
                    class="form-control"
                    id="stagiaire"
                    placeholder="stagiaire"
                    v-model="this.Stagiaire"
                  />
                  <label for="stagiaire">Stagiaire</label>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button @click="ajouterEncadreur()" class="btn btn-primary">
              Ajouter
            </button>
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
