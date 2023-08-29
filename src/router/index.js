import { createRouter, createWebHashHistory } from "vue-router";
import Stat from "@/views/page/HomeView.vue";
import Admin from "@/views/page/AdminView.vue";
import Encadrant from "@/views/page/EncadrantView.vue";
import Stagiaire from "@/views/page/StagiaireView.vue";
import Formulaire from "@/views/page/FormulaireView.vue";
import Demande from "@/views/page/DemandeView.vue";
import AdminProfil from "@/components/admin/AdminProfil.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Stat,
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
  },
  {
    path: "/demande",
    name: "demande",
    component: Demande,
  },
  {
    path: "/encadrant",
    name: "encadrant",
    component: Encadrant,
  },
  {
    path: "/stagiaire",
    name: "stagiaire",
    component: Stagiaire,
  },
  {
    path: "/formulaire",
    name: "formulaire",
    component: Formulaire,
  },
  {
    path: "/adminProfil",
    name: "adminProfil",
    component: AdminProfil,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
