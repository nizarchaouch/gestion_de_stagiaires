<script>
/* eslint-disable */
import axios from "axios";
import MM from "../MdalModifEncad.vue";
export default {
  components: { MM },
  data() {
    return {
      selectedOBJ: "null",
      encadruers: [],
      stagiaires: [],
      assg: [],
    };
  },
  mounted() {
    this.fetchEncadreurs();
    this.fetchStagiaires();
    this.fetchAssg();
  },
  methods: {
    setSelectedOBJ(obj) {
      // console.log(this.selectedOBJ);
      this.selectedOBJ = obj;
      // console.log("new", this.selectedOBJ);
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

    async delEncadreur(encadreurId) {
      try {
        await axios.delete(
          `http://localhost:8081/encadreur/delEncad/${encadreurId}`
        );
        this.fetchEncadreurs();
      } catch (error) {
        console.error("Internal Server Error:", error);
      }
    },

    async changeStatut(encadreurId) {
      try {
        await axios.put(
          `http://localhost:8081/encadreur/statut/${encadreurId}`
        );
      } catch (error) {
        console.error("Internal Server Error:", error);
      }
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

    async delAssignment(assignmentId) {
      try {
        await axios.delete(
          `http://localhost:8081/assigner/DelAssg/${assignmentId}`
        );
        this.fetchAssg();
      } catch (error) {
        console.error("Internal Server Error:", error);
      }
    },
  },
};
</script>
<template>
  <MM :obj="selectedOBJ" />
  <tr v-for="encadruer in encadruers" :key="encadruer._id">
    <td>
      <img src="https://shorter.me/pW1kn" alt="image" />
    </td>
    <td>{{ encadruer.nom }}</td>
    <td>{{ encadruer.prenom }}</td>
    <td>{{ encadruer.mail }}</td>
    <td>{{ encadruer.tel }}</td>
    <td>{{ encadruer.specialite }}</td>
    <td>
      <select
        class="form-select"
        id="multiple-select-field"
        data-placeholder="Choose anything"
        multiple
      >
        <template v-for="ass in assg" :key="assg._id">
          <template v-for="stagiaire in stagiaires" :key="stagiaire._id">
            <option
              @dblclick="delAssignment(ass._id)"
              v-if="
                ass.idStag === stagiaire._id && ass.idEencad === encadruer._id
              "
              :key="ass._id"
            >
              {{
                stagiaire.nom +
                " " +
                stagiaire.prenom +
                " // projet: " +
                stagiaire.projet
              }}
            </option>
            <p v-else></p>
          </template>
        </template>
      </select>
    </td>
    <td>
      <div class="form-check form-switch" style="margin-left: 35%">
        <input
          class="form-check-input"
          type="checkbox"
          :id="'ActiveDesactive-' + encadruer._id"
          v-model="encadruer.statut"
          @click="changeStatut(encadruer._id)"
        />
      </div>
    </td>
    <td>
      <div class="dropdown dropstart profil">
        <button
          class="btn dropdown"
          type="button"
          :id="'MenuButton-' + encadruer._id"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fa-solid fa-ellipsis"></i>
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <button
            @click="setSelectedOBJ(encadruer)"
            class="ms-4"
            data-bs-toggle="modal"
            data-bs-target="#modifierModal"
            data-bs-whatever="@getbootstrap"
            id="btnset"
          >
            <i class="fa-solid fa-sliders fa-lg"></i>
          </button>
          <a
            class="dropdown-item d-inline p-1 m-4"
            @click="delEncadreur(encadruer._id)"
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
.form-check-input {
  --bs-form-check-bg: #f81111a1;
}
.form-check-input:checked {
  background-color: green;
  border-color: green;
}
</style>
