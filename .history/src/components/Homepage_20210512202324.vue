<template>
    <div class="homepage">
        <Header/>
        <Carousel/>
        <Countdown/>
        <Options/>
    </div>
</template>
<script>
import Carousel from '../core/Carousel'
import Header from '../core/Header'
import Countdown from '../core/Countdown'
import Options from '../core/Options'
export default {
    components:{
        Header,
        Carousel,
        Countdown,
        Options
    }
}
</script>
<style>
</style>