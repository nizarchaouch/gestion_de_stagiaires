<script>
import { data } from "./stat";
import ToggleOffcanvas from "../ToggleOffcanvas.vue";
export default {
  components: { ToggleOffcanvas },
  setup() {
    return { data };
  },
  data() {
    return {
      selectedOBJ: "null",
    };
  },
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
  <ToggleOffcanvas :obj="selectedOBJ" />
  <tr v-for="data in data" :key="data.id">
    <th
      @click="setSelectedOBJ(data)"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
      :id="data.id"
    >
      <img :src="data.img" alt="image" />
    </th>
    <td
      @click="setSelectedOBJ(data)"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
      :id="data.id"
    >
      {{ data.nom }}
    </td>
    <td
      @click="setSelectedOBJ(data)"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
      :id="data.id"
    >
      {{ data.projet }}
    </td>
    <td
      @click="setSelectedOBJ(data)"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
      :id="data.id"
    >
      {{ data.dureestage }}
    </td>
    <td
      @click="setSelectedOBJ(data)"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
      :id="data.id"
    >
      {{ data.encadrant }}
    </td>
    <td>
      <div class="form-check form-switch" style="margin-left: 35%">
        <input
          class="form-check-input"
          type="checkbox"
          :id="'ActiveDesactive-' + data.id"
          checked
        />
      </div>
    </td>
    <td>
      <div class="dropdown dropstart profil">
        <button
          class="btn dropdown"
          type="button"
          :id="data.id"
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
  background-color: black;
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
