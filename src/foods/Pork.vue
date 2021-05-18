<template >
    <div>
        <div class="allitems">
            <div v-for="item in allpork" :key="item.idMeal" class="item">
                <div class="item-title">
                    <router-link :to="{name:'DetailMeal', params:{id:item.idMeal}}"><h3>{{item.strMeal}}</h3></router-link>
                </div>
                <img :src="item.strMealThumb" :alt="item.idMeal">
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name:'Pork',
    computed: mapGetters(["allpork"]),
    created(){
        this.getPorkMeals()
    },
    methods:{
        ...mapActions(["getPorkMeals"])
    }
}
</script>
<style >
  .item img{
        height: 350px;
        width: 383px;
    }
    .item{
        position: relative;
    }
    .item-title{
        position: absolute;
        bottom: 10px;
        right:10px;
        background-color: black;
        padding:5px;
    }
    .item-title h3{
        color:beige
    }
    .allitems{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }  
</style>