<script>
export default {
  props: { h: String, s: String },
};
</script>
<template>
  <div class="row">
    <h6>{{ h }}</h6>
  </div>
  <div class="row">
    <span>{{ s }}</span>
  </div>
</template>
<style scoped>
img {
  width: 120px;
  height: 128px;
  border-radius: 200px;
}
p {
  color: #0086ca;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
  text-align: left;
}
span {
  color: #1a4f6e;
  font-family: Poppins;
  font-size: 15px;
  font-weight: 800;
  text-align: left;
  margin-bottom: 20px;
}
h6 {
  color: #292d32;
  font-family: Poppins;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
}
.profil {
  display: flex;
  padding: 50px 4px 16px 0px;
  margin-bottom: 0;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #5932ea;
  font-family: Inter;
  font-size: 25px;
  line-height: 20px;
  margin-left: 35px;
}
h2 {
  height: 2px;
  background: #5932ea;
  margin: 0 30px 0 60px;
}
textarea {
  width: 308px;
  height: 54px;
  background-color: rgba(217, 217, 217, 0.29);
  border-radius: 15px;
  border: none;
  color: gray;
}
</style>
