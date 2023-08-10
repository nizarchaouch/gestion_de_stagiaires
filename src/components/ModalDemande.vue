<template>
  <div>
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      nom
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-2">
                <img src="https://l8.nu/sk0V" alt="image" />
              </div>
              <div class="col-md-2">
                <p class="profil">Profil</p>
                <h2></h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-2">
                <p>Nizar Chaouch</p>
                <hr />
              </div>
              <div class="col-md-3" style="margin-left: 50px">
                <p>Informations universitaires</p>
                <hr style="width: 320px" />
              </div>
            </div>
            <div class="row">
              <div class="col-md-1">
                <h6>Gmail</h6>
                <span>chaouchnizar@gmail.com</span>
              </div>
              <div class="col-md-4" style="margin-left: 150px">
                <h6>Nom de l'établissement d'enseignement</h6>
                <span>EPI DIGITAL SCHOOL</span>
              </div>
            </div>
            <div class="row">
              <div class="col-md-1">
                <h6>Téléphone</h6>
                <span>52641659</span>
              </div>
              <div class="col-md-3" style="margin-left: 150px">
                <h6>Intitulé de la formation / spécialité</h6>
                <span>Génie Logiciel</span>
              </div>
            </div>
            <div class="row">
              <div class="col-md-2">
                <h6>Date de naissance</h6>
                <span>20/06/1999</span>
              </div>
              <div class="col-md-3" style="margin-left: 53px">
                <h6>Niveau d'études / année en cours</h6>
                <span>4eme année</span>
              </div>
            </div>
            <div class="row">
              <div class="col-md-2">
                <h6>Address</h6>
                <span>Tarek ben zied,Moknine</span>
              </div>
              <div class="col-md-2" style="margin-left: 53px">
                <h6>Durée du stage prévue</h6>
                <span>deux mois</span>
              </div>
            </div>
            <div class="row">
              <div class="col-md-1">
                <h6>Sexe</h6>
                <span>Homme</span>
              </div>
              <div class="col-md-2" style="margin-left: 146px">
                <hr style="width: 320px" />
                <h6>Intérêts et motivations</h6>
                <span>lettre</span>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
img {
  width: 120px;
  height: 128px;
  border-radius: 200px;
}
p {
  color: #0086ca;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
}
span {
  color: #1a4f6e;
  font-family: Poppins;
  font-size: 15px;
  font-weight: 800;
  float: left;
}
h6 {
  color: #292d32;
  font-family: Poppins;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  float: left;
}
.row {
  margin-bottom: 10px;
}
.profil {
  display: flex;
  padding: 50px 4px 16px 0px;
  margin-bottom: 0;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #5932ea;
  font-family: Inter;
  font-size: 25px;
  line-height: 20px;
  margin-left: 35px;
}
h2 {
  height: 2px;
  align-self: stretch;
  background: #5932ea;
  margin: 0 30px 0 60px;
}
</style>
