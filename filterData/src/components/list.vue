<script>
import {apiData} from '../store/api'
import {useRouter} from 'vue-router'
export default{
    setup(){
        const apiStore=apiData()
        const router=useRouter()
        return{apiStore,router}
    },
    methods:{
        viewData(index){
            this.router.push(`/listdetail/${index}`)
        }
    },
    mounted(){
        this.apiStore.getApiData()
    },
}
</script>
<template>
    <div class="container">
        <div class="content">
            <h3 class="heading">list Makanan</h3>
        </div>
        <div class="grid">
            <div class="col"
            v-for="(data,index) in apiStore.daftarMenu"
            :key="index">
            <img :src="`${data.imgMakanan}`" alt="">
            <h1>{{data.namaMakanan}}</h1>
            <b>RP. {{data.harga}}</b>
            <p>{{ data.deskripsi }}</p>
            <button @click='viewData(index)'>view</button>
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
    width: 100%;
    height: 100%;
    display: flex;
    gap: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.search{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
}
.search input{
    width: 50%;
    padding: 10px 10px;
    background-color: white;
    border: none;
}
.search button{
    padding: 10px 10px;
    border: none;
    background-color: blue;
    color:white;
}
.heading{
    font-size: 2em;
    font-weight: 800;
    text-transform: capitalize;
    color: white;
    margin-bottom: 10px;
}
.content{
    margin-top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15vh;
    background-color: rgb(33, 33, 33);
}

.grid{
    width: 80%;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
    padding: 20px;
    background-color: white;
    grid-gap: 10px;
}

.col{
    display: flex;
    flex-direction: column;
    justify-content:left;
    align-items: left;
    gap: 8px;
    box-shadow: 0 0 2px 1px gray;
    padding: 6px 10px;
}
.col h1{
    font-size: 1.5em;
    margin-top: 10px
}
.col b{
    font-size: 1em;
}
.col p{
    font-size: .8em;
}
.col img{
    display: inline-block;
    width: 100%;
    height: 100px;
}
.col button{
    cursor:pointer;
}
.col button:hover{
    opacity: .8;
}
</style>