<script>
import axios from "axios";
import ToggleOffcanvas from "../ToggleOffcanvas.vue";
export default {
  components: { ToggleOffcanvas },
  data() {
    return {
      selectedOBJ: "null",
      stagiaires: [],
    };
  },
  mounted() {
    this.fetchStagiaires();
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
      <img :src="stagiaires.img" alt="image" />
    </th>
    <td
      @click="setSelectedOBJ(stagiaires)"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
      :id="stagiaires._id"
    >
      {{ stagiaire.nom }} {{ stagiaires.prenom }}
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
    <td
      @click="setSelectedOBJ(stagiaire)"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
      :id="stagiaire._id"
    >
      {{ stagiaire.encadrant }}
    </td>
    <td :id="'ActiveDesactive-' + stagiaire._id">
      <div class="form-check form-switch" style="margin-left: 35%">
        <input
          class="form-check-input"
          type="checkbox"
          v-model="stagiaire.statut"
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
  width: 37.6px;
  height: 37.6px;
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
