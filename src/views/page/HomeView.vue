<script>
import Card from "@/components/carddash/CardDash";
export default {
  name: "HomeView",

  components: { Card },
};
</script>

<template>
  <div class="contianer">
    <div class="container-fluid">
      <div class="row">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contianer {
  margin-top: 15px;
  .row {
    justify-content: space-evenly;
  }
}
</style>
