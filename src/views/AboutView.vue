<template>
  <div style="text-align: center; font-weight: bold; font-size: 20px">
    <h1 style="text-decoration: underline; color: darkblue">
      ATTESTATION DE STAGE
    </h1>
    <br />
    <p>
      Je soussigné Seifeddine BEN AICHA Gérant de la sociéte SWConsulting,
      atteste par la présent que
    </p>
    <br />
    <h4 style="text-decoration: underline; color: darkblue">${this.obj.nom}</h4>
    <br />
    <p>A effectué un stage Développeur au sein de notre entreprise du</p>
    <br />
    <h4 style="text-decoration: underline; color: darkblue">
      ${this.obj.dated} au ${this.obj.datef}
    </h4>
    <br />
    <p>
      Cette attestation est délivrée a l'intéressé(e) pour servir et valoir ce
      que de droit.
    </p>
    <br />
    <p>Fait a Monastir, Bouhjar le ${Date}</p>
    <br />
    <p style="text-decoration: underline; color: darkblue; text-align: left">
      BEN AICHA Seifeddine
    </p>
  </div>
</template>
