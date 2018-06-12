<template>
  <div class="header">
      个人中心
      <router-link to="/">
        <div class="iconfont header-back">&#xe624;</div>
      </router-link>
  </div>
</template>
<script>
export default {
  name: "MovieHeader"
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  position: relative;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #000000;
  font-size: 0.32rem;
  background: $bgColor;
  border-bottom: 0.02rem solid #d9d9d9;

  .header-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    color: #000000;
  }
}
</style>

