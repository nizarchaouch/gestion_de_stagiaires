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
    async updatedEncadreurs(encadreurId) {
      const dataEncad = {
        nom: this.obj.nom,
        prenom: this.obj.prenom,
        mail: this.obj.mail,
        tel: this.obj.tel,
        specialite: this.obj.specialite,
        stagiaire: this.obj.stagiaire,
      };

      try {
        const response = await axios.put(
          `http://localhost:8081/encadreur/updateEncad/${encadreurId}`,
          dataEncad
        );
        console.log("Encadreur modifier avec succès !", response.data);
        this.showAlert("Encadreur modifier avec succès !");
        this.alert.color = "success";
        setTimeout(() => {
          window.location.reload();
        }, 700);
      } catch (error) {
        console.error("Erreur lors de modifier de l'encadreur :", error);
        this.showAlert("Erreur lors de modifier de l'encadreur :");
        this.alert.color = "danger";
      }
    },
  },
};
</script>
<template>
  <div
    class="modal fade"
    id="modifierModal"
    tabindex="-1"
    aria-labelledby="modifierModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable modal-lg">
      <div v-if="alert.visible" :class="'alert alert-' + alert.color">
        {{ alert.message }}
      </div>
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title title">Modifier Encadreur</h5>
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
                <label for="nom">Nom</label>
              </div>
              <div class="form-floating col-md-6 col-6">
                <input
                  type="text"
                  class="form-control"
                  :id="'prenom_' + obj._id"
                  placeholder="Prenom"
                  v-model="localObj.prenom"
                  @input="handleInputChange"
                />
                <label for="prenom">Prenom</label>
              </div>
            </div>
            <div class="row">
              <div class="form-floating col-md-6 col-6">
                <input
                  type="mail"
                  class="form-control"
                  :id="'mail_' + obj._id"
                  placeholder="E-mail"
                  v-model="localObj.mail"
                  @input="handleInputChange"
                />
                <label for="mail">E-mail</label>
              </div>
              <div class="form-floating col-md-6 col-6">
                <input
                  type="number"
                  class="form-control"
                  :id="'tel_' + obj._id"
                  placeholder="Telephone"
                  v-model="localObj.tel"
                  @input="handleInputChange"
                />
                <label for="tel">Telephone</label>
              </div>
            </div>
            <div class="row">
              <div class="form-floating col-md-6 col-6">
                <input
                  type="text"
                  class="form-control"
                  :id="'specialite_' + obj._id"
                  placeholder="spécialité"
                  v-model="localObj.specialite"
                  @input="handleInputChange"
                />
                <label for="specialite">Spécialité</label>
              </div>
              <div class="form-floating col-md-6 col-6">
                <input
                  type="text"
                  class="form-control"
                  :id="'stagiaire_' + obj._id"
                  placeholder="Stagiaire"
                  v-model="localObj.stagiaire"
                  @input="handleInputChange"
                />
                <label for="stagiaire">Stagiaire</label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            @click="updatedEncadreurs(obj._id)"
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
