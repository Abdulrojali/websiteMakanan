import {defineStore} from 'pinia'

export const createAccount= defineStore('createAccount',{
    state:()=>({
        dataCreateAccount:[],
        statuscreateAccount:false
    }),
    actions:{
        createAccountHandler(first,last,user,pass,email){
            if(first==='' || last==='' || user==='' || pass==='' || email===''){
                console.log('tolong masukkan input!!')
                this.statuscreateAccount=false
            }
            else{
                const newAccount={
                    firstName:first,
                    lastName:last,
                    username:user,
                    password:pass,
                    mail:email
                }
                this.dataCreateAccount.push(newAccount)
                this.statuscreateAccount=true
            }

        }

    }
})