<script>
    import {store} from '../store'
    
export default{
    name:'AppFooter',
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <footer class="d-flex justify-content-center align-items-center" style="height: 120px;">
        <div style="height: 100%; width: 85%;" id="foot" class="d-flex justify-content-between align-items-center">
            <span style="font-size: 13px;">© 2024 PHLOX BUSINESS THEME.</span>
            <div class="d-flex gap-4 ">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-pinterest-p"></i>
            </div>
        </div>

    </footer>
</template>

<style lang="scss" setup>
footer{
    color: #939393;
 background-image: linear-gradient(to right, #545454, #000000);;
}

 

</style>