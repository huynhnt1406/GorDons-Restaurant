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
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
}
.option-parents{
    display: flex;
}
.option-img img{
    width: 100%;
    height: 550px;
    opacity: 0.6;
    transition: 0.3s ease-in-out;
}
.option-img img:hover{
    opacity: 1;
}
.option{
     position: relative;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
}
.option-info{
    position: absolute;
    top:5vh;
    height: 150px;
    width: 150px;
    border:2px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.option-info h3{
    background-color: white;
    border:1px solid black;
}
.option-info p{
    font-weight: 500;
}
.option-opentime{
    position: absolute;
    top:22vh;
}
.option-opentime p{
    font-size: larger;
    color:white;
}
.option-headline{
    position: absolute;
    top:28vh; 
    padding-left: 20px;
    padding-right: 20px;
}
.option-headline h1{
    color:white;
}
.option-title{
    position: absolute;
    bottom: 15vh;
}
.option-title p{
    color:white;
    font-weight: 500;
}
.option-action button{
    padding:10px 30px;
    background-image: linear-gradient(black,gray);
    border:none;
    color:white;
}
.option-action{
    position: absolute;
    bottom: 6vh;
}
</style>