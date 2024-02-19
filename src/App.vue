<script>
import {store} from './store'
import AppHeader from './components/AppHeader.vue'
import AppAboutUs from './components/AppAboutUs.vue'
export default{
    components:{
        AppHeader,
        AppAboutUs
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
</template>

<style lang="scss">
@use './styles/style.scss' as *;
</style>