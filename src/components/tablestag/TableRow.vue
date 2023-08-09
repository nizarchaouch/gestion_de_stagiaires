<script>
import { data } from "./stat";
export default {
  setup() {
    return { data };
  },
};
</script>
<!-- "../../assets/logo.png" -->
<template>
  <tr v-for="(data, i) in data" :key="i">
    <th>
      <img
        src="../../assets/logo.png"
        alt="image"
        style="background-color: black"
      />
    </th>
    <td>{{ data.nom }}</td>
    <td>{{ data.gmail }}</td>
    <td>{{ data.dated }}</td>
    <td>{{ data.datef }}</td>
    <td>{{ data.encadrant }}</td>
    <td>{{ data.type }}</td>
    <td>
      <p
        v-if="data.status == 'active'"
        class="status"
        style="background-color: rgb(3, 181, 3); color: white"
      >
        {{ data.status }}
      </p>
      <p v-else class="status" style="background-color: red; color: white">
        {{ data.status }}
      </p>
    </td>
    <td>
      <div class="dropdown dropstart profil">
        <button
          class="btn dropdown"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.00004 8.33331C4.08337 8.33331 3.33337 9.08331 3.33337 9.99998C3.33337 10.9166 4.08337 11.6666 5.00004 11.6666C5.91671 11.6666 6.66671 10.9166 6.66671 9.99998C6.66671 9.08331 5.91671 8.33331 5.00004 8.33331ZM15 8.33331C14.0834 8.33331 13.3334 9.08331 13.3334 9.99998C13.3334 10.9166 14.0834 11.6666 15 11.6666C15.9167 11.6666 16.6667 10.9166 16.6667 9.99998C16.6667 9.08331 15.9167 8.33331 15 8.33331ZM10 8.33331C9.08337 8.33331 8.33337 9.08331 8.33337 9.99998C8.33337 10.9166 9.08337 11.6666 10 11.6666C10.9167 11.6666 11.6667 10.9166 11.6667 9.99998C11.6667 9.08331 10.9167 8.33331 10 8.33331Z"
              fill="#6C757D"
            />
          </svg>
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">Active ou Desactive</a></li>
          <li><a class="dropdown-item" href="#">Modifier</a></li>
          <li><a class="dropdown-item" href="#">Supprime</a></li>
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
</style>
