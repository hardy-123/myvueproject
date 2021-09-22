<template>
<div id="app">
    <!-- <p>欢迎来到Main页面</p> -->
    <div class="top">
        <div class="tip"><h2>Vue Blog</h2></div>
        <div class="title">
          <ul>
            <li v-for="(tag,index) in tags" :key="index">
              <router-link :to="tag[0]">
                <button>  
                  {{tag[1]}}
                </button>
              </router-link>
            </li>
            <li>
              <a href="../../static/blog/index.html">
                <button>
                  Jq-Blog
                </button>
              </a>
            </li>
          </ul>
        </div>  
      </div>

</div>
  
</template>

<script>
export default {
    name:"Navbar",
    data() {
      return {
        tags:[
          // 必须小写
        //   ['helloworld','Hello'],
          ['/','我的主页'],
          ['mypics','我的图库'],
          ['novel','笑话大全'],
          ['study','layui'],
          ['vmain/admin','超管信息列表'],
          ['login','登录'],
          // ['vmain','myjs']
          ]
      };
    }
    
}
</script>

<style scoped>
@import '../assets/style';
#app {
  border: solid 0px red;
}
#app>.top{
  width: 100%;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  border: solid 0px green;
  background-color: #103858;
  color: #A3B2A8;
  z-index:999
}
#app>.top>.tip{
  float: left;
  padding: 3px 5px;
  margin-right: 30px;
  border: solid 0px blueviolet;
}
#app>.top>.title{
  width: 750px;
  position: relative;
  top: 10px;
  border: solid 0px blueviolet;
  float: left;
}
#app>.top>.title>ul>li:not(li:last-child){
  height: 20px;
  border: solid 0px red;
  float: left;
}
#app>.top>.title>ul>li:last-child{
  float: right;
}
#app>.top>.title>ul>li button{
  border: 0;
  padding: 5px 10px;
  margin: 0px 10px;
  color: #A3B2A8;
  background-color: #103858;
  line-height: 50%;
}
</style>