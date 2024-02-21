<script>
import { store } from '../store';
import AppBlogCard from '../components/AppBlogCard.vue';

export default {
  name: 'AppBlog',
  components: {
    AppBlogCard
  },
  data() {
    return {
      store
    };
  },
}
</script>

<template>
<div id="blog1" style="height: 1400px;" class="d-flex flex-column align-items-center position-relative" >
    <h1 >Latest News & our <span style="color:#00d9a6 ;">Blog</span></h1>
    <div class="d-flex gap-2 py-4">
        <div class="div_hr1"></div>
        <div class="div_hr2"></div>
    </div>
    <div class="row d-flex flex-wrap">
       <AppBlogCard id="cardA" v-for="(item, index) in store.arrBlog" 
                    :key="index"
                    :propsItem="item"/>
    </div>
    <button id="btn" style="width: 12%; black;" class=" d-flex justify-content-center align-items-centerp-3  py-3 p-3 rounded-5 border-0">VIEW ALL POST</button>
    <div style="width: 100%;" id="blog2" class="d-flex position-absolute">
        <div id="ca1" class="col-6 rounded-4 d-flex flex-column justify-content-center align-items-center gap-4">
            <p style="font-size: 20px;">Are you Ready?</p>
            <h2>Start a new project</h2>
            <div style="width: 100%;" id="in" class="input-group mb-3 d-flex justify-content-center">
            <input type="email"  placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">SUBMIT</button>
            </div>
        </div>
        <div id="ca2" class="col-6 rounded-4 d-flex flex-column justify-content-center align-items-center gap-4">
            <p style="font-size: 20px;">What are you waiting for?</p>
            <h2>Start a new project</h2>
            <button style="width: 25%;;" class=" d-flex justify-content-center align-items-centerp-3 py-3 p-3 rounded-5 border-0">START NOW</button>
        </div>
    
    </div>
</div>
</template>

<style lang="scss" setup>
#blog1{
    padding-top: 250px;
    background-color: #fafafa;
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

    p{
        margin: 0;
        padding-left: 15px;
        opacity: .7;
        font-size: 14px;

    }
    i{
        color: #00d9a6;
        padding-right: 5px;
        vertical-align:middle;
        padding-bottom: 3px;
    }

    .active{
        background-image: linear-gradient(to right, #96E061, #05d9a4);
        color: white;
        transition: 1s;
    }

    #btn {
        color: white;
        background-image: linear-gradient(to right, #545454, #000000);
        margin-top: 150px;
        margin-bottom: 50px;
        &:hover{
            background-image: linear-gradient(to right, #96E061 , #05d9a4);
        }
    }
    
    #blog2{
        gap: 30px;
        padding-inline: 150px;
        bottom: -150px;
        h2{
            font-size: 40px;
            padding-bottom: 50px;
        }
        p{
            padding: 0;
        }
        #ca1{
            padding-block: 50px;
            background-image: linear-gradient(to right, #3e3e3e, #000000);
            color: white;
            width: calc(100% / 2 - 15px);
            input{
                color: rgb(142, 141, 141);
                width: 60%;
                padding-block: 20px;
                padding-left: 50px;
                background-color: #4d4d4d;
                border-top-left-radius: 30px;
                border-bottom-left-radius: 30px;
                border: none;
                outline: none;
            }
            button{
                color: rgb(142, 141, 141);
                padding-block: 20px;
                background-color: #4d4d4d;
                border-top-right-radius: 30px;
                border-bottom-right-radius: 30px;
                border: none;
                padding-right: 30px;
                font-weight: bold;
                
            }
        }
        #ca2{
            padding-block: 50px;
            background-image: linear-gradient(to left, #96E061, #05d9a4);
            color: white;
            width: calc(100% / 2 - 15px);
            input{
                color: rgb(142, 141, 141);
                width: 60%;
                padding-block: 20px;
                padding-left: 50px;
                background-color: #4d4d4d;
                border-top-left-radius: 30px;
                border-bottom-left-radius: 30px;
                border: none;
                outline: none;
            }
            button{
                color: white;
                background-image: linear-gradient(to right, #545454, #000000);
            }

            button:hover{
                background-image: linear-gradient(to right, #96E061 , #05d9a4);
            }
        }
    }
}

</style>
