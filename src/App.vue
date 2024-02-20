<script>
import {store} from './store'
import AppHeader from './components/AppHeader.vue'
import AppAboutUs from './components/AppAboutUs.vue'
import AppServices from './components/AppServices.vue'
export default{
    components:{
        AppHeader,
        AppAboutUs,
        AppServices
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <AppHeader/>
    <AppAboutUs/>
    <AppServices/>
</template>

<style lang="scss">
@use './styles/style.scss' as *;
</style>