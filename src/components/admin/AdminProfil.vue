<script>
import { data } from "./stat";
export default {
  setup() {
    return { data };
  },
  data() {
    return {
      imageUrl: "https://2cm.es/tLVi",
    };
  },
  methods: {
    handleFileChange(event) {
      const selectedFile = event.target.files[0];
      this.imageUrl = URL.createObjectURL(selectedFile);
    },
  },
};
</script>
<template>
  <div class="col-lg-7 position-absolute top-50 start-50 translate-middle">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title title ms-3">Profil</h5>
      </div>
      <div class="modal-body">
        <div class="container">
          <div class="row me-1j">
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
                id="floatingInput"
                placeholder="Nom"
                :value="data.nom"
              />
              <label for="floatingInput">Nom</label>
            </div>
            <div class="form-floating col-md-6 col-6">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="Prenom"
                :value="data.prenom"
              />
              <label for="floatingInput">Prenom</label>
            </div>
          </div>
          <div class="row">
            <div class="form-floating col-md-6 col-6">
              <input
                type="mail"
                class="form-control"
                id="floatingInput"
                placeholder="E-mail"
                :value="data.mail"
                disabled
              />
              <label for="floatingInput">E-mail</label>
            </div>
            <div class="form-floating col-md-6 col-6">
              <input
                type="number"
                class="form-control"
                id="floatingInput"
                placeholder="Telephone"
                :value="data.tel"
              />
              <label for="floatingInput">Telephone</label>
            </div>
          </div>
          <div class="row">
            <div class="form-floating col-md-6 col-6">
              <input
                type="password"
                class="form-control"
                id="floatingInput"
                placeholder="Mot de passe"
              />
              <label for="floatingInput">Mot de passe</label>
            </div>
            <div class="form-floating col-md-6 col-6">
              <input
                type="password"
                class="form-control"
                id="floatingInput"
                placeholder="Confirme mot de passe"
              />
              <label for="floatingInput">Confirme mot de passe</label>
            </div>
          </div>
          <!-- <div class="row">
            <div class="form-floating col-md-6 col-6">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="Gmail"
              />
              <label for="floatingInput">Mot de passe</label>
            </div>
            <div class="form-floating col-md-6 col-6">
              <input
                type="numero"
                class="form-control"
                id="floatingInput"
                placeholder="Telephone"
              />
              <label for="floatingInput">Confirme mot de passe</label>
            </div>
          </div> -->
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary m-5">Modifier</button>
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
