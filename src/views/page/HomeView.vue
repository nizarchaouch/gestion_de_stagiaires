<template>
  <div class="container mt-5">
    <div class="card blue">
      <div class="card-body">
        <h5 class="card-title" style="color: blue">Demande stage</h5>
        <p class="card-text">12</p>
      </div>
    </div>
    <div class="card green">
      <div class="card-body">
        <h5 class="card-title" style="color: rgb(2, 178, 14)">
          Stagiaires en cours
        </h5>
        <p class="card-text">12</p>
      </div>
    </div>
    <div class="card red">
      <div class="card-body">
        <h5 class="card-title" style="color: red">Stagiaires refuses</h5>
        <p class="card-text">12</p>
      </div>
    </div>
    <div class="card orange">
      <div class="card-body">
        <h5 class="card-title" style="color: rgb(243, 170, 33)">
          demande en attentes
        </h5>
        <p class="card-text">12</p>
      </div>
    </div>
  </div>
</template>
<script>
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",

  components: {
    //HelloWorld,
  },
};
</script>

<style scoped>
div {
  display: inline-block;
  margin-right: 10px;
}
.card {
  text-transform: uppercase;
  text-align: justify;
  height: 8em;
  width: 17rem;
  padding-top: 1em;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  cursor: pointer;
}
.blue::before {
  content: " ";
  height: 100%;
  width: 5px;
  background: blue;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0.375rem 0 0 0.375rem;
}
.green::before {
  content: " ";
  height: 100%;
  width: 5px;
  background: rgb(2, 178, 14);
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0.375rem 0 0 0.375rem;
}
.red::before {
  content: " ";
  height: 100%;
  width: 5px;
  background: red;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0.375rem 0 0 0.375rem;
}
.orange::before {
  content: " ";
  height: 100%;
  width: 5px;
  background: rgb(243, 169, 33);
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0.375rem 0 0 0.375rem;
}
</style>
