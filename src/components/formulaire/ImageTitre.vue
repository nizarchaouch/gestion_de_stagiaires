<script>
export default {
  props: {
    TitreForm: String,
  },
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
  <div class="img">
    <input
      type="file"
      id="file"
      @change="handleFileChange"
      style="display: none"
    />
    <label for="file"><img :src="imageUrl" alt="Image" /></label>
  </div>
  <div class="titre">
    <input type="text" id="titre" class="fs-1 fw-bold" :value="TitreForm" />
    <textarea type="text" placeholder="description"></textarea>
  </div>
</template>
<style lang="scss" scoped>
img {
  height: 200px;
  width: 800px;
  border-radius: 8px;
  cursor: pointer;
}
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
.img {
  height: auto;
  width: 800px;
  border-radius: 8px;
  margin-top: 20px;
  margin-bottom: 40px;
  margin-left: 22.6%;
  background-color: white;
}
</style>
