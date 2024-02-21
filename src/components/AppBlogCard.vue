<script>
import {store} from '../store'

export default{
    name:'AppBlogCard',
    data() {
        return {
            store,
            isActive: false
        }
    },
    props: ['propsItem',
                
        ],
}
</script>

<template>
    <div   class="col-4 position-relative" @mouseover="isActive = true" @mouseout="isActive = false">
            <img id="shad" width="100%" class="rounded-4" :src="`../src/assets/images/${propsItem.photo}`" alt="">
            <div >
                <div id="cardB" class="position-absolute rounded-4" :class="{ active: isActive }">
                    <p>{{propsItem.text}}</p>
                    <h3 style="font-size: 25px;"><i style="font-size: 10px;" class="fa-solid fa-circle"></i>{{propsItem.name}}</h3>
                </div>
                <div id="fil" class="position-absolute rounded-2"></div>
            </div>
    </div>
</template>

<style lang="scss" setup>
#cardB{
        padding-top: 40px;
        padding-left: 30px;
        padding-bottom: 20px;
        width: 80%;
        background-color: white;
        top: 100%; 
        left: 50%; 
        transform: translate(-50%, -50%); 
    }

    #shad{
    -webkit-box-shadow: 0px 1px 23px -1px rgba(0,0,0,0.4); 
    box-shadow: 0px 0px 30px -1px rgba(0,0,0,0.3);
}

#cardB{
    -webkit-box-shadow: 0px 1px 23px -1px rgba(0,0,0,0.4); 
    box-shadow: 0px 0px 30px -1px rgba(0,0,0,0.3);
}
</style>