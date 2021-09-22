<template>
<div class="nov">

    <Navbar></Navbar>
    <!-- <button @click="getzw()">刷新笑话</button> -->
    <div class='box'>
        <div class="btn">
            <el-button @click="getData()" type="primary" round>刷新笑话</el-button>
        </div>
        <div class="ppp">
            <el-table
                :data="tableData"
                height="450"
                border
                style="width: 100%">
                <el-table-column
                prop="num"
                label="序号"
                width="80">
                </el-table-column>
                <el-table-column
                prop="joke"
                label="笑话"
                >
                </el-table-column>

            </el-table>
        </div>
    </div>
</div>
  
</template>

<script>
import Navbar from "../components/Navbar"
export default {
    name:"Novel",
    data() {
        return {
                       
            tableData:  [{
            num: '0',
            joke: '查看笑话请刷新'
            }]
        }
    },
    methods:{
        getData(){
            var that = this
            that.tableData =[]
            this
            .axios({
                method: 'get',
                // url:'http://localhost:8080/static/mock/data.json',
                url:'https://autumnfish.cn/api/joke/list?num=30',
            })
            .then(function(response){
                var jikes = response.data.jokes;
                for (var i = 0; i < jikes.length; i++) {
                    var date={num: '1',joke: '1'};
                    date.num=i+1;
                    date.joke=jikes[i];
                    console.log(date)
                    that.tableData.push(date);
                }
            })
            .catch(function(err){
                console.log(err);
            });
        }
    },
    components:{
        Navbar,
    }

}
</script>

<style scoped>
.nov{
    /* margin: 0 auto; */
    width: 1100px;
    border: solid px blue;
    margin-top: 51px;
    position: relative;
    /* overflow: hidden; */
}
.box{
    margin: 0 auto;
    width: 800px;
    padding-top: 10px;
    /* float: left; */
}
.btn{
    /* width: 550px; */
    /* margin: 0 auto; */
    text-align: center;
    margin: 10px;
}
.ppp{
    /* width: 550px; */
    width: 100%;
    /* padding: 15px; */
}

</style>