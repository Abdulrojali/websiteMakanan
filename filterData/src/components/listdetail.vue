<script>
import {useRoute,useRouter} from 'vue-router'
import { apiData } from '../store/api'

export default{
    data(){
        return{
            jumlah:null,
            keterangan:null
        }
    },
    setup(){
        const route=useRoute().params.id
        const router=useRouter()
        const apiStore=apiData()
        const menu=apiStore.daftarMenu[route]
        return{route,router,apiStore,menu}
    },
    methods:{
        backList(){
            this.router.push('/list')
        },
        orderMakanan(){
            if(this.keterangan==='' || this.jumlah===''){
                alert('tolong masukkan isi keterangan dan jumlahnya!!')
            }
            else{
                const makanan={
                img:this.menu.imgMakanan,
                harga:this.menu.harga,
                jumlahMakanan:this.jumlah,
                keteranganMakanan:this.keterangan
            }
            this.apiStore.getDataOrder(makanan)
            this.router.push('/pendingTransaksi')
            }

        }
    }
}
</script>
<template>
    <div class="container">
        <div class="list">
            <img :src="`${menu.imgMakanan}`" alt="">
            <div class="deskripsi">
                <h3>{{ menu.namaMakanan }}</h3>
                <p>RP.{{ menu.harga }}</p>
                <input type="text" placeholder="jumlah yang ingin di pesan" v-model="jumlah">
                <input type="text" placeholder="keterangan" v-model="keterangan">
                <button @click="orderMakanan">order</button>
            </div>
        </div>
        <i @click="backList" class="fa-solid fa-arrow-left"></i>
    </div>
</template>

<style scoped>
*{
    padding: 0;
    margin:0;
    box-sizing: border-box;
}
.container{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content:center;
    align-items: center;
}
i{
    position: absolute;
    top:50px;
    left: 50px;
    cursor: pointer;
    font-size: 2em;
}
.list{
    width: 70%;
    height: 50vh;
    display: grid;
    gap: 20px;
    grid-template-columns: 50% 50%;
    background-color: white;
}
.list img{
    display: inline-block;
    object-fit: cover;
    width: 100%;
    height:50vh;
    border-radius: 5px;
}
.deskripsi{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 30px;
}
.deskripsi h3{
    font-size: 2em;
    font-weight: 800;
    text-transform: capitalize;
}
.deskripsi p{
    font-size: 1em;
    font-weight: 400;
}
.deskripsi input{
    width: 100%;
    padding: 10px 20px;
    border: transparent;
}
.deskripsi button{
    display: inline-block;
    width: 70%;
    height: 30px;
    background-color: blue;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 5px;
}
.deskripsi button:hover{
    opacity: .8;
}
</style>