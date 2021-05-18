<template>
    <div class="header">
        <div class="header-left">
            <router-link to="/"><h1>GORDON RAMSAY RESTAURANTS</h1></router-link>
        </div>
        <div class="header-right">
             <a  class="ant-dropdown-link" @click="e => e.preventDefault()">
                BOOK A TABLE
                </a>
            <a-dropdown>
                <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                RESTAURANTS & BARS
                </a>
                <a-menu class="menu" slot="overlay">
                    <a-menu-item key="0">
                        <a  rel="noopener noreferrer" href="#">ALL RESTAURANTS $ BARS</a>
                    </a-menu-item>
                    <a-menu-item key="1">
                        <a  rel="noopener noreferrer" href="#">US RESTAURANTS</a>
                    </a-menu-item>
                    <a-menu-item key="2">
                        <a rel="noopener noreferrer" href="#">MICHELIN STARRED</a>
                    </a-menu-item>
                    <a-menu-item key="3">
                        <a  rel="noopener noreferrer" href="#">CASUAL DINNING</a>
                    </a-menu-item>  <a-menu-item key="0">
                        <a  rel="noopener noreferrer" href="#">FAMILY & FRIENDLY</a>
                    </a-menu-item>
                    <a-menu-item key="4">
                        <a  rel="noopener noreferrer" href="#">BRUNCH IN LONDON</a>
                    </a-menu-item>
                </a-menu>
            </a-dropdown>
            <a-dropdown>
                <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                PRIVATE DINING & EVENTS
                </a>
                <a-menu class="menu" slot="overlay">
                    <a-menu-item key="0">
                        <a  rel="noopener noreferrer" href="#">CHEF'S TABLE</a>
                    </a-menu-item>
                    <a-menu-item key="1">
                        <a  rel="noopener noreferrer" href="#">TABLE DINING</a>
                    </a-menu-item>
                    <a-menu-item key="2">
                        <a rel="noopener noreferrer" href="#">EXCLUSIVE HIRE</a>
                    </a-menu-item>
                    <a-menu-item key="3">
                        <a  rel="noopener noreferrer" href="#">WEDDINGS</a>
                    </a-menu-item>  
                </a-menu>
            </a-dropdown>
            <a-dropdown>
                <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                WHAT'S ON
                </a>
                <a-menu class="menu"  slot="overlay">
                    <a-menu-item key="0">
                        <a  rel="noopener noreferrer" href="#">OUTDOORS TERRACES</a>
                    </a-menu-item>
                    <a-menu-item key="1">
                        <a  rel="noopener noreferrer" href="#">TAKAWAY & DELIVERY</a>
                    </a-menu-item>
                    <a-menu-item key="2">
                        <a rel="noopener noreferrer" href="#">LOVE LONDON</a>
                    </a-menu-item>
                    <a-menu-item key="3">
                        <a  rel="noopener noreferrer" href="#">MAY BANK HOLIDAY</a>
                    </a-menu-item>  
                     <a-menu-item key="4">
                        <a  rel="noopener noreferrer" href="#">KIDS EAT FREE</a>
                    </a-menu-item>
                    <a-menu-item key="5">
                        <a rel="noopener noreferrer" href="#">RAMSAY ROAST</a>
                    </a-menu-item>
                    <a-menu-item key="6">
                        <a  rel="noopener noreferrer" href="#">DOG FRIENDLY RESTAURANTS</a>
                    </a-menu-item>  
                </a-menu>
            </a-dropdown>
            <a-dropdown>
                <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                AT HOME KITS
                </a>
                <a-menu class="menu" slot="overlay">
                    <a-menu-item key="0">
                        <a  rel="noopener noreferrer" href="#">BEEF WELLINGTON</a>
                    </a-menu-item>
                </a-menu>
            </a-dropdown>
            <a-dropdown>
                <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                CAREERS
                </a>
                <a-menu class="menu" slot="overlay">
                    <a-menu-item key="0">
                        <a  rel="noopener noreferrer" href="#">ABOUT</a>
                    </a-menu-item>
                     <a-menu-item key="1">
                        <a  rel="noopener noreferrer" href="#">CHEF APPRENTIVE PROGRAMME</a>
                    </a-menu-item>
                </a-menu>
            </a-dropdown>
            <a-dropdown>
                <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                THE GRAPEVINE
                </a>
                <a-menu class="menu" slot="overlay">
                    <a-menu-item key="0">
                        <a  rel="noopener noreferrer" href="#">RECIPES</a>
                    </a-menu-item>
                     <a-menu-item key="1">
                        <a  rel="noopener noreferrer" href="#">INSPIRATION</a>
                    </a-menu-item>
                     <a-menu-item key="2">
                        <a  rel="noopener noreferrer" href="#">NEW & PRESS</a>
                    </a-menu-item>
                     <a-menu-item key="3">
                        <a  rel="noopener noreferrer" href="#">GALLERY</a>
                    </a-menu-item>
                </a-menu>
            </a-dropdown>
             <a-dropdown>
                <router-link to="/menu" class="single-link"  @click="e => e.preventDefault()">MENU</router-link>
                <a-menu class="menu" slot="overlay">
                    <a-menu-item key="0">
                       <router-link to="/menu/seafood"><a class="noopener noreferrer" rel="noopener noreferrer" href="#">SEAFOOD</a></router-link> 
                    </a-menu-item>
                     <a-menu-item key="1">
                         <router-link to="/menu/chicken"><a  rel="noopener noreferrer" href="#">CHICKEN</a></router-link>
                    </a-menu-item>
                     <a-menu-item key="2">
                         <router-link to="/menu/beef"><a  rel="noopener noreferrer" href="#">BEEF</a></router-link>
                    </a-menu-item>
                     <a-menu-item key="3">
                         <router-link to="/menu/pork"><a  rel="noopener noreferrer" href="#">PORK</a></router-link>
                    </a-menu-item>
                    <a-menu-item key="4">
                         <router-link to="/menu/dessert"><a  rel="noopener noreferrer" href="#">DESSERT</a></router-link>
                    </a-menu-item>
                </a-menu>
            </a-dropdown>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style >
.header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}  
.header-left{
    background-color: black;
    display: flex;
    padding:10px;
    justify-content: center;
    align-items: center;
}
.header-left h1{
    color:white;
}
.header{
    max-width: 1150px;
    margin-left: auto;
    margin-right: auto;
    background-color: black;
}
.ant-dropdown-link{
    color:black;
    background-color: black;
    border-left: 1px solid white;
    color:white;
    padding:15px;
}
.single-link{
    color:black;
    background-color: black;
    border-left: 1px solid white;
    color:white;
    padding:15px;
}
.header-right{
    display: flex;
    flex-wrap: wrap;
}
.ant-dropdown-item {
    color:red;
}
.menu{
    background-color: gray;
}

</style>