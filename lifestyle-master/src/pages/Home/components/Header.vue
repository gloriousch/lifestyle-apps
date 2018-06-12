<template>
 <div class="header clearfix">
     <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
     </div>
     <div class="header-input">
        <span class="iconfont">&#xe632;</span>
         请输入搜索内容
     </div>
     <router-link to="/city">
        <div class="header-right">
            {{this.city}}
            <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
     </router-link>
     
 </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomeHeader",
  computed: {
    ...mapState(["city"])
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
    margin-bottom: $headerHeight;
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    line-height: $headerHeight;
    background: $bgColor;
    color: #000000;
    border-bottom: 0.02rem solid #d9d9d9;
    z-index: 999;

    .header-left {
        width: 0.64rem;
        float: left;

        .back-icon {
            text-align: center;
            font-size: 0.4rem;
        }
    }

    .header-input {
        flex: 1;
        height: 0.64rem;
        line-height: 0.64rem;
        margin-top: 0.12rem;
        margin-left: 0.2rem;
        padding-left: 0.2rem;
        background: #CDC9C9;
        border-radius: 0.1rem;
        color: #000000;
    }

    .header-right {
        min-width: 1.04rem;
        padding: 0 0.1rem;
        float: right;
        text-align: center;
        color: #000000;

        .arrow-icon {
            margin-left: -0.02rem;
            font-size: 0.24rem;
        }
    }
}

.clearfix:after {
    content: '';
    display: block;
    clear: both;
}
</style>
