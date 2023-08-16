<script>
export default {
  props: {
    title: String,
    number: Int8Array,
  },
};
</script>
<template>
  <div class="card col-md-2 col-10 col-sm-5">
    <div class="row">
      <p class="card-title col-md-12 col-7">{{ title }}</p>
      <!-- <p class="icon col-md-2 col-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="black"
        >
          <path d="{{ d }}" fill="black" />
        </svg>
      </p> -->
    </div>

    <div class="row">
      <p class="card-text col-md-6 col-6">{{ number }}</p>
      <a href="#" class="col-md-6 col-6">Voir Plus</a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  /* text-transform: uppercase;
  text-align: justify;
  height: 8em;
  width: 17rem;
  padding-top: 1em;
  cursor: pointer; */
  fill: #fff;
  stroke-width: 1px;
  stroke: #d3cbfb;
  border-color: #d3cbfb;
  border-radius: 20px;
  margin-bottom: 2%;
  .row {
    margin-top: 10%;
  }
}
.card-title {
  color: #797d8c;
  font-family: Nunito;
  font-weight: 600;
  text-transform: uppercase;
}
.card-text {
  color: #04103b;
  font-family: Nunito;
  font-size: 27px;
  font-weight: 700;
}
a {
  color: #5041bc;
  font-family: Nunito;
  font-weight: 600;
}
</style>
