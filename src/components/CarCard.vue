<template>
<div id="card" :style="{width:wid}">
  <el-carousel :interval="2000" type="card" :height="hig">
    <el-carousel-item v-for="(img,item) in imgs" :key="item"
    :style="{backgroundImage: 'url('+img+')'}">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</div>
</template>

<script>
export default {
    name:'CarCard',
        props:{
        imgs: String,
        hig: String,
        wid: String
    }

}
</script>

<style scoped>
  #card{
      /* width: 500px; */
    margin: 5px;
    border: solid 0px red;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

    .el-carousel__item{
        background-size: 100%;
        background-repeat: no-repeat;
    }
/*   
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  } */
</style>
