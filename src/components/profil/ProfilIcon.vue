<template>
  <div class="pos col-4 col-lg-1 col-md-2">
    <div class="dropdown dropstart profil">
      <button
        class="position-relative"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style="border: none; background-color: transparent"
      >
        <span
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        >
          10
          <span class="visually-hidden">unread messages</span>
        </span>
        <i class="fa-solid fa-bell fa-lg" style="color: #5041bc"></i>
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">Notification</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#/admin">Notification</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Notification</a></li>
      </ul>
    </div>
    <div class="dropdown dropstart profil">
      <button
        class="btn dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="../../assets/logo.png"
          style="background-color: black"
          alt=""
        />
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">Profil</a></li>
        <li><a class="dropdown-item" href="#/admin">Gere Admin</a></li>
        <li><a class="dropdown-item" href="#">Déconnexion</a></li>
      </ul>
    </div>
  </div>
</template>
<style>
img {
  height: 30px;
  border-radius: 50em;
}
.profil {
  display: inline-block;
}
</style>
