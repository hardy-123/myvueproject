import Vue from 'vue'
import Router from 'vue-router'

// 导入文件
import HelloWorld from '../components/HelloWorld'
import Main from '../views/Main'
import Mypics from '../views/Mypics'
import Novel from '../views/Novel'
import Study from '../views/Study'

// import Navbar from '../components/Navbar'
import CarLazy from '../components/CarLazy'

import Login from '../views/Login'
import Vmain from '../views/Vmain'
import Notfound from '../views/Notfound'
import Userssu from '../views/us/Userssu'
import Userlist from '../views/us/Userlist'





// 安装路由,显示声明使用 Router
Vue.use(Router)

// 配置导出路由
export default new Router(
    {
        // history,hash 控制url有没有 #
        mode:"history",
        routes:[
            {
                // 路由路径
                path:'/HelloWorld',
                name:'HelloWorld',
                // 路由组件
                component:HelloWorld
            },
            {
                // 路由路径
                path:'/',
                name:'Main',
                // 路由组件
                component:Main,  
            },
            {
                // 重定向
                path:'/main',
                redirect:'/'  
            },
            {
                path:'/Mypics',
                name:'Mypics',
                component:Mypics
            },
            {
                path:'/Novel',
                name:'Novel',
                component:Novel
            },
            {
                path:'/Login',
                name:'Login',
                component:Login
            },
            {
                path:'/Study',
                name:'Study',
                component:Study
            },
            // 导航栏路由
            // {
            //     path:'/Navbar',
            //     name:'Navbar',
            //     component:Navbar
            // },
            // 导航栏路由
            {
                path:'/CarLazy',
                name:'CarLazy',
                component:CarLazy
            },
            {
                path:'/Vmain/:name',
                props:true,
                name:'Vmain',
                component:Vmain,
                // 子路由
                children:[
                    {
                        // 参数传值
                        path:'/us/Userssu:id,ids,idds',
                        name:'Userssu',
                        component:Userssu,
                        props:true
                    },
                    {
                        path:'/us/Userlist',
                        name:'Userlist',
                        component:Userlist
                    }
                ]
            },
            {
                path:'*',
                name:'Notfound',
                component:Notfound
            }
            
            
        ]
    }
)