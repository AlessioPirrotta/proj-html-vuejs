<script>
    import {store} from '../store'
    
export default{
    name:'AppHeader',
    data() {
        return {
            store
        }
    },
}
</script>

<template>
<header>
    <div id="fix" style="height: 100px;" class="d-flex justify-content-around align-items-center shadow p-3 mb-5 bg-body-tertiary rounded">
        <div>
            <img src="../assets/images/cropped-Group-39-2x.png" alt="">
        </div>
        <div class="d-flex gap-3">
            <span>HOME</span>
            <span>ABOUT</span>
            <span>SERVICES</span>
            <span>SHOWCASE</span>
            <span>BLOG</span>
            <span>CONTACT</span>
        </div>
        <div class="d-flex align-items-center gap-5">
            <button class="p-3 px-5 rounded-5 border-0">PURCHASE</button>
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>    
    </div>
    

</header>
</template>

<style lang="scss" setup>
   #fix{
    position: fixed;
    width: 100%;
   }
    span{
        font-weight:500 ;
    }
    button {
        color: white;
  background-image: linear-gradient(to right, #96E061 , #05d9a4);
}
</style>