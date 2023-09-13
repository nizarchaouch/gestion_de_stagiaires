<script>
import { data } from "../stat";
import ModalM from "@/components/encadrant/MdalModifEncad.vue";
export default {
  setup() {
    return { data };
  },
  data() {
    return {
      selectedOBJ: "null",
    };
  },
  components: { ModalM },
  methods: {
    setSelectedOBJ(obj) {
      console.log(this.selectedOBJ);
      this.selectedOBJ = obj;
      console.log("new", this.selectedOBJ);
    },
  },
};
</script>
<!-- "../../assets/logo.png" -->
<template>
  <tr v-for="(data, i) in data" :key="i">
    <td>
      <img :src="data.img" alt="image" />
    </td>
    <td>{{ data.nom }}</td>
    <td>{{ data.prenom }}</td>
    <td>{{ data.mail }}</td>
    <td>{{ data.tel }}</td>
    <td>{{ data.Specialite }}</td>
    <td>{{ data.stagiaire }}</td>
    <td>
      <div class="form-check form-switch" style="margin-left: 35%">
        <input
          class="form-check-input"
          type="checkbox"
          :id="'ActiveDesactive-' + data.id"
          v-model="data.isChecked"
        />
      </div>
    </td>
    <td>
      <div class="dropdown dropstart profil">
        <button
          class="btn dropdown"
          type="button"
          :id="'MenuButton-' + data.id"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fa-solid fa-ellipsis"></i>
        </button>
        <ul
          class="dropdown-menu"
          :aria-labelledby="'MenuButton-' + data.id"
          @click="setSelectedOBJ(data)"
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
