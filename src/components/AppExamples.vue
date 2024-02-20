<script>
    import {store} from '../store'
    import AppExamplesCard from '../components/AppExamplesCard.vue'
    
export default{
    name:'AppExamples',
    components:{
        AppExamplesCard
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div style="height: 1500px;">
    <div id="up">
        <div style="width: 100%;" class="d-flex">
        <div style="width: 50%;">
            <div class="d-flex gap-2 py-4">
                <div class="div_hr1"></div>
                <div class="div_hr2"></div>
            </div>
            <h1 >Our recent<span style="color:#00d9a6 ;"> web designs</span> &<br> some examples of<br>past<span style="color:#00d9a6 ;"> projects</span></h1>
            <div class="d-flex gap-2 py-4">
                <div class="div_hr1"></div>
                <div class="div_hr2"></div>
            </div>
        </div>
        <div style="width: 50%;" class="d-flex align-items-end">
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.Separated they live in Bookmarksgrove.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
        </div>

    </div>
</div>
<div id="down">
    <div class="row d-flex flex-row ">
        <AppExamplesCard v-for="(item, index) in store.arrExamples" 
        :key="index"
        :propsItem="item"/>
    </div>
</div>
<div id="btn" class="d-flex justify-content-center align-items-center">
 <button style="width: 10%; black;" class=" d-flex justify-content-center align-items-centerp-3 mt-4 py-3 p-3 rounded-5 border-0">READ MORE</button>  
</div>  
    </div>

</template>

<style lang="scss" setup>
    #up{
        margin-top: 200px;
        padding-inline: 150px;
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

    }

    #down{
        padding-block: 100px;
        padding-inline: 150px;
        h1{
           font-size: 60px;
       }

       img{
        border-radius: 5px;
        
       }
       #card{
        width: calc(100% / 4 - 5px);
        padding: 0;
       }

       .row{
        gap: 5px;
       }

       h3{
        bottom: 0;
       }

   

    }


    #btn{
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
   
    }

  


</style>
