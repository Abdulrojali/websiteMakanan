import {createRouter,createWebHashHistory} from 'vue-router'
import loginmenu from '../components/loginmenu.vue'
import dashboard from '../components/dashboard.vue'


// child dashboard
import home from '../components/home.vue'
import list from '../components/list.vue'
import report from '../components/report.vue'
import pendingTransaksi from '../components/pendingTransaksi.vue'
import createAccount from '../components/createAccount.vue'


import listdetail from '../components/listdetail.vue'
const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        // {
        //     path:'/',
        //     name:'home',
        //     component:layout
        // },
        // {
        //     path:'/list',
        //     name:'listProduct',
        //     component:listProducct
        // }
        {
            path:'/',
            name:'loginmenu',
            component:loginmenu
        },
        {
            path:'/dashboard',
            name:'dashboard',
            children:[
                {
                    path:'/home',
                    name:'home',
                    component:home
                },
                {
                    path:'/list',
                    name:'list',
                    component:list
                },
                {
                    path:'/listdetail/:id',
                        name:'listdetail',
                        component:listdetail
                },
                {
                    path:'/pendingTransaksi',
                    name:'pendingTransaksi',
                    component:pendingTransaksi
                },
                {
                        path:'/report',
                        name:'report',
                        component:report
                }
            ],
            component:dashboard
        },
        {
            path:'/createAccount',
            name:'createAccount',
            component:createAccount
        }
    ]
})

export default router