<script>
import { not } from "./stat";
export default {
  data() {
    return { not };
  },
};
</script>
<template>
  <div class="pos col-4 col-lg-1 col-md-2">
    <!-- <div class="dropdown dropstart profil">
      <button
        class="position-relative"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style="border: none; background-color: transparent"
      >
        <span
          v-if="not !== 0"
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        >
          {{ not }}
          <span class="visually-hidden">unread messages</span>
        </span>
        <i
          v-if="not == 0"
          class="fa-solid fa-bell fa-lg"
          style="color: #5041bc"
        ></i>
        <i
          v-else
          class="fa-solid fa-bell fa-shake fa-lg"
          style="color: #5041bc"
        ></i>
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">Notification</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#/admin">Notification</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Notification</a></li>
      </ul>
    </div> -->
    <div class="dropdown dropstart profil">
      <button
        class="btn dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src="https://shorter.me/pW1kn" alt="Photo Profil" />
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <router-link to="/adminProfil" class="dropdown-item">
          <li>Profil</li>
        </router-link>
        <router-link to="/admin" class="dropdown-item">
          <li>Gere Admin</li>
        </router-link>
        <li><a class="dropdown-item" href="#">Déconnexion</a></li>
      </ul>
    </div>
  </div>
</template>
<style>
img {
  height: 50px;
  width: 50px;
  border-radius: 50em;
}
.profil {
  display: inline-block;
}
li {
  text-decoration: none;
}
</style>
