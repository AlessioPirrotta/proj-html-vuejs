<script>
    import {store} from '../store'
    import AppServicesCard from '../components/AppServicesCard.vue'
    
export default{
    name:'AppServices',
    components:{
        AppServicesCard
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div id="serv" style="height: 900px;" class="d-flex">
        <div style="width: 40%; height: 100%; padding-left: 150px;" class="d-flex flex-column justify-content-center ">
            <h1 >We Are Here To <br> Make Your <span style="color:#00d9a6 ;">Website</span><br> Look More <span style="color:#00d9a6 ;">Elegant</span><br> And Stylish!</h1>
            <div class="d-flex gap-2 py-4">
                <div class="div_hr1"></div>
                <div class="div_hr2"></div>
            </div>
            <button style="width: 25%; black;" class=" d-flex justify-content-center align-items-centerp-3 mt-5 py-3 p-3 rounded-5 border-0">VIEW ALL</button>
        </div>
        <div style="width: 60%; height: 100%;" class="container d-flex flex-wrap justify-content-center align-items-center ">
            <div id="cardCont" class="row d-flex flex-wrap justify-content-center align-items-center">
                <AppServicesCard id="card" v-for="(item, index) in store.arrServices" 
                :key="index"
                :propsItem="item"/>
            </div>
        </div>

    </div>
</template>

<style lang="scss" setup>
#serv{
    h1{
        font-size: 60px;
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

    #cardCont{
        row-gap: 40px;
        column-gap: 30px;
    }

    #card {
    -webkit-box-shadow: 0px 1px 23px -1px rgba(0,0,0,0.4); 
    box-shadow: 0px 0px 30px -1px rgba(0,0,0,0.1);
   
}

#card:hover {
    box-shadow: 0px 0px 30px -1px rgba(0,0,0,0.1);
    animation-name: opa;
    animation-duration: 2s;
    color: white;
    box-shadow: 0 8px 16px 0 rgba(139, 223, 102, .1), 0 6px 20px 0 rgba(13, 214, 158, .5);
    background-image: linear-gradient(to right, #96E061, #05d9a4);
    #ino{
            display: block;
        }
        #ish{
            display: none;
        }
}

@keyframes opa {
    0% { opacity: .4; }
    100% { opacity: 1; }
}


   #ino{
        display: none;
   }

    #ish{
        background: linear-gradient(to bottom left, #96E061 , #05d9a4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

}

</style>