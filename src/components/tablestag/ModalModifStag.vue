<script>
import axios from "axios";
export default {
  data() {
    return {
      localObj: this.obj,
      alert: {
        message: "",
        color: "",
        visible: false,
      },
      imageUrl: "https://2cm.es/tLVi",
    };
  },
  watch: {
    obj(newVal) {
      this.localObj = newVal; // Mettre à jour la donnée locale lorsque la prop change
    },
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
    handleInputChange() {
      this.$emit("update:obj", this.localObj); // Émettre un événement lorsque la donnée locale change
    },
    async updatedStagi(stagiId) {
      const stagiaireData = {
        nom: this.obj.nom,
        prenom: this.obj.prenom,
        mail: this.obj.mail,
        tel: this.obj.tel,
        datenaissance: this.obj.datenaissance,
        adrress: this.obj.adrress,
        sexe: this.obj.sexe,
        projet: this.obj.projet,
        ecole: this.obj.ecole,
        specialite: this.obj.specialite,
        niveau: this.obj.niveau,
        dureestage: this.obj.dureestage,
        dated: this.obj.dated,
        datef: this.obj.datef,
        typestage: this.obj.typestage,
        encadrant: this.obj.encadrant,
      };

      try {
        const response = await axios.put(
          `http://localhost:8081/stagiaire/updateStagi/${stagiId}`,
          stagiaireData
        );
        console.log("Stagiaire modifier avec succès !", response.data);
        this.showAlert("Stagiaire modifier avec succès !");
        this.alert.color = "success";
        setTimeout(() => {
          window.location.reload();
        }, 700);
      } catch (error) {
        console.error("Erreur lors de modifier stagiaire :", error);
        this.showAlert("Erreur lors de modifier stagiaire :");
        this.alert.color = "danger";
      }
    },
  },
};
</script>
<template>
  <div
    class="modal fade"
    id="modifierModalStag"
    tabindex="-1"
    aria-labelledby="modifierModalStagLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable modal-lg">
      <div v-if="alert.visible" :class="'alert alert-' + alert.color">
        {{ alert.message }}
      </div>
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title title">Modifier Stagiaire</h5>
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
                  :id="'nom_' + obj._id"
                  placeholder="Nom"
                  v-model="localObj.nom"
                  @input="handleInputChange"
                />
                <label :for="'nom_' + obj._id">Nom</label>
              </div>
              <div class="form-floating col-md-6 col-6">
                <input
                  type="text"
                  class="form-control"
                  :id="'prenom_' + obj._id"
                  placeholder="prenom"
                  v-model="localObj.prenom"
                  @input="handleInputChange"
                />
                <label :for="'prenom_' + obj._id">Prenom</label>
              </div>
            </div>
            <div class="row">
              <div class="form-floating col-md-6 col-6">
                <input
                  type="Date"
                  class="form-control"
                  :id="'datenaiss_' + obj._id"
                  placeholder="Date de naissance"
                  v-model="localObj.datenaissance"
                  @input="handleInputChange"
                />
                <label :for="'datenaiss_' + obj._id">Date de naissance</label>
              </div>
              <div class="form-floating col-md-6 col-6">
                <input
                  type="text"
                  class="form-control"
                  :id="'address_' + obj._id"
                  placeholder="Address"
                  v-model="localObj.adrress"
                  @input="handleInputChange"
                />
                <label :for="'address_' + obj._id">Address</label>
              </div>
            </div>
            <div class="row">
              <div class="form-floating col-md-6 col-6">
                <select
                  class="form-select"
                  aria-label="sexe"
                  v-model="localObj.sexe"
                  @input="handleInputChange"
                >
                  <option value="homme" selected>Homme</option>
                  <option value="femme">Femme</option>
                </select>
              </div>
              <div class="form-floating col-md-6 col-6">
                <input
                  type="tel"
                  class="form-control"
                  :id="'tel_' + obj._id"
                  placeholder="telephone"
                  v-model="localObj.tel"
                  @input="handleInputChange"
                />
                <label :for="'tel_' + obj._id">Telephone</label>
              </div>
            </div>
            <div class="row">
              <div class="form-floating col-md-6 col-6">
                <input
                  type="email"
                  class="form-control"
                  :id="'mail_' + obj._id"
                  placeholder="e-mail"
                  v-model="localObj.mail"
                  @input="handleInputChange"
                />
                <label :for="'mail_' + obj._id">E-mail</label>
              </div>
              <div class="form-floating col-md-6 col-6">
                <input
                  type="text"
                  class="form-control"
                  :id="'dureestage_' + obj._id"
                  placeholder="dureestage"
                  v-model="localObj.dureestage"
                  @input="handleInputChange"
                />
                <label :for="'dureestage_' + obj._id">Durée du stage</label>
              </div>
            </div>
            <div class="row">
              <div class="form-floating col-md-6 col-6">
                <input
                  type="date"
                  class="form-control"
                  :id="'dated_' + obj._id"
                  placeholder="date debuit"
                  v-model="localObj.dated"
                  @input="handleInputChange"
                />
                <label :for="'dated_' + obj._id">Date de debuit</label>
              </div>
              <div class="form-floating col-md-6 col-6">
                <input
                  type="date"
                  class="form-control"
                  :id="'datef_' + obj._id"
                  placeholder="date de fin"
                  v-model="localObj.datef"
                  @input="handleInputChange"
                />
                <label :for="'datef_' + obj._id">Date de fin</label>
              </div>
            </div>
            <div class="row">
              <div class="form-floating col-md-6 col-6">
                <input
                  type="text"
                  class="form-control"
                  :id="'etablissement_' + obj._id"
                  placeholder="etablissement"
                  v-model="localObj.ecole"
                  @input="handleInputChange"
                />
                <label :for="'etablissement_' + obj._id"
                  >l'établissement d'enseignement</label
                >
              </div>
              <div class="form-floating col-md-6 col-6">
                <input
                  type="text"
                  class="form-control"
                  :id="'niveau_' + obj._id"
                  placeholder="Niveau"
                  v-model="localObj.niveau"
                  @input="handleInputChange"
                />
                <label :for="'niveau_' + obj._id">Niveau</label>
              </div>
            </div>
            <div class="row">
              <div class="form-floating col-md-6 col-6">
                <input
                  type="text"
                  class="form-control"
                  :id="'specialite_' + obj._id"
                  placeholder="specialite"
                  v-model="localObj.specialite"
                  @input="handleInputChange"
                />
                <label :for="'specialite_' + obj._id">Spécialité</label>
              </div>
              <div class="form-floating col-md-6 col-6">
                <input
                  type="text"
                  class="form-control"
                  :id="'projet_' + obj._id"
                  placeholder="projet"
                  v-model="localObj.projet"
                  @input="handleInputChange"
                />
                <label :for="'projet_' + obj._id">Projet</label>
              </div>
            </div>
            <div class="row">
              <!-- <div class="form-floating col-md-6 col-6">
                <input
                  type="text"
                  class="form-control"
                  :id="'encadrant_' + obj._id"
                  placeholder="encadrant"
                  v-model="localObj.encadrant"
                  @input="handleInputChange"
                />
                <label :for="'encadrant_' + obj._id">Encadrant</label>
              </div> -->
              <div class="form-floating col-md-6 col-6">
                <input
                  type="text"
                  class="form-control"
                  :id="'typestage_' + obj._id"
                  placeholder="type de stage"
                  v-model="localObj.typestage"
                  @input="handleInputChange"
                />
                <label :for="'typestage_' + obj._id">Type de stage</label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            @click="updatedStagi(obj._id)"
          >
            Modifier
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
