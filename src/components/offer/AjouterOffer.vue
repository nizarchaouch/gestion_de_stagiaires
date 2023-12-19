<script>
import CardOffer from "./CardOffer.vue";
import axios from "axios";
export default {
  data() {
    return {
      alert: {
        message: "",
        color: "",
        visible: false,
      },
      offers: [],
      titre: "",
      description: "",
    };
  },
  mounted() {
    this.fetchOffer();
  },
  components: { CardOffer },
  methods: {
    showAlert(message) {
      this.alert.message = message;
      this.alert.visible = true;

      setTimeout(() => {
        this.hideAlert();
      }, 1700);
    },
    hideAlert() {
      this.alert.visible = false;
    },
    async AjouterOffer() {
      const offerData = {
        titre: this.titre,
        description: this.description,
      };
      try {
        await axios.post("http://localhost:8081/offer/addOffer", offerData);
        this.showAlert("Offer ajouté avec succès !");
        this.alert.color = "success";
        setTimeout(() => {
          window.location.reload();
        }, 1700);
      } catch (error) {
        console.log("Internal Server Error:", error);
        this.showAlert("Erreur lors de l'ajout Offer :");
        this.alert.color = "danger";
      }
    },

    async fetchOffer() {
      try {
        const response = await axios.get(
          "http://localhost:8081/offer/showOffer"
        );
        this.offers = response.data;
      } catch (error) {
        console.error("Internal Server Error:", error);
      }
      console.log("test:" + this.offers);
    },
  },
};
</script>
<template>
  <div class="col-lg-5">
    <div class="titre">
      <div v-if="alert.visible" :class="'alert alert-' + alert.color">
        {{ alert.message }}
      </div>
      <input
        type="text"
        id="titre"
        class="fs-1 fw-bold"
        v-model="this.titre"
        placeholder="Titre"
      />
      <textarea
        type="text"
        placeholder="description"
        id="description"
        v-model="this.description"
      ></textarea>
      <button
        type="button"
        class="btn btn-outline-success float-end"
        @click="AjouterOffer()"
      >
        Sauvegarder
      </button>
      <p>&thinsp;</p>
    </div>
  </div>
  <hr style="border: solid 2px" />
  <div>
    <h5 class="ms-3 title position-absolute">Liste d'offer</h5>
  </div>
  <div class="con">
    <div class="container-fluid" v-for="offer in offers" :key="offer._id">
      <CardOffer
        :titre="offer.titre"
        :description="offer.description"
        :id="offer._id"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.con {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 33%);
}
.titre {
  height: auto;
  width: 800px;
  border-radius: 8px;
  margin-top: 20px;
  margin-left: 50%;
  padding-bottom: 10px;
  background-color: white;
  input,
  textarea {
    display: block;
    border: none;
    margin: 20px;
    width: 95%;
  }
  .btn {
    margin-right: 10px;
  }
}
.title::before {
  content: " ";
  background-color: #233eae;
  width: 6px;
  height: 30px;
  position: absolute;
  left: -8px;
  border-radius: 15px;
}
@media screen and (max-width: 1200px) {
  .con {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 50%);
  }
  .titre {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }
}
</style>
