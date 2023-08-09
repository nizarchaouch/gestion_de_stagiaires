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
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Ajouté Stagiaire</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="nom&prenom-name" class="col-form-label"
                >Nom Prenom :</label
              >
              <input type="text" class="form-control" id="nom&prenom-name" />
            </div>
            <div class="mb-3">
              <label for="gmail-name" class="col-form-label">Gmail :</label>
              <input type="email" class="form-control" id="gmail-name" />
            </div>
            <div class="mb-3">
              <label for="tel-name" class="col-form-label">Telephone :</label>
              <input type="number" class="form-control" id="tel-name" />
            </div>
            <div class="mb-3">
              <label for="dated-name" class="col-form-label"
                >Date de debuit :</label
              >
              <input type="date" class="form-control" id="dated-name" />
            </div>
            <div class="mb-3">
              <label for="datef-name" class="col-form-label"
                >Date de fin :</label
              >
              <input type="date" class="form-control" id="datef-name" />
            </div>
            <div class="mb-3">
              <label for="encadrant-name" class="col-form-label"
                >Encadrant :</label
              >
              <input type="text" class="form-control" id="encadrant-name" />
            </div>
            <div class="mb-3">
              <label for="typestage-name" class="col-form-label"
                >Type de stage :</label
              >
              <input type="text" class="form-control" id="typestage-name" />
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Message:</label>
              <textarea class="form-control" id="message-text"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Ferme
          </button>
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
</style>
