<template>
  <a-carousel :after-change="onChange">
    <div class="child-order">
        <div class="child-info">
            <h1>DINE INDOORS FROM 17 MAY</h1>
            <p>WE CAN'T WAIT TO SEE YOU</p>
            <button>Book now</button>
        </div>
    </div>
    <div class="child-order2">
        <div class="child-info">
            <h1>STREET BURGER - KENSINGTON HIGH STREET</h1>
            <p>BOOKINGS NOW OPEN!</p>
            <button>Book now</button>
        </div>
    </div>
    <div class="child-order3">
        <div class="child-info">
            <h1>BREAD STREET KITCHEN - SOUTHWARK </h1>
            <p>OPENING ON 17 MAY!</p>
            <button>Book now</button>
        </div>
    </div>
    <div class="child-order4">
        <div class="child-info">
            <h1>WEDDINGS</h1>
            <p>WE HAVE THE PERFECT LONDON VENUE FOR YOUR WEDDING </p>
            <button>Learn more</button>
        </div>
    </div>
    <div class="child-order5">
        <div class="child-info">
            <h1>STREET PIZZA - BATTERSEA</h1>
            <p>ICONIC LOCATION. ICONIC PIZZA.  </p>
            <button>Find out more</button>
        </div>
    </div>
  </a-carousel>
</template>
<script>
export default {
  methods: {
    onChange(a, b, c) {
      console.log(a, b, c);
    },
  },
};
</script>
<style scoped>


.ant-carousel >>> .slick-slide h3 {
  color: black;
}
.ant-carousel{
    background-color: #f5f5f3;
    max-width: 1150px;
    margin-left: auto;
    margin-right: auto;
}
.child-order{
    background-image: url("https://i.guim.co.uk/img/media/35eaa42262dc493061d082fd17817d2bf1ec7b24/0_224_960_576/master/960.jpg?width=1200&quality=85&auto=format&fit=max&s=db2fa7f37237ae1c7d627335cb9f59f0");
    display: flex;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
}
.child-info{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 15vh;
}
.child-info h1{
    font-size: 4vh;
    color:white;
}
.child-info p{
    color:white;
    font-size: 3vh;
    font-weight: lighter;
}
.child-info button{
    padding:10px 20px;
    border:none;
    background: #f5f5f3;
    color:gray;
}
.child-order2{
    background-image: url("https://www.hot-dinners.com/images/stories/blog/2020/ramseyburger2.jpg");
    display: flex;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
   background-size: cover;
   background-position: bottom;
}
.child-order3{
    background-image: url("https://www.gordonramsayrestaurants.com/assets/Uploads/_resampled/CroppedFocusedImage48036050-50-BSK-Southwark-Hero.jpg");
    display: flex;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
   background-size: cover;
   background-position: bottom;
}
.child-order4{
    background-image: url("https://images.myguide-cdn.com/london/companies/the-savoy-grill-gordon-ramsay/large/the-savoy-grill-gordon-ramsay-311734.jpg");
    display: flex;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: bottom;
}
.child-order5{
    background-image: url("https://www.gordonramsayrestaurants.com/assets/Uploads/_resampled/CroppedFocusedImage121578650-50-Exterior-SP-Battersea.jpeg");
    display: flex;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: bottom;
}
</style>
