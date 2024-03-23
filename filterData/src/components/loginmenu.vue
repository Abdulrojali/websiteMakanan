<script>
import {loginData} from '../store/loginData'
import {useRouter} from 'vue-router'
export default{
    data(){
        return{
            username:null,
            password:null
        }
    },
    setup(){
        const loginStore=loginData()
        const router=useRouter()
        return{loginStore,router}
    },
    methods:{
        loginHandler(){
            this.loginStore.loginValidate(this.username,this.password)
            console.log(this.loginStore.statusLogin)
            if(this.loginStore.statusLogin===true){
                this.router.push('/home')
            }else{
                console.log('username dan password tidak ditemukkan')
                this.router.push('/')
            }
        },
        createAccount(){
            this.router.push('/createAccount')
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="formLogin">
            <h3>login menu</h3>
            <input type="text" placeholder="username" v-model="username">
            <input type="password" placeholder="password" v-model="password">
            <button @click="loginHandler">login</button>
            <p>belum punya account ? <a href="" @click.prevent='createAccount()'>create Account</a></p>
        </div>
    </div>
    </template>
<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box
}
.container{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(33, 33, 33);
}
h3{
    margin-bottom: 15px;
    text-align: center;
    text-transform: capitalize;
}
.formLogin{
    padding: 50px;
    background-color: white;
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: none;
    border-radius: 5px;
}
.formLogin input{
    width: 100%;
    padding: 6px 10px;
    border: none;
    border-bottom: 1px solid gray;
}
.formLogin button{
    padding: 6px 10px;
    background-color: blue;
    color:white;
    cursor: pointer;
    border: none;
    }
.formLogin button:hover{
    opacity:.8;
}
p{
    margin-top: 10px;
    font-size: .8em;
    font: 400 sans-serif;
}
</style>