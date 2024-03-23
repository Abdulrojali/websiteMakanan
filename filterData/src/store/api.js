import {defineStore} from 'pinia'
import axios from 'axios'
export const apiData=defineStore('apiData',{
    state:()=>({
        url:'http://localhost:3000/daftarMenu',
        daftarMenu:null,
        dataKeranjang:null,
        replaceFood:null
    }),
    actions:{
        getApiData(){
            fetch(this.url)
            .then(Res=>Res.json())
            .then(data=>this.daftarMenu=data)
            .catch(err=>console.log(err))
        },
        getDataOrder(data){
            axios.post('http://localhost:3000/keranjang',data)
        },
        getDataOrderFetching(){
            fetch('http://localhost:3000/keranjang')
            .then(res=>res.json())
            .then(data=>this.dataKeranjang=data)
            .catch(err=>console.log(err))
        },
        getDeleteDataKeranjang(index){
            this.dataKeranjang.splice(index,1)
        },
        deleteAllDataKeranjang(){
            this.replaceFood=this.dataKeranjang
            this.dataKeranjang=[]
        },
        replaceAllDataKeranjang(){
            return this.dataKeranjang=this.replaceFood
        }
    }
})