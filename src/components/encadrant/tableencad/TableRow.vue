<script>
import axios from "axios";
import ModalM from "@/components/encadrant/MdalModifEncad.vue";
export default {
  data() {
    return {
      selectedOBJ: "null",
      encadruers: [],
    };
  },
  mounted() {
    this.fetchEncadreurs();
  },
  components: { ModalM },
  methods: {
    setSelectedOBJ(obj) {
      console.log(this.selectedOBJ);
      this.selectedOBJ = obj;
      console.log("new", this.selectedOBJ);
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
<!-- "../../assets/logo.png" -->
<template>
  <tr v-for="encadruer in encadruers" :key="encadruer.id">
    <td>
      <img :src="encadruers.img" alt="image" />
    </td>
    <td>{{ encadruer.nom }}</td>
    <td>{{ encadruer.prenom }}</td>
    <td>{{ encadruer.mail }}</td>
    <td>{{ encadruer.tel }}</td>
    <td>{{ encadruer.Specialite }}</td>
    <td>{{ encadruer.stagiaire }}</td>
    <td>
      <div class="form-check form-switch" style="margin-left: 35%">
        <input
          class="form-check-input"
          type="checkbox"
          :id="'ActiveDesactive-' + encadruer.id"
          v-model="encadruer.statut"
        />
      </div>
    </td>
    <td>
      <div class="dropdown dropstart profil">
        <button
          class="btn dropdown"
          type="button"
          :id="'MenuButton-' + encadruer.id"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fa-solid fa-ellipsis"></i>
        </button>
        <ul
          class="dropdown-menu"
          :aria-labelledby="'MenuButton-' + encadruer.id"
          @click="setSelectedOBJ(encadruer)"
        >
          <ModalM />
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
  background-color: black;
}
a {
  margin-right: 15px;
}
.form-check-input {
  --bs-form-check-bg: #f81111a1;
}
.form-check-input:checked {
  background-color: green;
  border-color: green;
}
</style>
