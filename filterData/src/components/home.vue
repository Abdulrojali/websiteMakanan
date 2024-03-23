<script>
import {useRouter} from 'vue-router'
export default{
    setup(){
        const router=useRouter()
        return{router}
    },
    methods:{
        pushToList(){
            this.router.push('/list')
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="heading">
            <div class="contentHeading">
                <div class="teks">
                    <h3>welcome to makan kuy website</h3>
                <p>this website to your get launch and order food</p>
                </div>
                <button @click="pushToList">order now</button>
            </div>
        </div>
        <div class="listAssesment">
            <h3 class="listheading">keunggulan</h3>
            <ul>
                <i class="fa-solid fa-truck-fast"></i>
                <i class="fa-solid fa-percent"></i>
                <i class="fa-regular fa-credit-card"></i>
            </ul>
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
}
.heading{
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(33, 33, 33);
    color: white;
}
.heading h3{
    font-size: 4em;
    font-weight: 800;
    text-transform: capitalize;
}
.heading p{
    font-size: 1em;
    font-weight: 250;
}
.teks{
    text-align: center;
    margin-bottom: 10px;
}
.heading button{
    padding: 6px 10px;
    background-color: blue;
    color: white;
    text-transform: capitalize;
    border:none;
    cursor:pointer;
    border-radius: 5px;
}
.heading button:hover{
    opacity: .8
}
.contentHeading{
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
}
.listAssesment{
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
}
.listheading{
    font-size: 2em;
    font-weight: 800;
    text-transform: capitalize;
    margin-bottom: 60px;
}
ul{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
i{
    font-size: 3em;
    background-color: black;
    color: white;
    padding: 20px;
    border-radius: 5px;
}
</style>