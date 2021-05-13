<template >
    <div class="albums-container">
        <div  class="albums">
            <div v-for="meal in allGalleryMeals" :key="meal.idDrink" class="single-albums">
                <div class="meal-img" >
                    <img :src="meal.strMealThumb" :alt="meal.idMeal">
                </div>
                <div class="meal-title">
                    <h3>{{meal.strMeal}}</h3>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    data() {
        return {
            visible: false,
        };
    },
    computed: mapGetters(["allGalleryMeals"]),
    created(){
        this.fetchGallery()
    },
    methods: {
        ...mapActions(["fetchGallery"]),
        showModal() {
            this.visible = true;
        },
        handleOk(e) {
            console.log(e);
            this.visible = false;
        },
    },
}
</script>
<style >
.modal-pic img{
    height: 400px;
    width: 475px;
}
.button-pic img{
    height: 80px ;
    width: 120px;
}
.albums{
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 100px;
    justify-content: center;
    align-items: center;
    background-color: black;
}
.single-albums{
    padding:10px;
    opacity: 0.4;
    transition: 0.3s ease-in-out;
}
.single-albums:hover{
    opacity: 1;
}
.meal-img img{
    height: 180px;
    width:260px;
}
.meal-title h3{
    font-weight: 500;
    color:white;
}
</style>