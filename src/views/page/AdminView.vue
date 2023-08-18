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
  <div class="float-start ms-5"><h4>Liste Admin</h4></div>
  <div class="float-end me-5"><ModalA /></div>
  <TableA />
</template>

<script>
import ModalA from "@/components/modala/ModalA.vue";
import TableA from "@/components/tableadmin/TableAdmin.vue";
export default {
  components: { ModalA, TableA },
  setup() {},
};
</script>
