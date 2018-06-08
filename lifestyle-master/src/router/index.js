import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/home/Home";
import City from "@/pages/city/City";
import Detail from "@/pages/detail/Detail";
import MovieList from "@/pages/movies/MovieList.vue";
import movieDetail from "@/pages/movies/MovieDetail";
import Find from "@/pages/find/Findpage";
// import travel from "@/pages/home/Home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/city",
      name: "City",
      component: City
    },
    {
      path: "/detail/:id",
      name: "Detail",
      component: Detail
    },
    {
      path: "/MovieList/",
      name: "MovieList",
      component: MovieList
    },
    {
      path: "/movieDetail/:id",
      component: movieDetail
    },
    {
      path: "/find/",
      component: Find
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
