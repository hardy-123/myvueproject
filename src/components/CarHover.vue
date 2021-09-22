<template>
    <div class="block" :style="{width:wid}">
        <span class="demonstration">(element模板,背景)默认 Hover 指示器触发</span>
        <el-carousel :height="hig">
            <el-carousel-item 
            v-for="(img,item) in imgs" :key="item"
            :style="{backgroundImage: 'url('+img+')'}"
            >
                <h3 class="small">{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name:'CarHover',
    // data(){
    //     return {
    //         imgs:['../../static/imgs/f1.jpg',
    //         '../../static/imgs/f2.jpg',
    //         '../../static/imgs/f3.jpg',
    //         '../../static/imgs/f4.jpg',
    //         '../../static/imgs/f5.jpg'],
           
    //     }
    // },
    props:{
        imgs: String,
        hig: String,
        wid: String
    }

}
</script>

<style scoped>
.block{
    /* width: 500px; */
    margin: 10px;
    border: solid 0px red;
}

.el-carousel__item h3 {
    color: red;
    font-size: 14px;
    opacity: 0.3;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item {
      background-size: 100%;
      /* 图片平铺 */
      background-repeat: no-repeat;
  }
</style>