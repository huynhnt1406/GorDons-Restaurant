import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../components/Homepage'
import GalleryPage from '../components/GalleryPage'
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
    }
]
Vue.use(VueRouter)

export default new VueRouter({
    routes,
    mode:'history'
})