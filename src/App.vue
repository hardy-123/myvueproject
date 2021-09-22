<template>
  <div id="app">

    <!-- 组件内容显示 -->
    <router-view v-if='true'></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style>
/* 全局清空默认样式 */
@import './assets/style';
/* 预留出要一直显示的导航栏位置 */
#app{
  /* margin-top: 51px; */
  border: solid 0px red;
}

</style>
