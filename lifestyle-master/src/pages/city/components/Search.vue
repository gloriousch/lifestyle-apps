<template>
    <div>
        <div class="search" >
            <input v-model="keyword"  class="search-input" type="text" placeholder="输入城市名或拼音">
            <div class="search-content" v-show="keyword" ref="search">
                <ul>
                    <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleClickCity(item.name)">{{item.name}}</li>
                    <li class="search-item border-bottom" v-show="hasNoData">未找到匹配数据</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations } from "vuex";
import Bscroll from "better-scroll";
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    }
  },
  methods: {
    handleClickCity(city) {
      //this.$store.dispatch("changeCity", city);
      //this.$store.commit("changeCity", city);
      this.changeCity(city);
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"])
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search);
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;

  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    padding: 0 0.1rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #000000;
    background: #CDC9C9;
  }

  .search-content {
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;

    .search-item {
      line-height: 0.62rem;
      padding-left: 0.2rem;
      color: #666;
      background: #fff;
    }
  }
}
</style>

