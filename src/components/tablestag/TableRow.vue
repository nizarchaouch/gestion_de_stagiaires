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
  },
};
</script>
<template>
  <ToggleOffcanvas :obj="selectedOBJ" />
  {{ console.log(stagiaires) }}
  <tr v-for="stagiaire in stagiaires" :key="stagiaire.id">
    <th
      @click="setSelectedOBJ(stagiaire)"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
      :id="stagiaires.id"
    >
      <img :src="stagiaires.img" alt="image" />
    </th>
    <td
      @click="setSelectedOBJ(stagiaires)"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
      :id="stagiaires.id"
    >
      {{ stagiaire.nom }} {{ stagiaires.prenom }}
    </td>
    <td
      @click="setSelectedOBJ(stagiaire)"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
      :id="stagiaire.id"
    >
      {{ stagiaire.projet }}
    </td>
    <td
      @click="setSelectedOBJ(stagiaire)"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
      :id="stagiaire.id"
    >
      {{ stagiaire.dureestage }}
    </td>
    <td
      @click="setSelectedOBJ(stagiaire)"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
      :id="stagiaire.id"
    >
      {{ stagiaire.encadrant }}
    </td>
    <td :id="'ActiveDesactive-' + stagiaire.id">
      <div class="form-check form-switch" style="margin-left: 35%">
        <input
          class="form-check-input"
          type="checkbox"
          v-model="stagiaire.statut"
        />
      </div>
    </td>
    <td :id="stagiaire.id">
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
          <a class="dropdown-item d-inline p-1 m-4" href="#"
            ><i class="fa-solid fa-sliders fa-lg"></i
          ></a>

          <a class="dropdown-item d-inline p-1 m-4" href="#"
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
