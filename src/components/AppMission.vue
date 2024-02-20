<script>
    import {store} from '../store'
    
export default{
    name:'AppMission',
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div id="miss" style="height: 900px;" class="d-flex" >
        
        <div style="width: 60%; height: 100%;" class="d-flex flex-column justify-content-center position-relative">
            <figure class="position-relative">
                <img id="arch" width="70%" class="rounded-5" src="../assets/images/busy-architect-PYVKWM4-1024x872.jpg" alt="">
                <div id="fil" class="position-absolute rounded-5"></div>
            </figure>
            <img id="wo" width="70%" class="rounded-5 position-absolute" src="../assets/images/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" alt="">
        </div>
        <div style="width: 40%; height: 100%;" class="container d-flex flex-column justify-content-center ">
            <h1 >learn more<br> about our <br><span style="color:#00d9a6 ;">missions</span></h1>
            <div class="d-flex gap-2 py-4">
                <div class="div_hr1"></div>
                <div class="div_hr2"></div>
            </div>
            <p class="pt-1">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                    there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                    Semantics, a large language ocean.Separated they live in Bookmarksgrove.
                </p>
            <button style="width: 25%; black;" class=" d-flex justify-content-center align-items-centerp-3 mt-4 py-3 p-3 rounded-5 border-0">READ MORE</button>  
        </div>
    </div>
</template>

<style lang="scss" setup>
 #miss{
    background-color: #fafafa;
    h1{
        font-size: 60px;
    }

    button {
        color: white;
        background-image: linear-gradient(to right, #96E061 , #05d9a4);
        background-color: #a9aca6;
        box-shadow: 0 8px 16px 0 rgba(139, 223, 102, .1), 0 6px 20px 0 rgba(13, 214, 158, .5);
    }
    button:hover{
        background-color: black;
        background-image: none;
        transition: 2s;
    }
    .div_hr1{
      width: 10px;
      height: 5px;
      background-image: linear-gradient(to right, #96E061 , #05d9a4);
      border-radius: 10px;
    }
    .div_hr2{
      width: 55px;
      height: 5px;
      background-image: linear-gradient(to right, #96E061 , #05d9a4);
      border-radius: 10px;
    }

    p{
      width: 79%;
    }

    #fil{
        background-image: linear-gradient(to top right, #96E061 , #05d9a4);
        opacity: .8;
        z-index: 3;
        top: 0;
        left: 0;
        width: 70%;
        height: 100%;
    }


    #wo{
        top: 200px;
        left: 200px;
        z-index: 10;
        
    }



 }

</style>