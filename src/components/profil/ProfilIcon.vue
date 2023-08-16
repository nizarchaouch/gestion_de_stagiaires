<template>
  <div class="pos col-4 col-lg-1 col-md-2">
    <button
      type="button"
      style="border: none; background-color: rgba(255, 255, 255, 0)"
    >
      <svg
        class="profil"
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="20"
        viewBox="0 0 17 20"
        fill="none"
      >
        <path
          d="M14.359 13.8462V8.71793C14.359 5.56409 12.6821 2.93332 9.74361 2.23591V1.53846C9.74361 0.687163 9.05639 0 8.20514 0C7.35385 0 6.66668 0.687163 6.66668 1.53846V2.23591C3.72822 2.93332 2.0513 5.56409 2.0513 8.71793V13.8462L0 15.8975V16.9231H16.4102V15.8975L14.359 13.8462ZM8.20514 20C9.33846 20 10.2564 19.0821 10.2564 17.9487H6.15385C6.15385 19.0821 7.07178 20 8.20514 20Z"
          fill="#5041BC"
        />
      </svg>
    </button>
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
