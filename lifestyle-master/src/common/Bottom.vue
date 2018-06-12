<template>
    <ul class="com-bottom" :style="{background:$store.state.bgColor}">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/find">发现</router-link></li>
        <li><router-link to="/MovieList">影音</router-link></li>
        <li><router-link to="/mine">我的</router-link></li>
    </ul>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.com-bottom {
    height: 0.86rem;
    background: #fafafa;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    border-top: 0.02rem solid #d9d9d9;
}

.com-bottom li {
    flex-grow: 1;
    line-height: 0.86rem;
    text-align: center;
}

.com-bottom li a {
    color: #CDC5BF;
    outline: none;
}

.com-bottom li a.router-link-exact-active {
    color: black;
}
</style>