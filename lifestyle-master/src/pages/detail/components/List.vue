<template>
    <div>
        <div class="item" v-for="(item,index) of list" :key="index">
            <div class="item-title border-bottom">
                <!-- <span class="item-title-icon"></span> -->
                <span></span>
                {{item.title}}
            </div>
            <div v-if="item.children" class="item-children">
                <list :list="item.children"></list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "List",
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
.item-title-icon {
    position: relative;
    left: 0.06rem;
    top: 0rem;
    display: inline-block;
    position: absolute;
    width: 0.36rem;
    height: 0.36rem;
    top: 0.26rem;
    left: 0.2rem;
    background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat; // s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: 0.1rem;
    background-size: 0.4rem 3rem;
}

.item-title {
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.32rem;
    padding: 0 0.6rem;
}

.item-children {
    padding: 0 0.2rem;
}
</style>
