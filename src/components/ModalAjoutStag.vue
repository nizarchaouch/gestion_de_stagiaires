<script>
export default {
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
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title title">Ajouté Stagiaire</h5>
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
                  id="floatingInput"
                  placeholder="Nom"
                />
                <label for="floatingInput">Nom</label>
              </div>
              <div class="form-floating col-md-6 col-6">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Prenom"
                />
                <label for="floatingInput">Prenom</label>
              </div>
            </div>
            <div class="row">
              <div class="form-floating col-md-6 col-6">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Gmail"
                />
                <label for="floatingInput">Gmail</label>
              </div>
              <div class="form-floating col-md-6 col-6">
                <input
                  type="numero"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Telephone"
                />
                <label for="floatingInput">Telephone</label>
              </div>
            </div>
            <div class="row">
              <div class="form-floating col-md-6 col-6">
                <input
                  type="date"
                  class="form-control"
                  id="floatingInput"
                  placeholder="date debuit"
                />
                <label for="floatingInput">Date de debuit</label>
              </div>
              <div class="form-floating col-md-6 col-6">
                <input
                  type="date"
                  class="form-control"
                  id="floatingInput"
                  placeholder="date de fin"
                />
                <label for="floatingInput">Date de fin</label>
              </div>
            </div>
            <div class="row">
              <div class="form-floating col-md-6 col-6">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="encadrant"
                />
                <label for="floatingInput">Encadrant</label>
              </div>
              <div class="form-floating col-md-6 col-6">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="type de stage"
                />
                <label for="floatingInput">Type de stage</label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Ajouter</button>
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
