<script>
import axios from "axios";
import MM from "./MM.vue";
export default {
  props: {
    obj: String,
  },
  components: { MM },
  methods: {
    async accept(IdCard) {
      try {
        await axios.put(`http://localhost:8081/demande/accept/${IdCard}`);
        setTimeout(() => {
          window.location.reload();
        }, 700);
      } catch (error) {
        console.log("Internal Server Error:", error);
      }
    },

    async refuse(IdCard) {
      try {
        await axios.delete(`http://localhost:8081/demande/refuse/${IdCard}`);
        setTimeout(() => {
          window.location.reload();
        }, 700);
      } catch (error) {
        console.log("Internal Server Error:", error);
      }
    },
  },
};
</script>
<template>
  <div>
    <div
      class="modal fade"
      id="modaldemande"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="modaldemande"
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
              style="margin-right: 2px"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-2">
                <img src="https://shorter.me/pW1kn" alt="image" />
              </div>
              <div class="col-md-2">
                <p class="profil">Profil</p>
                <h2></h2>
              </div>
            </div>
            <div class="row">
              <div class="container col-lg-4">
                <div class="row">
                  <p>{{ obj.nom }}</p>
                  <hr />
                </div>
                <MM h="E-mail" :s="obj.mail" />
                <MM h="Téléphone" :s="obj.tel" />
                <MM h="Date de naissance" :s="obj.datenaissance" />
                <MM h="Address" :s="obj.adrress" />
                <MM h="Sexe" :s="obj.sexe" />
              </div>
              <div class="container col-lg-4">
                <div class="row">
                  <p>Informations universitaires</p>
                  <hr />
                </div>
                <MM h="Nom de l'établissement d'enseignement" :s="obj.ecole" />
                <MM
                  h="Intitulé de la formation / spécialité"
                  :s="obj.specialite"
                />
                <MM h="Niveau d'études / année en cours" :s="obj.niveau" />
                <MM h="Durée du stage prévue" :s="obj.dureestage" />
              </div>
              <div class="container col-lg-4">
                <div class="row">
                  <p>Compétences informatiques</p>
                  <hr />
                </div>
                <MM h="Langages de programmation maîtrisés" s="NY" />
                <MM h="Outils de développement utilisés" s="NY" />
                <MM
                  h="Expérience avec les bases de données (précisez)"
                  s="NY"
                />
                <MM h="Autres compétences informatiques pertinentes" s="NY" />
              </div>
            </div>
            <div class="row">
              <div class="container col-lg-4">
                <div class="row"></div>
              </div>
              <div class="container col-lg-4">
                <div class="row">
                  <MM h="Intérêts et motivations" s="letter" />
                </div>
              </div>
              <div class="container col-lg-4">
                <div class="row">
                  <textarea
                    type="text"
                    placeholder="  Ajouter un commentaire..."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer" style="margin-right: 70px">
            <button
              type="button"
              class="btn btn-success rounded-pill close"
              data-bs-dismiss="modal"
              aria-label="Close"
              style="margin-right: 60px"
              @click="accept(obj._id)"
            >
              Accepter
            </button>
            <button
              type="button"
              class="btn btn-danger rounded-pill close[]"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="refuse(obj._id)"
            >
              Refuser
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
hr {
  width: 90%;
}
.modal-content {
  border-radius: 40px;
}
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
  text-align: left;
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
  font-weight: 400;
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
textarea {
  width: 308px;
  height: 54px;
  background-color: rgba(217, 217, 217, 0.29);
  border-radius: 15px;
  border: none;
  color: gray;
}
</style>
