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
      datenaissance: "",
      adrress: "",
      sexe: "",
      projet: "",
      ecole: "",
      specialite: "",
      niveau: "",
      dureestage: "",
      dated: "",
      datef: "",
      typestage: "",
      encadrant: "",
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

    async ajouterStagiaire() {
      const stagiaireData = {
        nom: this.nom,
        prenom: this.prenom,
        mail: this.mail,
        tel: this.tel,
        datenaissance: this.datenaissance,
        adrress: this.adrress,
        sexe: this.sexe,
        projet: this.projet,
        ecole: this.ecole,
        specialite: this.specialite,
        niveau: this.niveau,
        dureestage: this.dureestage,
        dated: this.dated,
        datef: this.datef,
        typestage: this.typestage,
        encadrant: this.encadrant,
      };

      try {
        const response = await axios.post(
          "http://localhost:8081/stagiaire/addStagi",
          stagiaireData
        );
        console.log("Stagiaire ajouté avec succès !", response.data);
        this.showAlert("Stagiaire ajouté avec succès !");
        this.alert.color = "success";
        window.location.reload();
      } catch (error) {
        console.error("Erreur lors de l'ajout du stagiaire :", error);
        this.showAlert("Erreur lors de l'ajout du stagiaire :");
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
    data-bs-target="#exampleModal"
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
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable modal-lg">
      <!-- Alerte pour success -->
      <div v-if="alert.visible" :class="'alert alert-' + alert.color">
        {{ alert.message }}
      </div>
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title title">Ajouter Stagiaire</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
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
                  placeholder="prenom"
                  v-model="this.prenom"
                />
                <label for="prenom">Prenom</label>
              </div>
            </div>
            <div class="row">
              <div class="form-floating col-md-6 col-6">
                <input
                  type="Date"
                  class="form-control"
                  id="datenaiss"
                  placeholder="Date de naissance"
                  v-model="this.datenaissance"
                />
                <label for="datenaiss">Date de naissance</label>
              </div>
              <div class="form-floating col-md-6 col-6">
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  placeholder="Address"
                  v-model="this.adrress"
                />
                <label for="address">Address</label>
              </div>
            </div>
            <div class="row">
              <div class="form-floating col-md-6 col-6">
                <input
                  type="text"
                  class="form-control"
                  id="sexe"
                  placeholder="sexe"
                  v-model="this.sexe"
                />
                <label for="sexe">Sexe</label>
              </div>
              <div class="form-floating col-md-6 col-6">
                <input
                  type="tel"
                  class="form-control"
                  id="tel"
                  placeholder="telephone"
                  pattern="[0-9]{2}[0-9]{3}[0-9]{3}"
                  v-model="this.tel"
                />
                <label for="tel">Telephone</label>
              </div>
            </div>
            <div class="row">
              <div class="form-floating col-md-6 col-6">
                <input
                  type="email"
                  class="form-control"
                  id="mail"
                  placeholder="e-mail"
                  v-model="this.mail"
                />
                <label for="mail">E-mail</label>
              </div>
              <div class="form-floating col-md-6 col-6">
                <input
                  type="text"
                  class="form-control"
                  id="dureestage"
                  placeholder="dureestage"
                  v-model="this.dureestage"
                />
                <label for="dureestage">Durée du stage</label>
              </div>
            </div>
            <div class="row">
              <div class="form-floating col-md-6 col-6">
                <input
                  type="date"
                  class="form-control"
                  id="dated"
                  placeholder="date debuit"
                  v-model="this.dated"
                />
                <label for="dated">Date de debuit</label>
              </div>
              <div class="form-floating col-md-6 col-6">
                <input
                  type="date"
                  class="form-control"
                  id="datef"
                  placeholder="date de fin"
                  v-model="this.datef"
                />
                <label for="datef">Date de fin</label>
              </div>
            </div>
            <div class="row">
              <div class="form-floating col-md-6 col-6">
                <input
                  type="text"
                  class="form-control"
                  id="etablissement"
                  placeholder="etablissement"
                  v-model="this.ecole"
                />
                <label for="etablissement"
                  >l'établissement d'enseignement</label
                >
              </div>
              <div class="form-floating col-md-6 col-6">
                <input
                  type="text"
                  class="form-control"
                  id="niveau"
                  placeholder="Niveau"
                  v-model="this.niveau"
                />
                <label for="niveau">Niveau</label>
              </div>
            </div>
            <div class="row">
              <div class="form-floating col-md-6 col-6">
                <input
                  type="text"
                  class="form-control"
                  id="specialite"
                  placeholder="specialite"
                  v-model="this.specialite"
                />
                <label for="specialite">Spécialité</label>
              </div>
              <div class="form-floating col-md-6 col-6">
                <input
                  type="text"
                  class="form-control"
                  id="projet"
                  placeholder="projet"
                  v-model="this.projet"
                />
                <label for="projet">Projet</label>
              </div>
            </div>
            <div class="row">
              <div class="form-floating col-md-6 col-6">
                <input
                  type="text"
                  class="form-control"
                  id="encadrant"
                  placeholder="encadrant"
                  v-model="this.encadrant"
                />
                <label for="encadrant">Encadrant</label>
              </div>
              <div class="form-floating col-md-6 col-6">
                <input
                  type="text"
                  class="form-control"
                  id="typestage"
                  placeholder="type de stage"
                  v-model="this.typestage"
                />
                <label for="typestage">Type de stage</label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" @click="ajouterStagiaire()">
            Ajouter
          </button>
        </div>
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
