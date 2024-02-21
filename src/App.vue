<script>
import {store} from './store'
import AppHeader from './components/AppHeader.vue'
import AppAboutUs from './components/AppAboutUs.vue'
import AppServices from './components/AppServices.vue'
import AppMission from './components/AppMission.vue'
import AppExamples from './components/AppExamples.vue'
import AppClients from './components/AppClients.vue'
import AppBlog from './components/AppBlog.vue'
import AppPartners from './components/AppPartners.vue'
import AppContacts from './components/AppContacts.vue'
import AppFooter from './components/AppFooter.vue'
export default{
    components:{
        AppHeader,
        AppAboutUs,
        AppServices,
        AppMission,
        AppExamples,
        AppClients,
        AppBlog,
        AppPartners,
        AppContacts,
        AppFooter
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
    <AppBlog/>
    <AppPartners/>
    <AppContacts/>
    <AppFooter/>
</template>

<style lang="scss">
@use './styles/style.scss' as *;
</style>