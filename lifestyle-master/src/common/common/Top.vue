<template>
    <div class="com-top" :style="{background:$store.state.bgColor}">
        <span class="com-top-btn">首页</span>
        <h2>
           {{$store.state.title}}
        </h2>
    </div>
</template>

<script>
    export default {
         props  : ['title']
     }
</script>

<style scoped>
    .com-top{
        height: 1rem;
        background:rgb(29, 132, 216); 
        position: fixed;
        top:0;
        left: 0;
        width: 100%;
    }
    .com-top-btn{
        color: rgb(143, 137, 137);
        position: absolute;
        left:0.2rem;
        top:50%;
        transform: translateY(-50%);
    }
    .com-top h2{
        line-height: 1rem;
        text-align: center;
        color: rgb(54, 52, 52);
    }
</style>