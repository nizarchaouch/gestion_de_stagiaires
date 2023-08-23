<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleFileChange(event) {
      const selectedFile = event.target.files[0];
      this.imageUrl = URL.createObjectURL(selectedFile);
    },
  },
};
</script>
<template>
  <div class="titre">
    <input type="text" id="titre" class="fs-1 fw-bold" value="Formulaire " />
    <textarea type="text" placeholder="description"></textarea>
  </div>
</template>
<style lang="scss" scoped>
.titre {
  height: auto;
  width: 800px;
  border-radius: 8px;
  margin-top: 20px;
  margin-left: 22.6%;
  padding-bottom: 10px;
  background-color: white;
  border-top: 12px solid blue;
  input,
  textarea {
    display: block;
    border: none;
    margin: 20px;
    width: 95%;
  }
}
</style>
