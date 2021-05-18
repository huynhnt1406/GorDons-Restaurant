<template>
    <div class="div">
        <GmapMap
            :center="{lat:51.470267, lng:-0.139182}"
            :zoom="7"
            map-type-id="terrain"
            style="width: 100%; height: 450px"
            >
            <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
            />
        </GmapMap>
    </div>
</template>
<script>
export default {
    name:'GoogleMaps',
}
</script>
<style >
    
</style>