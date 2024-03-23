import {defineStore} from 'pinia'

export const loginData=defineStore('loginData',{
    state:()=>{
        return{
            statusLogin:false
        }
    },
    actions:{
        loginValidate(user,pass){
            if(user==='admin' && pass==='123'){
                this.statusLogin=true
            }
            else{
                this.statusLogin=false
            }
        }  
    },
})