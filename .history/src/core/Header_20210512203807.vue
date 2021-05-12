<template>
    <div class="header">
        <div class="header-left">
            <h1>GORDON RAMSAY RESTAURANTS</h1>
        </div>
        <div class="header-right">
             <a  class="ant-dropdown-link" @click="e => e.preventDefault()">
                BOOK A TABLE
                </a>
            <a-dropdown>
                <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                RESTAURANTS & BARS
                </a>
                <a-menu slot="overlay">
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
                <a-menu slot="overlay">
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
                <a-menu class="ant-dropdown-item" slot="overlay">
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
                <a-menu slot="overlay">
                    <a-menu-item key="0">
                        <a  rel="noopener noreferrer" href="#">BEEF WELLINGTON</a>
                    </a-menu-item>
                </a-menu>
            </a-dropdown>
            <a-dropdown>
                <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                CAREERS
                </a>
                <a-menu slot="overlay">
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
                <a-menu slot="overlay">
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
                <a  class="ant-dropdown-link" @click="e => e.preventDefault()">
                GIFTS
                </a>
                <a-menu class="menu" slot="overlay">
                    <a-menu-item key="0">
                        <a class="ant-dropdown-item" rel="noopener noreferrer" href="#">MICHELIN STAR</a>
                    </a-menu-item>
                     <a-menu-item key="1">
                        <a  rel="noopener noreferrer" href="#">LUXURY GIFTS</a>
                    </a-menu-item>
                     <a-menu-item key="2">
                        <a  rel="noopener noreferrer" href="#">MASTERCLASSES</a>
                    </a-menu-item>
                     <a-menu-item key="3">
                        <a  rel="noopener noreferrer" href="#">CORPORATE GIFTS</a>
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
.header-right{
    display: flex;
    flex-wrap: wrap;
}
.ant-dropdown-item {
    color:red;
}
.menu{
    background-color: rebeccapurple;
}
</style>