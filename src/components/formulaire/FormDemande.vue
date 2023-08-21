<script>
export default {
  data() {
    return {
      sections: [],
    };
  },
  methods: {
    addSection() {
      this.sections.push({});
    },
  },
};
</script>
<template>
  <button
    @click="addSection"
    data-bs-toggle="tooltip"
    data-bs-placement="top"
    title="Ajouter section"
  >
    <i class="fa-solid fa-circle-plus fa-2xl" style="color: #1f5bc1"></i>
  </button>
  <div v-for="(section, index) in sections" :key="index" class="section">
    Section {{ index + 1 }}
  </div>
</template>
<style lang="scss" scoped>
button {
  border: none;
  background-color: transparent;
  font-size: xx-large;
  position: absolute;
  right: 10px;
  bottom: 10px;
}
</style>
