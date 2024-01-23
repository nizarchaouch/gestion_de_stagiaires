<script>
/* eslint-disable */
import MM from "./Modal/MM.vue";
import MS from "./tablestag/assigner/ModalAssig.vue";
export default {
  props: {
    obj: String,
  },
  components: { MM, MS },
  methods: {
    printPage() {
      let today = new Date();
      let date = `${today.getDate()}/${
        today.getMonth() + 1
      }/${today.getFullYear()}`;

      let content = `<div style="font-weight: bold; font-size: 20px; padding-left: 6%; text-align: center">
    <h1 style="text-decoration: underline; color: darkblue">
      ATTESTATION DE STAGE
    </h1>
    <br />
    <p>
      Je soussigné Seifeddine BEN AICHA Gérant de la
    </p>
    <p>sociéte SWConsulting,atteste par la présent</p>
    <p>que</p>
    <br />
    <h3 style="text-decoration: underline; color: darkblue">${this.obj.nom}</h3>
    <br />
    <p>A effectué un stage Développeur au sein de </p>
    <p>notre entreprise du</p>
    <br />
    <h3 style="text-decoration: underline; color: darkblue">
      ${this.obj.dated} au ${this.obj.datef}
    </h3>
    <br />
    <p>
      Cette attestation est délivrée a l'intéressé(e) pour
    </p>
    <p>servir et valoir ce que de droit.</P>
    <p>Fait a Monastir, Bouhjar le ${date}</p>
    <br />
    <p style="text-decoration: underline; color: darkblue; text-align: left">
      BEN AICHA Seifeddine
    </p>
  </div>`;

      const printWindow = window.open("", "_blank");
      printWindow.document.open();
      printWindow.document.write(content);
      printWindow.document.close();

      printWindow.print();
    },
  },
};
</script>
<template>
  <MS :obj="obj" />
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
          <img src="https://shorter.me/pW1kn" alt="image" />
        </div>
        <div class="col-lg-6 m-4">
          <p>{{ obj.prenom }} {{ obj.nom }}</p>
        </div>
      </div>
      <div class="row">
        <MM :h="'E-mail : ' + obj.mail" />
        <MM :h="'Date de naissance : ' + obj.datenaissance" />
        <MM :h="'Téléphone : ' + obj.tel" />
        <MM :h="'Ecolé : ' + obj.ecole" />
        <MM :h="'Niveau : ' + obj.niveau" />
        <!-- <MM :h="'Duree de stage : ' + obj.dureestage" /> -->
        <MM :h="'Date de debuit : ' + obj.dated" />
        <MM :h="'Date de Fin : ' + obj.datef" />
        <MM :h="'Type de stage : ' + obj.typestage" />
        <!-- <MM :h="'Encadreur : ' + obj.encadrant" /> -->
      </div>
      <button class="btn btn-outline-success me-1" @click="printPage()">
        Générer Attestation
      </button>
      <button
        class="btn btn-outline-success"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#modalAssS"
        data-bs-whatever="@getbootstrap"
        @click=""
      >
        Encadrant +
      </button>
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
