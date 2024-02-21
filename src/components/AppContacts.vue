<script>
    import {store} from '../store'
    
export default{
    name:'AppContacts',
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div id="con" class="d-flex justify-content-center align-items-center" style="height: 500px;">
        <div class="d-flex" style="width: 85%;">
            <div style="width: 50%;" class="d-flex">
                <div style="width: 50%;">
                    <img src="../assets/images/cropped-Group-39-2x.png" alt="">
                    <p>While the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees.While the lovely valley teems with vapour around me.</p>
                </div>
                <div id="qui" class=" d-flex flex-column ps-5">
                    <h4>QUICk LINKS</h4>
                    <div class="d-flex gap-2 py-3">
                        <div class="div_hr1"></div>
                        <div class="div_hr2"></div>
                    </div>
                    <span>Careers</span>
                    <span>News</span>
                    <span>Terms of use</span>
                    <span>Privacy Projects</span>
                    <span>About</span>
                    <span>Contact</span>
                </div>
            </div>
            <div style="width: 50%;" class="d-flex">
                <div style="width: 50%;" class=" d-flex flex-column ps-5">
                    <h4>CONTACT</h4>
                    <div class="d-flex gap-2 py-3">
                        <div class="div_hr1"></div>
                        <div class="div_hr2"></div>
                    </div>
                    <span class="pb-4">Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, TX 76051</span>
                    <span class="pb-4">info@yourdomain.com</span>
                    <span>+99 (0) 101 0000 888</span>
                    
                </div>
                <div style="width: 50%;" class=" d-flex flex-column ps-5">
                    <h4>LOCATION ON MAP</h4>
                    <div class="d-flex gap-2 py-3">
                        <div class="div_hr1"></div>
                        <div class="div_hr2"></div>
                    </div>
                    <img width="100%" src="../assets/images/map.png" alt="">
                    
                </div>
                
            </div>

        </div>


    </div>
</template>

<style lang="scss" setup>
  #con{
    P{
        padding-top: 20px;
        
    }
    #qui{
        
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

  #qui span:hover{
    color: #05d9a4;
    cursor: pointer;
  }

</style>