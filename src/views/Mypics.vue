<template>
  <div id="pics">
    <Navbar></Navbar>
    <div v-for="it1 in 3" class="p1" :key="it1">
        <CarHover :imgs='p1msg' :hig='p1hig' :wid='p1wid'></CarHover>
    </div>
    <div v-for="it2 in 3" class="p2" :key="it2">
        <CarCard :imgs='p2msg' :hig='p2hig' :wid='p2wid'></CarCard>
    </div>

  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import CarHover from "../components/CarHover";
import CarCard from "../components/CarCard";
export default {
    name:'Mypics',
    data(){
        return {
            p1msg:['../../static/imgs/f1.jpg',
            '../../static/imgs/f2.jpg',
            '../../static/imgs/f3.jpg',
            '../../static/imgs/f4.jpg',
            '../../static/imgs/f5.jpg'],
            p1hig:'180px',
            p1wid:'300px',
            p2msg:['../../static/imgs/f11.jpg',
            '../../static/imgs/f12.jpg',
            '../../static/imgs/f13.jpg',
            '../../static/imgs/f14.jpg',
            '../../static/imgs/f15.jpg'],
            p2hig:'180px',
            p2wid:'650px',
           
        }
    },
    components:{
        Navbar,CarHover,CarCard
    }
}
</script>

<style scoped>
/* @import '../assets/style'; */
#pics{
    margin: 0 auto;
    overflow: hidden;
    width: 1100px;
    /* height: 400px; */
    border: solid 0px blue;
    margin-top: 51px;
}
#pics>.p1,#pics>.p2{
    /* width: 600px; */
    /* height: 400px; */
    float: left;
    margin-right: 30px;
    border: solid 0px red;
}

</style>