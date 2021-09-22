<template>
<div id="user2">
   <h1>个人信息</h1>
   {{id}}{{ids}}{{idds}}
   <h3>{{msg}}</h3>
   <!-- {{$route.params.id}} -->

</div>
  
</template>

<script>
export default {
    props:['id','ids','idds'],
    name:'Userssu',
    data() {
        return {
            msg:'待获取信息',
        }
    },
    // 过滤器,进入路由前执行
    beforeRouteEnter (to, from, next) {
        console.log('进入路由之前');
        next(
            vm => {vm.getData()}  //进入路由之前执行getdata
        );
    },
    // 过滤器,进入路由后执行
    beforeRouteLeave (to, from, next) {
        console.log('进入路由之后');
        next();
    },
    methods:{
        getData(){
            var that = this
            this
            .axios({
                method: 'get',
                // url:'http://localhost:8080/static/mock/data.json',
                url:'https://autumnfish.cn/api/joke/list?num=1',
            })
            .then(function(response){
                that.msg = response.data.jokes[0];
                console.log(response.data.jokes);
            })
            .catch(function(err){
                console.log(err);
            });
        },
        putData(){
            this
            .post("https://autumnfish.cn/api/user/reg",{username:"hardy"})
            .then(
            function(response){
                console.log(response);
            },function(err){
                console.log(err);
            }
            )

        }
    }

}
</script>

<style scoped>


</style>