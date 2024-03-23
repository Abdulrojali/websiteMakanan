<script>
import { useRouter } from 'vue-router'
import {createAccount} from '../store/dataAccount.js'
export default{
    data(){
        return{
            username:null,
            password:null,
            email:null,
            firstname:null,
            lastname:null
        }
    },
    setup(){
        const accountStore=createAccount()
        const router=useRouter()
        return{accountStore,router}
    },
    methods:{
        handlerBtnCreateAccount(){
            if(accountStore.statuscreateAccount=true){
                alert('sukses create Account')
                this.router.push('/')
            }
            else{
                window.location.reload()
            }
        },
        back(){
            this.router.push('/')
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="formCreateAccount">
            <h3 class="heading">create Account</h3>
            <div class="rows">
                <div class="rows1">
                    <label for="firstname">firstname</label>
                    <input type="text" placeholder="firstname" v-model="firstname">
                </div>
                <div class="rows2">
                    <label for="lastname">lastname</label>
                    <input type="text" placeholder="lastname" v-model="lastname">
                </div>
            </div>
            <div class="col">
                <label for="username">username</label>
                <input type="text" placeholder="username" v-model="username">
            </div>
            <div class="col">
                <label for="password">password</label>
                <input type="password" placeholder="password" v-model="password">
            </div>
            <div class="col">
                <label for="email">email</label>
                <input type="email" placeholder="email" v-model="email">
            </div>
            <button @click="handlerBtnCreateAccount">create Account</button>
            <hr>
            <p>or create Account with</p>
            <div class="menuIcon">
              <i id="icon" class="fa-brands fa-facebook-f"></i>
               <i id="icon" class="fa-brands fa-twitter"></i>
            </div>
            <i id="back" class="fa-solid fa-arrow-left" @click='back'></i>
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
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.heading{
    text-align: center;
    margin-bottom: 30px;
    font-size: 1.5em;
    font-weight: 300;
    text-transform: capitalize;
}
.formCreateAccount{
    width:50%;
    display: flex;
    flex-direction: column;
    gap: 15px;    
}
.rows{
    display: flex;
    width: 100%;
    gap: 20px;
}
.rows1,.rows2{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.rows1 label,.rows2 label{
    font-size: .8em;
    font-weight: 250;
}
.rows1 input,.rows2 input{
    width: 100%;
    padding: 3px 10px;
    cursor: pointer;
}
.col {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.col input{
    width: 100%;
    padding: 3px 10px;
    cursor: pointer;
}
.col label{
    font-size: .8em;
    font-weight: 250;
}
button{
    margin: auto;
    margin-top: 20px;
    display: inline-block;
    width: 150px;
    height: 30px;
    background-color: blue;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 25px;
    font-size: .9em;
    text-transform: capitalize;
}
button:hover{
    opacity: .8;
}
p{
    margin-top: 5px;
    text-align: center;
    font-size: 1em;
    font-weight: 250;
}
.menuIcon{
    width: 100%;
    display: flex;
    justify-content:space-around;
    align-items: center;
    margin-top: 20px;
}
#icon{
    display: inline-block;
    padding: 9px 60px;
    color: blue;
    border: 1px solid blue;
    cursor: pointer;
    border-radius: 25px;
    font-size: .9em;
    text-transform: capitalize;
}
#back{
    position: absolute;
    top:30px;
    left: 40px;
    font-size: 2em;
    cursor: pointer;
}
#back:hover{
    opacity: .8;
}
</style>