/* eslint-disable */
import { defineStore } from "pinia";
import axios from "axios";

export const getEncadStore = defineStore("encad", {
  state: () => ({ admins: [], nom: "", prenom: "", mail: "" }),
  getters: {
    countEncad: (state) => state.encadruers.length,
  },
  actions: {
    setSelectedOBJ(obj) {
      // console.log(this.selectedOBJ);
      this.selectedOBJ = obj;
      // console.log("new", this.selectedOBJ);
    },
    async fetchAdmin() {
      try {
        const response = await axios.get(
          "http://localhost:8081/admin/showAdmin"
        );
        this.admins = response.data;
      } catch (error) {
        console.error("Internal Server Error:", error);
      }
    },

    async ajouterEncadreur() {
      const dataAdmin = {
        nom: this.nom,
        prenom: this.prenom,
        mail: this.mail,
      };

      try {
        const response = await axios.post(
          "http://localhost:8081/admin/AddAdmin",
          dataAdmin
        );
        console.log("Admin ajouté avec succès !", response.data);
        this.showAlert("Admin ajouté avec succès !");
        this.alert.color = "success";
        setTimeout(() => {
          window.location.reload();
        }, 700);
      } catch (error) {
        console.error("Erreur lors de l'ajout de admin :", error);
        this.showAlert("Erreur lors de l'ajout de admin :");
        this.alert.color = "danger";
      }
    },
  },
});
