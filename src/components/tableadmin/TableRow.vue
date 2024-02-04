<script>
import { data } from "./stat";
import axios from "axios";
export default {
  setup() {
    return { data };
  },
  data() {
    return {
      selectedOBJ: "null",
      admins: [],
    };
  },
  mounted() {
    this.fetchAdmin();
  },
  methods: {
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
    <td>{{ data.role }}</td>
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
}
a {
  margin-right: 15px;
}
</style>
