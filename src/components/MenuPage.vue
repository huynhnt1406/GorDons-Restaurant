<template >
    <div class="menupage">
        <h3>MENU</h3>
        <div class="menu-category">
            <div class="menu-child1">
                <div class="menutitle"> 
                      <router-link  to="/menu/seafood"><h3>SEAFOOD</h3></router-link>
                </div>
            </div>
             <div class="menu-child2">
                <div class="menutitle">
                      <router-link  to="/menu/pork"><h3>PORK</h3></router-link>
                </div>
            </div>
             <div class="menu-child3">
                <div class="menutitle">
                    <router-link  to="/menu/beef"><h3>BEEF</h3></router-link>
                </div>
            </div>
             <div class="menu-child5">
                <div class="menutitle">
                    <router-link  to="/menu/chicken"><h3>Chicken</h3></router-link>
                </div>
            </div>
             <div class="menu-child4">
                <div class="menutitle">
                    <router-link  to="/menu/dessert"><h3>DESSERT</h3></router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style >
.menupage{
    max-width: 1150px;
    margin-left: auto;
    margin-right: auto;
}
.menu-child1{
    background-image: url('https://bloximages.chicago2.vip.townnews.com/buffalonews.com/content/tncms/assets/v3/editorial/5/38/5385c7bc-10bb-595f-8823-4f3e06ac2819/5ef33f3f9eca0.image.jpg?resize=1200%2C800');
    width: 100%;
    height: 400px;
    background-position: center;
    margin-bottom: 5vh;
    opacity: 0.5;
    transition: 0.3s ease-in-out;
       display: flex;
    justify-content: center;
    align-items: center;
}
.menu-child2{
    background-image: url('https://www.insidehook.com/wp-content/uploads/2021/04/shortribs-1-e1618436791182.jpeg?fit=1200%2C800');
    height: 400px;
    width: 100%;
    background-position: center;
    margin-bottom: 5vh;
    opacity: 0.5;
    transition: 0.3s ease-in-out;
       display: flex;
    justify-content: center;
    align-items: center;
}
.menu-child3{
    background-image: url('https://chefbega.com/wp-content/uploads/2020/03/Perfect-roast-beef.jpg');
    height: 400px;
    width: 100%;
    background-position: center;
    margin-bottom: 5vh;
    opacity: 0.5;
    transition: 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
}
.menu-child5{
    background-image: url('https://i2.wp.com/blog.suvie.com/wp-content/uploads/2020/03/CreamyMushroomChicken_Hero-scaled.jpg?fit=1200%2C800&ssl=1');
    height: 400px;
    width:100%;
    background-position: center;
    margin-bottom: 5vh;
    opacity: 0.5;
    transition: 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
}
.menu-child4{
    background-image: url('https://i.pinimg.com/originals/1d/04/14/1d041466e3f1b3190f7a7d57e9f2fd39.jpg');
    height: 400px;
    width:100%;
    background-position: center;
    margin-bottom: 5vh;
    opacity: 0.5;
    transition: 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
}
.menu-child1:hover{
    opacity: 1;
}
.menu-child2:hover{
    opacity: 1;
}
.menu-child3:hover{
    opacity: 1;
}
.menu-child4:hover{
    opacity: 1;
}
.menu-child5:hover{
    opacity: 1;
}
.menu-category{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.menutitle{
    padding:6vh;
    border:6px solid white;
}
.menutitle h3{
    padding:5px;
    background-color: wheat;
 }
.menutitle button{
    padding:7px;
    background-color: black;
    color:white;
    border:none;
}
</style>