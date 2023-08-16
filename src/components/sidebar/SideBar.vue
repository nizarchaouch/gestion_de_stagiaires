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
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
        <img id="logocoll" alt="SW logo" src="../../assets/logo.png" />
      </span>
      <span v-else> <img alt="SW logo" src="../../assets/logo.png" /></span>
    </h1>
    <hr />
    <SidebarLink to="/" icon="fas fa-chart-column">Statistiques</SidebarLink>
    <SidebarLink to="/demande" icon="fas fa-file-invoice">Demandes</SidebarLink>
    <SidebarLink to="/encadrant" icon="fas fa-users">Encadrants</SidebarLink>
    <SidebarLink to="/stagiaire" icon="fas fa-user-graduate">
      Stagiaires</SidebarLink
    >
    <SidebarLink to="/formulaire" icon="fas fa-file">Formulaires</SidebarLink>
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fa-sharp fa-solid fa-angles-left"></i>
    </span>
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
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3 ease;
  display: flex;
  flex-direction: column;

  .collapse-icon {
    position: absolute;
    bottom: 0.75em;
    color: rgb(255, 255, 255, 0.7);
  }

  .rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
  }
  h1 img {
    height: 3.5em;
    width: 3.5em;
    margin-top: 10px;
  }
  #logocoll {
    height: 1em;
    width: 1em;
  }
  hr {
    width: 100%;
    border: solid 2px;
    color: var(--sidebar-item-hover);
    margin-bottom: 2em;
  }
  @media (max-width: 768px) {
    width: 50px;
  }
}
</style>
