<script>
import {useRouter} from 'vue-router'
export default{
    setup(){
        const navigasiLink=[
            {path:'/home',name:'home'},
            {path:'/list',name:'list'},
            {path:'/pendingTransaksi',name:'pending Transaksi'},
            {path:'/report',name:'report'},
        ]
        const router=useRouter()
        return{navigasiLink,router}
    },
    methods:{
        pushTO(path){
            this.router.push(path)
        },
        logout(){
            this.router.push('/')
        }
    }
}
</script>
<template>
    <nav>
        <h3 class="heading">makan Kuy</h3>
        <ul>
            <li v-for="(data,index) in navigasiLink" :key="index" @click="pushTO(data.path)">{{data.name}}</li>
        </ul>
        <button @click="logout">logout</button>
    </nav>
</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
nav{
    width:100%;
    padding: 15px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
h3{
    font-size: 1.3em;
    font-weight: 800;
    text-transform: capitalize;
}
ul{
    display: flex;
    list-style-type: none;
    gap: 30px;
}
li{
    cursor: pointer;
}
li:hover{
    opacity: .8;
}
button{
    padding: 6px 10px;
    background-color: blue;
    color: white;
    text-transform: capitalize;
    border:none;
    cursor:pointer;
    border-radius: 5px;
}
button:hover{
    opacity: .8;
}
</style>