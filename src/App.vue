<script>
import SideBar from "@/components/sidebar/SideBar";
import { sidebarWidth } from "@/components/sidebar/stat";
import NavBar from "@/components/NavBar.vue";
export default {
  components: { SideBar, NavBar },
  setup() {
    return { sidebarWidth };
  },
};
</script>

<template>
  <SideBar />
  <div :style="{ 'margin-left': sidebarWidth }">
    <NavBar />
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
