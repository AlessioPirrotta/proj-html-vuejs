<script>
import {store} from './store'
import AppHeader from './components/AppHeader.vue'
export default{
    components:{
        AppHeader
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
</template>

<style lang="scss">
@use './styles/style.scss' as *;
</style>