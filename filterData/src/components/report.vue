<script>
import {useRouter} from 'vue-router'
export default{
    data(){
        return{
            email:null,
            nama:null,
            dataReport:null
        }
    },
    setup(){
        const router=useRouter()
        return{router}
    },
    methods:{
        submitBtn(){
            if(this.email.value==='' || this.nama.value==='' || this.dataReport.value===''){
                alert('tolong masukkan inputan!!')
            }
            else{
                alert('berhasil')
                this.router.push('/home')
            }
        }
    }
}
</script>
<template>
    <div class="container">
        <h3 class="heading">your report</h3>
        <div class="formReport">
            <div class="col">
                <label for="email">email</label>
                <input type="email" v-model="email">
            </div>
            <div class="col">
                <label for="nama">nama</label>
                <input type="text" v-model="nama">
            </div>
            <div class="col">
                <label for="whats your report">whats your report</label>
                <textarea name="" id="" cols="30" rows="10" v-model="dataReport"></textarea>
            </div>
            <div class="col">
                <button @click="submitBtn">submit</button>
            </div>
        </div>
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
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
}
.heading{
    font-size: 1.5em;
    font-weight: 800;
    text-transform: capitalize;
}
.formReport{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
}
.col{
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.col input{
    width: 100%;
    padding: 6px 10px;
    cursor: pointer;  
     border: none;
    border-bottom: 1px solid gray;
    border-radius: 5px;
}
.col label{
    font-size:1.2em;
    font-weight: 500;
    text-transform: capitalize;
}
.col textarea{
    width: 100%;
    height: 200px;
}
button{
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    border:none;
    cursor: pointer;
    background-color: blue;
    color: white;
}
</style>