<script>
import MM from "./Modal/MM.vue";
export default {
  props: {
    obj: String,
  },
  components: { MM },
};
</script>
<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">Information de Stagiaire</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="row">
        <div class="col-lg-4">
          <img src="https://l8.nu/sk0V" alt="image" />
        </div>
        <div class="col-lg-6 m-4">
          <p>{{ obj.nom }}</p>
        </div>
      </div>
      <div class="row">
        <MM :h="'E-mail : ' + obj.mail" />
        <MM :h="'Téléphone : ' + obj.tel" />
        <MM h="Ecolé : EPI" />
        <MM :h="'Niveau : ' + obj.niveau" />
        <MM :h="'Duree de stage : ' + obj.dureestage" />
        <MM :h="'Date de debuit : ' + obj.dated" />
        <MM :h="'Date de Fin : ' + obj.datef" />
        <MM :h="'Type de stage : ' + obj.type" />
        <MM :h="'Encadreur : ' + obj.encadrant" />
      </div>
    </div>
  </div>
</template>
<style scoped>
img {
  width: 120px;
  height: 128px;
  border-radius: 200px;
  margin-bottom: 30px;
}
p {
  color: #0086ca;
  font-family: Poppins;
  font-size: 25px;
  font-weight: 600;
  margin-top: 14px;
  text-align: left;
}
.row {
  margin-left: 25px;
}
h5 {
  color: #2073a3;
  font-family: Poppins;
  font-weight: 600;
}
</style>
