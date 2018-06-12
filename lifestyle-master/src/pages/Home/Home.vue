<template>
 <div>
   <home-header></home-header>
   <home-swiper :swiperList="swiperList"></home-swiper>
   <home-icons :iconList="iconList"></home-icons>
   <home-weekend :weekendList="weekendList"></home-weekend>
   <home-recommend :recommendList="recommendList"></home-recommend>
   <bottom></bottom>
 </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import Bottom from "../../common/Bottom";
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
    Bottom
  },
  data() {
    return {
      lastCity: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  computed: {
    ...mapState(["city"])
  },
  methods: {
    getHomeInfo() {
      axios
        .get("./static/mock/index.json?city=" + this.city)
        .then(this.getHomeInfSucc);
    },
    getHomeInfSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
    }
  },
  mounted() {
    this.lastCity = this.city;
    this.getHomeInfo();
  },
  activated() {
    if (this.lastCity != this.city) {
      this.getHomeInfo();
      this.lastCity = this.city;
    }
  }
};
</script>

<style scoped>
</style>
