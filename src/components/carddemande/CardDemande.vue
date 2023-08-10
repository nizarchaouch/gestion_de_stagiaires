<script>
import { data } from "./stat";
export default {
  setup() {
    return { data };
  },
};
</script>
<template>
  <div class="card col-lg-2" v-for="(data, i) in data" :key="i">
    <div class="card-body">
      <img class="card-title" :src="data.img" alt="image" />
      <h6 class="card-text">{{ data.nom }}</h6>
      <h6 class="card-subtitle m-2 text-muted">Epi Sousse</h6>
      <hr />
      <p class="card-subtitle text-muted">{{ data.gmail }}</p>
      <h6 class="card-subtitle m-1 text-muted">{{ data.tel }}</h6>
    </div>
  </div>
</template>
<style scoped>
.card {
  margin: 30px;
  border-radius: 20px;
  border: 2px solid #5041bc;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: inline-block;
  width: 250px;
}
img {
  border-radius: 200px;
  width: 76px;
  height: 69px;
}
</style>
