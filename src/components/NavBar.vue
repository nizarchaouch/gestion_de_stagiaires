<script>
import Profil from "./profil/ProfilIcon.vue";
export default {
  components: { Profil },
};
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link to="offer" class="nav-item nav-link">
            <li>Ajouter Offer</li>
          </router-link>
          <!-- <router-link to="" class="nav-item nav-link">
            <li>Present</li>
          </router-link> -->
        </ul>
        <Profil />
      </div>
    </div>
  </nav>
</template>
