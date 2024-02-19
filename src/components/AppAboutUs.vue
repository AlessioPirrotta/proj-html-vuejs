<script>
    import {store} from '../store'
    
export default{
    name:'AppAboutUs',
    data() {
        return {
            store
        }
    },
}
</script>

<template>
<div id="carouselExampleIndicators" class="carousel slide overflow-hidden">
  <div id="indicators" class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button class="" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button class="" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div style="height: 100%;" class="carousel-inner">
    <div style="height: 100%;" class="carousel-item active">
        <div style="height: 100%;" class="d-flex ">
            <div class="d-flex align-items-center">
              <div class="d-flex flex-column">
                <h5 style="color:#00d9a6 ;">17 YEARS OF EXPERIENCE</h5>
                <h1 class="pt-4">We are a <br> Web Design <span style="color:#00d9a6 ;">Agency</span></h1>
                <div class="d-flex gap-2 pt-5">
                  <div class="div_hr1"></div>
                  <div class="div_hr2"></div>
                </div>
                <p class="pt-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                    there live the blind texts. Separated they ive in Bookmarksgrove right at the coast of the
                    Semantics, a large language ocean.Separated they live in Bookmarksgrove.
                </p>
                <button id="btnN" style="width: 10%;" class="d-flex justify-content-center align-items-centerp-3  py-3 rounded-5 border-0 btnN">READ MORE</button>
                <p style="font-size: 15px;" class="fw-bold">FACEBOOK - INSTAGRAM - YOUTUBE - TWITTER</p>
              </div>
            </div>
                <img src="../assets/images/Group-36-2x.png" class="d-block" alt="...">
        </div>
    </div>
    <div style="height: 100%;" class="carousel-item">
      <div style="height: 100%;" class="d-flex ">
            <div class="d-flex align-items-center">
              <div class="d-flex flex-column">
                <h5 style="color:#00d9a6 ;">17 YEARS OF EXPERIENCE</h5>
                <h1 class="pt-4">A Group of <br> Expert <span style="color:#00d9a6 ;">Planners</span></h1>
                <div class="d-flex gap-2 pt-5">
                  <div class="div_hr1"></div>
                  <div class="div_hr2"></div>
                </div>
                <p class="pt-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                    there live the blind texts. Separated they ive in Bookmarksgrove right at the coast of the
                    Semantics, a large language ocean.Separated they live in Bookmarksgrove.
                </p>
                <button id="btnN" style="width: 10%; black;" class=" d-flex justify-content-center align-items-centerp-3  py-3 p-3 rounded-5 border-0">READ MORE</button>
                <p style="font-size: 15px;" class="fw-bold">FACEBOOK - INSTAGRAM - YOUTUBE - TWITTER</p>
              </div>
            </div>
                <img src="../assets/images/Group-40-2x.png" class="d-block" alt="...">
        </div>
    </div>
    <div style="height: 100%;" class="carousel-item">
      <div style="height: 100%;" class="d-flex ">
            <div class="d-flex align-items-center">
              <div class="d-flex flex-column">
                <h5 style="color:#00d9a6 ;">17 YEARS OF EXPERIENCE</h5>
                <h1 class="pt-4">Focus <br> on Your <span style="color:#00d9a6 ;">Business</span></h1>
                <div class="d-flex gap-2 pt-5">
                  <div class="div_hr1"></div>
                  <div class="div_hr2"></div>
                </div>
                <p class="pt-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                    there live the blind texts. Separated they ive in Bookmarksgrove right at the coast of the
                    Semantics, a large language ocean.Separated they live in Bookmarksgrove.
                </p>
                <button id="btnN" style="width: 10%; black;" class=" d-flex justify-content-center align-items-centerp-3  py-3 p-3 rounded-5 border-0">READ MORE</button>
                <p style="font-size: 15px;" class="fw-bold">FACEBOOK - INSTAGRAM - YOUTUBE - TWITTER</p>
              </div>
            </div>
                <img src="../assets/images/Group-35-2x.png" class="d-block" alt="...">
        </div>
    </div>
    <div id="prev" style="width: 100%; height: 100%;" class="position-absolute">
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span style="background-color: #4DDD83 ;" class="carousel-control-prev-icon rounded-3" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    </div>
    <div id="next" style="width: 100%; height: 100%;" class="position-absolute">
      <button  class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span style="background-color: #4DDD83 ;" class="carousel-control-next-icon rounded-3" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    
  </div>
  
</div>
</template>

<style lang="scss" setup>
 #carouselExampleIndicators{
  width: 100%;
    height: 1000px;
    padding-top: 80px;
    padding-left: 100px;
    background-color: #fafafa;
    h1{
       font-size: 80px;
    }

    figure{
        margin: 0px;
    }

    img{
      width: 1100px;
      position:absolute;
      right: -150px;
      
    }

    .carousel-indicators{
      padding-bottom: 50px;
    }

    .carousel-inner{
      padding-left: 100px;
    }

    .div_hr1{
      width: 13px;
      height: 7px;
      background-image: linear-gradient(to right, #96E061 , #05d9a4);
      border-radius: 10px;
    }
    .div_hr2{
      width: 60px;
      height: 7px;
      background-image: linear-gradient(to right, #96E061 , #05d9a4);
      border-radius: 10px;
    }

    h5{
      letter-spacing: 7px;
    }

    p{
      width: 40%;
    }
    
    #btnN {
        color: white;
        background-color: black;
        margin-top: 40px;
        margin-bottom: 50px;
    }
    #indicators > button {
        color: white;
        background-image: linear-gradient(to right, #96E061 , #05d9a4);
    }

    #prev{
      left: -100px;
    }
    #next{
      right: 0px;
    }

 }



</style>