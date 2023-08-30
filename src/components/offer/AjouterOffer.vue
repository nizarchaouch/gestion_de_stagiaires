<script>
import CardOffer from "./CardOffer.vue";
export default {
  components: { CardOffer },
};
</script>
<template>
  <div class="col-lg-5">
    <div class="titre">
      <input type="text" id="titre" class="fs-1 fw-bold" value="Titre" />
      <textarea
        type="text"
        placeholder="description"
        id="description"
      ></textarea>
      <button type="button" class="btn btn-outline-success float-end">
        Sauvegarder
      </button>
      <p>&thinsp;</p>
    </div>
  </div>
  <hr style="border: solid 2px" />
  <div class="conatainer">
    <h5 class="ms-3 title position-absolute">Liste d'offer</h5>
  </div>
  <div class="container">
    <CardOffer />
    <CardOffer />
    <CardOffer />
  </div>
</template>
<style lang="scss" scoped>
.titre {
  height: auto;
  width: 800px;
  border-radius: 8px;
  margin-top: 20px;
  margin-left: 50%;
  padding-bottom: 10px;
  background-color: white;
  input,
  textarea {
    display: block;
    border: none;
    margin: 20px;
    width: 95%;
  }
  .btn {
    margin-right: 10px;
  }
}
.title::before {
  content: " ";
  background-color: #233eae;
  width: 6px;
  height: 30px;
  position: absolute;
  left: -8px;
  border-radius: 15px;
}
</style>
