<template>
    <div class="meal-data">
       <div class="meal-details" v-for="ele in dataMeal" :key="ele.id">
            <div class="meal-img">
                <img :src="ele.strMealThumb" :alt="ele.idMeal">
                <div class="orderButton">
                    <h1><strong>{{ele.strMeal}}</strong></h1>
                    <h3><strong>{{ele.strArea}}</strong></h3>
                    <p><strong>{{ele.strInstructions}}</strong></p>
                    <a-button @click="addToCart()"  type="primary" >
                        Order now
                    </a-button>
                </div>
            </div>
       </div>
    </div>
</template>

<script>
import fetch from 'node-fetch'
const key = 'updatable';
export default {
    props:['id'],
    data(){
        return{
            dataMeal:[]
        }
    },
    methods:{
        addToCart(){
            this.$store.dispatch('addProductToCart',{
                product:this.dataMeal,
                quantity:1
            })
            this.$message.loading({ content: 'Ordering...', key });
                setTimeout(() => {
                    this.$message.success({ content: 'Ordered!', key, duration: 2 });
                }, 1000);
            this.$router.push({path:'/yourorder'})
        },
    },
    async mounted(){
     const res =  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.id}`)
     const respData = await res.json()
     this.dataMeal = respData.meals
  }
    
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
.meal-data{
    padding:2.5vh;
    margin:2.5vh;
    border:2px solid black;
    font-family:"Poppins",sans-serif;
}
</style>