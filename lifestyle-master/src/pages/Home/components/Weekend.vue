<template>
<div>
  <div class="title">
      -热门推荐-
  </div>
  <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
          <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl" :alt="item.title">
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
          </div>
      </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props: {
    weekendList: Array
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.title {
  line-height: 0.8rem;
  background: #eeeeee;
  text-indent: 0.2rem;
  text-align: center;
}

.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 37.09%;

  .item-img {
    width: 100%;
  }
}

.item-info {
  flex: 1;
  padding: 0.1rem;
  min-width: 0;

  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    ellipsis();
  }

  .item-desc {
    line-height: 0.4rem;
    color: #cccccc;
    ellipsis();
  }

  .item-button {
    line-height: 0.44rem;
    margin-top: 0.16rem;
    background: #ff9300;
    padding: 0 0.1rem;
    border-radius: 0.06rem;
    color: #ffffff;
  }
}
</style>
