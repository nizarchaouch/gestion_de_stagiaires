<script>
import SideBar from "@/components/sidebar/SideBar";
import { sidebarWidth } from "@/components/sidebar/stat";
import Search from "@/components/searchbar/SearchBar";
import Profil from "@/components/profil/ProfilIcon";
export default {
  components: { SideBar, Search, Profil },
  setup() {
    return { sidebarWidth };
  },
};
</script>

<template>
  <SideBar />
  <div :style="{ 'margin-left': sidebarWidth }">
    <div class="navbar"><Search /> <Profil /></div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .navbar {
    display: inline-block;
  }
}
</style>
