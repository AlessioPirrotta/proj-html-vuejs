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
<div id="client" style="height: 800px;" >
    <div id="filt" style="height: 100%;">
         <div style="height: 100%;" class="d-flex flex-column justify-content-center align-items-center gap-4 pt-5">
            <i style="font-size: 60px;" class="fa-solid fa-quote-left"></i>
            <p style="width: 55%;" class="text-center">When it comes to barbequing, there are two main schools of thought for the techniques that you can use. Freshly scrambled eggs with applewood smoked bacon - are amazing!</p>
            <figure style="width: 5%;" class=" d-flex justify-content-center rounded-circle overflow-hidden mt-4">
                <img width="" src="../assets/images/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" class="" alt="">
            </figure>
            <h2 style="font-size: 30px ; font-weight:400;">LISSA DURBIN</h2>
            <span style="font-weight: bold; font-size: 20px;">Client</span>
         </div>
    </div>
</div>
</template>

<style lang="scss" setup>
#client{
    background-image: url(../assets/images/four-businesspeople-in-a-boardroom-with-paperwork-PC4V8H4.jpg);
    background-position: center;
    #filt{
        background-color: rgba(38, 36, 36, 0.9);
        color: white;
    }
    h1{
        font-size: 60px;
    }
    
    i{
        color: #00d9a6

    }

    p{
        
        font-size: 30px;
        font-style: italic;
        font-weight: 100;
    }

    figure{
        aspect-ratio: 1;
        border: 3px solid white;
    }

    h2{
        color: #00d9a6
    }

    span{
        opacity: .8;
    }
}

</style>