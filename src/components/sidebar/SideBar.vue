<script>
import SidebarLink from "./SidebarLink";
import { collapsed, toggleSidebar, sidebarWidth } from "./stat";
import "@fortawesome/fontawesome-free/css/all.css";

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
};
</script>
<template>
  <div
    class="sidebar"
    :style="{ width: sidebarWidth }"
    @mouseenter="toggleSidebar"
    @mouseleave="toggleSidebar"
    style="transition: width 350ms"
  >
    <router-link to="/">
      <h1>
        <span>
          <img id="logocoll" alt="SW logo" src="../../assets/logo.png" />
        </span>
      </h1>
    </router-link>
    <hr />
    <SidebarLink to="/" icon="fas fa-chart-column">Statistiques</SidebarLink>
    <SidebarLink to="/demande/showDemande" icon="fa-solid fa-id-card"
      >Demandes</SidebarLink
    >
    <SidebarLink to="/encadrant/showEncad" icon="fas fa-users"
      >Encadrants</SidebarLink
    >
    <SidebarLink to="/stagiaire/showStagi" icon="fas fa-user-graduate">
      Stagiaires</SidebarLink
    >
    <SidebarLink to="/formulaire" icon="fas fa-file">Formulaires</SidebarLink>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #5041bc;
  --sidebar-item-hover: #fff;
  --sidebar-item-active: #e5e5e5;
}
</style>
<style lang="scss" scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  display: flex;
  flex-direction: column;

  h1 img {
    height: 1.5em;
    width: 1.5em;
    margin-top: 10px;
  }
  hr {
    width: 100%;
    border: solid 2px;
    color: var(--sidebar-item-hover);
  }
  @media (max-width: 768px) {
    width: 50px;
  }
}
</style>
