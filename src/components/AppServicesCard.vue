<script>
import {store} from '../store'

export default{
    name:'AppServicesCard',
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
<div style="height: 300px;" class="col-5 px-5 rounded-4 d-flex flex-column justify-content-center gap-3 ">
    <i id="ish" style="font-size: 50px;" :class="`${propsItem.icon}`"></i>
    <i id="ino" style="font-size: 50px;" :class="`${propsItem.icon}`"></i>
    <h2 class="pt-3" style="font-weight: 400;">{{propsItem.service}}</h2>
    <p>Far far away, behind the word mountains, far from the countries Vokalia Separated...</p>
</div>
</template>

<style lang="scss" setup>

</style>