<script>
import navigasi from './navigasi.vue'
import {RouterView} from 'vue-router'
export default{
    components:{
        navigasi
    }
}
</script>
<template>
   <navigasi></navigasi>
   <RouterView></RouterView>
</template>