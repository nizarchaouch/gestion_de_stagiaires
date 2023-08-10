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
      <p class="card-title col-md-9 col-7">{{ title }}</p>
      <p class="icon col-md-2 col-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="black"
        >
          <path
            d="M16.5 0H1.5C0.671875 0 0 0.863839 0 1.92857V16.0714C0 17.1362 0.671875 18 1.5 18H16.5C17.3281 18 18 17.1362 18 16.0714V1.92857C18 0.863839 17.3281 0 16.5 0ZM16.5 16.0714H1.5V1.92857H16.5V16.0714ZM6.5 9C7.60313 9 8.5 7.84687 8.5 6.42857C8.5 5.01027 7.60313 3.85714 6.5 3.85714C5.39687 3.85714 4.5 5.01027 4.5 6.42857C4.5 7.84687 5.39687 9 6.5 9ZM3.7 14.1429H9.3C9.6875 14.1429 10 13.7973 10 13.3714V12.6C10 11.3223 9.05937 10.2857 7.9 10.2857C7.5625 10.2857 7.31563 10.6071 6.5 10.6071C5.65938 10.6071 5.45625 10.2857 5.1 10.2857C3.94062 10.2857 3 11.3223 3 12.6V13.3714C3 13.7973 3.3125 14.1429 3.7 14.1429ZM11.25 11.5714H14.75C14.8875 11.5714 15 11.4268 15 11.25V10.6071C15 10.4304 14.8875 10.2857 14.75 10.2857H11.25C11.1125 10.2857 11 10.4304 11 10.6071V11.25C11 11.4268 11.1125 11.5714 11.25 11.5714ZM11.25 9H14.75C14.8875 9 15 8.85536 15 8.67857V8.03571C15 7.85893 14.8875 7.71429 14.75 7.71429H11.25C11.1125 7.71429 11 7.85893 11 8.03571V8.67857C11 8.85536 11.1125 9 11.25 9ZM11.25 6.42857H14.75C14.8875 6.42857 15 6.28393 15 6.10714V5.46429C15 5.2875 14.8875 5.14286 14.75 5.14286H11.25C11.1125 5.14286 11 5.2875 11 5.46429V6.10714C11 6.28393 11.1125 6.42857 11.25 6.42857Z"
            fill="black"
          />
        </svg>
      </p>
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
