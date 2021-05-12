<template >
    <div class="option-container">
        <div v-for="option in allRecipes" :key="option.id"  class="option-parents" >
            <Option :action="option.action" :title="option.title" :lineInside="option.lineInside" :imgUrl="option.imgUrl" :smallLine="option.smallLine" :opentime="option.opentime" :headline="option.headline"  />
        </div>
    </div>
</template>
<script>
import Option from '../core/Option'
import {mapGetters} from 'vuex'
export default {
    components:{
        Option
    },
    computed: mapGetters(["allRecipes"])
}
</script>
<style >
.option-container{
    max-width: 1150px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    padding-bottom: 40px;
}
.option-parents{
    display: flex;
}
</style>