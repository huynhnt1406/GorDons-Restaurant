<template>
    <div class="gallery-page">
        <Albums/>
        <GoogleMaps/>
    </div>
</template>
<script>
import Albums from '../core/Albums'
import GoogleMaps from '../core/GoogleMaps'
export default {
    components:{
        Albums,
        GoogleMaps
    }
}
</script>
<style >
.gallery-page{
    max-width: 1150px;
    margin-left: auto;
    margin-right: auto;
}
</style>