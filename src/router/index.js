import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import WatchPage from "@/views/WatchPage.vue";
import DetailPage from "@/views/DetailPage.vue";
import AdminPage from "@/views/AdminPage.vue";
import FilmDetail from "@/views/FilmDetail.vue";
import FilmCreate from "@/views/FilmCreate.vue";
import HistoryPage from "@/views/HistoryPage.vue";
import FavouritePage from "@/views/FavouritePage.vue";

const routes = [
  {
    path: "/",
    name: "homepage",
    component: HomePage,
  },

  {
    path: "/result",
    name: "result",
    component: DetailPage,
  },

  {
    path: "/watch/:slug",
    name: "watchpage",
    component: WatchPage,
    props: true,
  },

  {
    path: "/admin",
    name: "admin",
    component: AdminPage,
  },

  {
    path: "/admin/film-detail",
    name: "admin-film-detail",
    component: FilmDetail,
  },

  {
    path: "/admin/film-create",
    name: "admin-film-create",
    component: FilmCreate,
  },
  {
    path: "/history",
    name: "history-component",
    component: HistoryPage,
  },
  {
    path: "/favourite",
    name: "favourite-component",
    component: FavouritePage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
