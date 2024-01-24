<script>
/* eslint-disable */
import axios from "axios";
import ToggleOffcanvas from "../ToggleOffcanvas.vue";
import MM from "./ModalModifStag.vue";
export default {
  components: { ToggleOffcanvas, MM },
  data() {
    return {
      selectedOBJ: "null",
      stagiaires: [],
      encadruer: [],
      assg: [],
    };
  },
  mounted() {
    this.fetchStagiaires();
    this.fetchEncadreurs();
    this.fetchAssg();
  },

  methods: {
    setSelectedOBJ(obj) {
      //console.log(this.selectedOBJ);
      this.selectedOBJ = obj;
      //console.log("new", this.selectedOBJ);
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

    async fetchAssg() {
      try {
        const response = await axios.get(
          "http://localhost:8081/assigner/ShowAssg"
        );
        this.assg = response.data;
      } catch (error) {
        console.error("Internal Server Error:", error);
      }
    },
  },
};
</script>
<template>
  <!-- {{ console.log("assg:", assg[0]) }} -->
  <ToggleOffcanvas :obj="selectedOBJ" />
  <MM :obj="selectedOBJ" />
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
    <td
      @click="setSelectedOBJ(stagiaire)"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
      :id="stagiaires._id"
    >
      {{ stagiaire.nom }}
    </td>
    <td
      @click="setSelectedOBJ(stagiaire)"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
      :id="stagiaires._id"
    >
      {{ stagiaire.prenom }}
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
      <select class="form-select" id="multiple-select-field" multiple>
        <template v-for="ass in assg" :key="encadruer._id">
          <template v-for="encadruer in encadruers" :key="encadruer._id">
            <option
              v-if="
                ass.idStag === stagiaire._id && ass.idEencad === encadruer._id
              "
              :key="ass._id"
            >
              {{
                encadruer.nom +
                " " +
                encadruer.prenom +
                " / " +
                encadruer.specialite
              }}
            </option>
            <p v-else></p>
          </template>
        </template>
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
          <button
            @click="setSelectedOBJ(stagiaire)"
            class="ms-4"
            data-bs-toggle="modal"
            data-bs-target="#modifierModalStag"
            data-bs-whatever="@getbootstrap"
            id="btnset"
          >
            <i class="fa-solid fa-sliders fa-lg"></i>
          </button>

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
#btnset {
  background-color: transparent;
  border: none;
}
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
