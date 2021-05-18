<template>
    <div class="homepage">
        <Carousel/>
        <Countdown/>
        <GoogleMaps/>
        <Options/>
        <Gallery/>
    </div>
</template>
<script>
import Carousel from '../core/Carousel'
import Countdown from '../core/Countdown'
import Options from '../core/Options'
import Gallery from '../core/Gallery'
import GoogleMaps from '../core/GoogleMaps'
export default {
    components:{
        Carousel,
        Countdown,
        Options,
        Gallery,
        GoogleMaps
    }
}
</script>
<style>
.homepage{
    max-width: 1150px;
    margin-left: auto;
    margin-right: auto;
}
</style>