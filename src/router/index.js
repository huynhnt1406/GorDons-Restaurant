import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../components/Homepage'
import GalleryPage from '../components/GalleryPage'
import MenuPage from '../components/MenuPage'
import Seafood from '../foods/Seafood'
import Beef from '../foods/Beef'
import Chicken from '../foods/Chicken'
import Dessert from '../foods/Dessert'
import Pork from '../foods/Pork'
import DetailMeal from '../foods/DetailMeal'
import OrderPage from '../components/OrderPage'
const routes = [
    {
        path:'/',
        name:'Homepage',
        component: Homepage
    },
    {
        path:'/viewgallery',
        name:'GalleryPage',
        component:GalleryPage
    },
    {
        path:'/menu',
        name:'MenuPage',
        component:MenuPage
    },
    {
        path:'/menu/seafood',
        name:'Seafood',
        component:Seafood
    },
    {
        path:'/menu/beef',
        name:'Beef',
        component:Beef
    },
    {
        path:'/menu/chicken',
        name:'Chicken',
        component:Chicken
    },
    {
        path:'/menu/dessert',
        name:'Dessert',
        component:Dessert
    }, 
    {
        path:'/menu/pork',
        name:'Pork',
        component:Pork
    },
    {
        path:'/menu/detailmeal/:id',
        name:'DetailMeal',
        component:DetailMeal,
        props:true
    },
    {
        path:'/yourorder',
        name:'OrderPage',
        component:OrderPage,
    }
]
Vue.use(VueRouter)

export default new VueRouter({
    routes,
    mode:'history'
})