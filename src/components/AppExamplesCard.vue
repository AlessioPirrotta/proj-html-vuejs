<script>
import {store} from '../store'

export default{
    name:'AppExamplesCard',
    data() {
        return {
            store
        }
    },
    props: ['propsItem',
                
        ],
}
</script>

<template>
    <div id="card" class="col-4 position-relative" >
        <img class="" width="100%" :src="`../src/assets/images/${propsItem.photo}`" alt="">
        <div class="position-absolute px-5 pb-5">
            <h3>{{propsItem.name}}</h3>
            <p class="fw-semibold">{{propsItem.text}}</p>  
        </div>
        <div id="fil" class="position-absolute rounded-2"></div>
    </div>
</template>

<style lang="scss" setup>
    .position-absolute{
        display: none;
        color: white;
        bottom: 0;
        z-index: 10;
       }

       #fil{
        background-image: linear-gradient(to top right, #96E061 , #05d9a4);
        opacity: .8;
        z-index: 3;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    #card:hover{
        .position-absolute{
            display: block;
        }
        animation-name: opa;
        animation-duration: 2s;
        box-shadow: 0 8px 16px 0 rgba(139, 223, 102, .1), 0 6px 20px 0 rgba(13, 214, 158, .5);
    
    }

    @keyframes opa {
    0% { opacity: .3; }
    100% { opacity: 1; }
}
</style>