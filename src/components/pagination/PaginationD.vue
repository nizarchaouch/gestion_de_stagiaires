<template>
  <div>
    <div v-for="page in paginatedData" :key="page">
      <div v-for="person in page" :key="person">{{ person }}</div>
      <hr v-if="page !== paginatedData[paginatedData.length - 1]" />
    </div>

    <div class="pagination">
      <button
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      personnes: [
        "Alice",
        "Bob",
        "Charlie",
        "David",
        "Eva",
        "Frank",
        "Grace",
        "Hannah",
        "Ivy",
        "Jack",
        "Kate",
        "Liam",
        "Mia",
        "Noah",
        "Olivia",
      ],
      itemsPerPage: 3,
      currentPage: 1,
    };
  },
  computed: {
    paginatedData() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.personnes.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.personnes.length / this.itemsPerPage);
    },
  },
  methods: {
    changePage(pageNumber) {
      this.currentPage = pageNumber;
    },
  },
};
</script>
