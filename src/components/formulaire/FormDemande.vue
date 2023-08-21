<template>
  <button @click="addSection">Ajouter une section</button>
  <div v-for="(section, index) in sections" :key="index" class="section">
    Section {{ index + 1 }}
  </div>
</template>
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
