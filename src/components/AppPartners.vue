<script>
    import {store} from '../store'
    
export default{
    name:'AppPartners',
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div id="par" class="d-flex justify-content-center align-items-center" style="height: 400px;">
        <div style="width: 80%;" class="d-flex justify-content-between align-items-center" id="logos">
            <img src="../assets/images/client-1-2x.png" alt="">
            <img src="../assets/images/client-9-2x.png" alt="">
            <img src="../assets/images/client-7-2x.png" alt="">
            <img src="../assets/images/client-3-2x.png" alt="">
            <img src="../assets/images/client-4-2x.png" alt="">
            <img src="../assets/images/client-5-2x.png" alt="">
        </div>

    </div>
</template>

<style lang="scss" setup>
  #par{
    background-color: #f2f2f2;
    padding-top: 200px;
  }

</style>