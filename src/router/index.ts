import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AiRecognize from "../views/AiRecognize.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/airecognize",
      name: "AI識別",
      component: AiRecognize,
    },
    {
      path: "/help",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/autobetting",
      name: "auto betting",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Contact.vue"),
    },,
    {
      path: "/game",
      name: "game",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Contact.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Contact.vue"),
    }
  ],
}  as RouterOptions);

export default router;
