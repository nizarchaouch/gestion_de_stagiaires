<script>
export default {
  data() {
    return {
      imageUrl: "https://2cm.es/stay",
    };
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
  <div>
    <input
      type="file"
      id="file"
      @change="handleFileChange"
      style="display: none"
    />
    <label for="file"><img :src="imageUrl" alt="Image" /></label>
  </div>
  <div class="title">
    <input type="text" id="title" class="fs-1 fw-bold" value="Formulaire " />
    <input type="textarea " value="description" />
  </div>
</template>
<style lang="scss" scoped>
img {
  height: 200px;
  width: 800px;
  border-radius: 8px;
  margin-top: 20px;
  cursor: pointer;
}
.title {
  height: 200px;
  width: 800px;
  border-radius: 8px;
  margin-top: 20px;
  margin-left: 22.6%;
  background-color: white;
  border-top: 12px solid blue;
  input {
    display: block;
    border: none;
    margin: 20px;
    width: 90%;
  }
}
</style>
