<script>
import {apiData} from '../store/api'
export default{
    setup(){
        const apiStore=apiData()
        return{apiStore}
    },
    methods:{
        deleteMenu(index){
          this.apiStore.getDeleteDataKeranjang(index)
        },
        deleteAll(){
            this.apiStore.deleteAllDataKeranjang()
        },
        replaceAll(){
            this.apiStore.replaceAllDataKeranjang()
        }
    },
    mounted(){
        this.apiStore.getDataOrderFetching()
    }
}
</script>
<template>
    <div class="container">
        <h3 class="heading">food order</h3>
        <div class="menuFilter">
            <h3>menu filter</h3>
            <div class="btn">
                <button @click="deleteAll">deleteAll</button>
                <button @click="replaceAll">replace</button>
            </div>
        </div>
        <div class="flex">
            <div class="col"
    v-for="(data,index) in apiStore.dataKeranjang" :key="index">
    <img :src="`${data.img}`" alt="">
    <div class="teks">
        <b>harga : RP .{{ data.harga }}</b>
    <b>jumlah :{{data.jumlah}}</b>
    <p>keterangan :{{ data.keteranganMakanan }}</p>
    <button>buy</button>
    <button @click="deleteMenu(index)">delete</button>
    </div>
    </div>
        </div>

    </div>
</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.container{
    margin-top: 20px;
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
}
.heading{
    width: 100%;
    height: 15vh;
    line-height: 15vh;
    color: white;
    text-align: center;
    background-color: rgb(33, 33, 33);
    font-size: 2em;
    font-weight: 800;
    text-transform: capitalize;
}
.flex{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    }
    .col{
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 30px;
        align-items: center;
       box-shadow: 0 0 2px 1px gray;
       border-radius: 5px;
    }
    .col img{
        width:80%;
        height:200px;
        object-fit: fill;
    }
    .teks{
        width: 50%;
        padding: 0 20px;
        display: flex;
        flex-direction: column;  
        gap: 15px;      
}
.teks b{
    font-size:1.1em;
}
.teks button{
    padding: 6px 10px;
    background-color: blue;
    color: white;
    text-transform: capitalize;
    border:none;
    cursor:pointer;
    border-radius: 5px;
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
.menuFilter{
    display: flex;
    flex-direction: column;
    gap: 15px;
}
h3{
    text-align: center;
    text-transform: capitalize;
    font-weight: 150;
}
.btn{
    display: flex;
    gap: 30px;
}
</style>