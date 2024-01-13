<script>
import axios from "axios";
export default {
  data() {
    return {
      imageUrl: "https://2cm.es/tLVi",
    };
  },
  props: {
    obj: String,
  },
  methods: {
    handleFileChange(event) {
      const selectedFile = event.target.files[0];
      this.imageUrl = URL.createObjectURL(selectedFile);
    },
    async delEncadreurs(encadreurId) {
      try {
        await axios.delete(
          `http://localhost:8081/stagiaire/delStagi/${encadreurId}`
        );
        this.fetchEncadreurs();
      } catch (error) {
        console.error("Internal Server Error:", error);
        console.log(this.encadreur._id);
      }
    },
  },
};
</script>
<template>
  <button
    type="button"
    class="but ms-4"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    data-bs-whatever="@getbootstrap"
  ></button>

  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable modal-lg">
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
                  id="nom"
                  placeholder="Nom"
                  value="obj"
                />
                <label for="nom">Nom</label>
              </div>
              <div class="form-floating col-md-6 col-6">
                <input
                  type="text"
                  class="form-control"
                  id="prenom"
                  placeholder="Prenom"
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
                />
                <label for="mail">E-mail</label>
              </div>
              <div class="form-floating col-md-6 col-6">
                <input
                  type="number"
                  class="form-control"
                  id="tel"
                  placeholder="Telephone"
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
                />
                <label for="specialite">Spécialité</label>
              </div>
              <div class="form-floating col-md-6 col-6">
                <input
                  type="text"
                  class="form-control"
                  id="stagiaire"
                  placeholder="Telephone"
                />
                <label for="stagiaire">Stagiaire</label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Modifier</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.but {
  border: none;
  background-color: transparent;
}
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
