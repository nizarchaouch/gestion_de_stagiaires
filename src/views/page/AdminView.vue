<!-- <template>
  <h1>the sidebar is {{ collapsed ? "closed" : "open" }}</h1>
  <button @click="toggleSidebar">toggleSiderbar</button>
</template>
<script>
import { collapsed, toggleSidebar } from "@/components/sidebar/stat";
export default {
  setup() {
    return { collapsed, toggleSidebar };
  },
};
</script> -->
<template>
  <ModalA />
</template>

<script>
import ModalA from "@/components/modala/ModalA.vue";
export default {
  components: { ModalA },
  setup() {},
};
</script>
