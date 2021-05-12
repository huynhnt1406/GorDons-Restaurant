<template >
    <div class="option">
        <div class="option-img">
            <img :src="imgUrl" alt="">
        </div>
        <div class="option-info">
            <h3>{{lineInside}}</h3>
            <p>{{smallLine}}</p>
        </div>
        <div class="option-opentime">
            <p>{{opentime}}</p>
        </div>
        <div class="option-headline">
            <h1>{{headline}}</h1>
        </div>
        <div class="option-title">
            <p>{{title}}</p>
        </div>
        <div class="option-action">
            <button>{{action}} <a-icon type="arrow-right" /> </button>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        action:String,
        title:String,
        headline:String,
        opentime:String,
        smallLine:String,
        lineInside:String,
        imgUrl:String
    }
}
</script>
<style >
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