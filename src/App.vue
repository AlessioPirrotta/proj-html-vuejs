<script>
import {store} from './store'
import AppHeader from './components/AppHeader.vue'
import AppAboutUs from './components/AppAboutUs.vue'
import AppServices from './components/AppServices.vue'
import AppMission from './components/AppMission.vue'
import AppExamples from './components/AppExamples.vue'
import AppClients from './components/AppClients.vue'
export default{
    components:{
        AppHeader,
        AppAboutUs,
        AppServices,
        AppMission,
        AppExamples,
        AppClients
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
    <AppMission/>
    <AppExamples/>
    <AppClients/>
</template>

<style lang="scss">
@use './styles/style.scss' as *;
</style>