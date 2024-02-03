import axios from "axios";

export let data = {
  async fetchStagiaires() {
    let stagiaires;
    try {
      const response = await axios.get(
        "http://localhost:8081/stagiaire/showStagi"
      );
      stagiaires = response.data;
      let hommeCount = 0;
      let femmeCount = 0;
      for (const stagiaire of stagiaires) {
        if (stagiaire.sex === "homme") {
          hommeCount++;
        } else {
          femmeCount++;
        }
      }
      this.homme = hommeCount;
      this.femme = femmeCount;
    } catch (error) {
      console.error("Internal Server Error:", error);
    }
  },
  homme: 0,
  femme: 0,
};
data.fetchStagiaires();
