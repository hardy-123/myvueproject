<template>
<div id="app">
    <!-- <p>欢迎来到Main页面</p> -->
      <Navbar></Navbar>
      <img src="../../static/imgs/f13.jpg" alt="">
</div>
  
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
    name:"Main",
    components:{
        Navbar,
    }   
}
</script>

<style scoped>
#app{
    border: solid 0px red;
    width: 100%;
}
#app>img{
    width: 100%;
    position: fixed;
}

</style>