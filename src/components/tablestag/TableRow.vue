<script>
import axios from "axios";
import ToggleOffcanvas from "../ToggleOffcanvas.vue";
export default {
  components: { ToggleOffcanvas },
  data() {
    return {
      selectedOBJ: "null",
      stagiaires: [],
      encadruer: this.fetchEncadreurs(),
      // hommes: 0,
      // femmes: 0,
    };
  },
  mounted() {
    this.fetchStagiaires();
    this.fetchEncadreurs();
  },

  methods: {
    setSelectedOBJ(obj) {
      console.log(this.selectedOBJ);
      this.selectedOBJ = obj;
      console.log("new", this.selectedOBJ);
    },

    async fetchStagiaires() {
      try {
        const response = await axios.get(
          "http://localhost:8081/stagiaire/showStagi"
        );
        this.stagiaires = response.data;
      } catch (error) {
        console.error("Internal Server Error:", error);
      }
    },

    async delStagiaire(stagiaireId) {
      try {
        await axios.delete(
          `http://localhost:8081/stagiaire/delStagi/${stagiaireId}`
        );
        this.fetchStagiaires();
      } catch (error) {
        console.error("Internal Server Error:", error);
        console.log(this.stagiaire._id);
      }
    },

    async changeStatut(stagiaireId) {
      try {
        await axios.put(
          `http://localhost:8081/stagiaire/statut/${stagiaireId}`
        );
      } catch (error) {
        console.error("Internal Server Error:", error);
      }
    },

    async fetchEncadreurs() {
      try {
        const response = await axios.get(
          "http://localhost:8081/encadreur/showEncad"
        );
        this.encadruers = response.data;
      } catch (error) {
        console.error("Internal Server Error:", error);
      }
    },
  },
};
</script>
<template>
  <ToggleOffcanvas :obj="selectedOBJ" />

  <tr v-for="stagiaire in stagiaires" :key="stagiaire._id">
    <th
      @click="setSelectedOBJ(stagiaire)"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
      :id="stagiaires._id"
    >
      <img src="https://shorter.me/pW1kn" alt="image" />
    </th>
    <!-- <td v-if="stagiaire.sexe === 'homme'" style="display: none">
      {{ (hommes = (hommes + 1) % 100) }}
      {{ console.log(hommes) }}
    </td>
    <td v-if="stagiaire.sexe === 'femme'" style="display: none">
      {{ (femmes = (femmes + 1) % 100) }}
      {{ console.log(femmes) }}
    </td> -->
    <td
      @click="setSelectedOBJ(stagiaire)"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
      :id="stagiaires._id"
    >
      {{ stagiaire.nom }} {{ stagiaire.prenom }}
    </td>
    <td
      @click="setSelectedOBJ(stagiaire)"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
      :id="stagiaire._id"
    >
      {{ stagiaire.projet }}
    </td>
    <td
      @click="setSelectedOBJ(stagiaire)"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
      :id="stagiaire._id"
    >
      {{ stagiaire.dureestage }}
    </td>
    <td>
      <select
        class="form-select"
        id="multiple-select-field"
        data-placeholder="Choose anything"
        multiple
      >
        <option v-for="encadruer in encadruers" :key="encadruer._id">
          {{
            encadruer.nom +
            " " +
            encadruer.prenom +
            " / " +
            encadruer.specialite
          }}
        </option>
      </select>
    </td>
    <td :id="'ActiveDesactive-' + stagiaire._id">
      <div class="form-check form-switch" style="margin-left: 35%">
        <input
          class="form-check-input"
          type="checkbox"
          v-model="stagiaire.statut"
          @click="changeStatut(stagiaire._id)"
        />
      </div>
    </td>
    <td :id="stagiaire._id">
      <div class="dropdown dropstart profil">
        <button
          class="btn dropdown"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fa-solid fa-ellipsis"></i>
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <a class="dropdown-item d-inline p-1 m-4"
            ><i class="fa-solid fa-sliders fa-lg"></i
          ></a>

          <a
            class="dropdown-item d-inline p-1 m-4"
            @click="delStagiaire(stagiaire._id)"
            ><i class="fa-solid fa-trash fa-lg" style="color: #de1b1b"></i
          ></a>
        </ul>
      </div>
    </td>
  </tr>
</template>
<style scoped>
img {
  width: 60px;
  height: 60px;
  border-radius: 60px;
}
a {
  margin-right: 15px;
  cursor: pointer;
}
.status {
  display: inline-flex;
  padding: 2px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  margin-top: 3px;
}
tr {
  cursor: default;
}
.form-check-input {
  --bs-form-check-bg: #f81111a1;
}
.form-check-input:checked {
  background-color: green;
  border-color: green;
}
</style>
