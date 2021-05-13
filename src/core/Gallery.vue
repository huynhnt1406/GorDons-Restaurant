<template >
    <div class="popular-meals">
        <div class="meals">
            <div v-for="meal in allpopularmeals" :key="meal.idMeal" class="meals-container">
                <img :src="meal.strMealThumb" :alt="meal.strMeal">
            </div>
            <div class="more-gallery">
                <div class="title">
                    <router-link to="/viewgallery" class="link"><h1>GALLERY</h1></router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name:'Gallery',
    data(){
        return{

        }
    },
    computed: mapGetters(["allpopularmeals"]),
    created(){
        this.fetchMeals()
    },
    methods:{
        ...mapActions(["fetchMeals"])
    }
}
</script>
<style >
.meals-container img{
    height: 287.5px ;
    width: 287.5px;
}
.meals{
    display: flex;
    flex-wrap: wrap;
}
.more-gallery{
    height: 287.5px;
    width: 287.5px;
    background-color:rgb(27, 25, 25);
}
.more-gallery{
    display: flex;
    justify-content: center;
    align-items: center;
}
.title{
    padding-top:3vh;
    padding-bottom: 3vh;
    border-top:4px solid gray;
    border-bottom: 4px solid gray;
}
.title h1{
    color:gray
}
.link{
    padding-top:3vh;
    padding-bottom: 3vh;
    border-top:4px solid gray;
    border-bottom: 4px solid gray;
    color:white;
}
</style>