<template>
  <div class="order-page">
    <div  class="order-header">
        <h3>Your shopping basket</h3>
        <a-badge :count="cartItems.length">
            <a-icon :style="{fontSize:'30px'}" type="shopping-cart" />
        </a-badge>
    </div>
    <div class="order-items">
        <div v-for="item in cartItems" :key="item.id" class="order-item">
            <div class="item-img">
                <img :src="item.product[0].strMealThumb" :alt="item.product[0].strMeal">
                <h3>{{item.product[0].strMeal}}</h3>
            </div>
            <div class="item-action">
                <a-button  type="danger" >
                    Delete
                </a-button>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name:'OrderPage',
    data(){
        return{
            cartItems:[]
        }
    },
    computed : mapGetters(["allCardItems"]),
    created(){
        this.cartItems = this.allCardItems
        console.log(this.cartItems)
    }
}
</script>
<style >
.item-img img{
  height: 120px;
  width:120px;
  margin:10px;
}
.item{
  display: flex;
  flex:1;
  justify-content: space-between;
  align-items: center;
}
.order-item{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.order-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid black;
}
.order-page{
  padding:5vh;
}
.item-img{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>