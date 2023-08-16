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
  <ModalM />
</template>

<script>
import ModalA from "@/components/modala/ModalA.vue";
import ModalM from "@/components/Modal/ModalM.vue";
export default {
  components: { ModalA, ModalM },
  setup() {},
};
</script>
