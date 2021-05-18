<template >
    <div>
        <div class="allitems">
            <div v-for="item in allbeef" :key="item.idMeal" class="item">
                <div class="item-title">
                    <router-link :to="{name:'DetailMeal', params:{id:item.idMeal}}"><h3>{{item.strMeal}}</h3></router-link>
                </div>
                <img :src="item.strMealThumb" :alt="item.idMeal">
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name:'Beef',
    computed: mapGetters(["allbeef"]),
    created(){
      this.getBeefMeals()  
    },
    methods:{
        ...mapActions(["getBeefMeals"])
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