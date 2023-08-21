<script>
import { data } from "../stat";
export default {
  setup() {
    return { data };
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
      <div class="dropdown dropstart profil">
        <button
          class="btn dropdown"
          type="button"
          id="dropdownMenuButton"
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
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background-color: black;
}
a {
  margin-right: 15px;
}
</style>
