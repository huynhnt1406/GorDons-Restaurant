import axios from 'axios'


const state = {
    popularmeals:[],
    galleryMeals:[]
}
const getters = {
    allpopularmeals: state => state.popularmeals,
    allGalleryMeals:state => state.galleryMeals
}

const actions = {
    async fetchMeals({commit}){
        const res = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=h')
        commit('setPopularMeals', res.data.meals)
    },
    async fetchGallery({commit}){
        const res = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
        console.log(res.data.meals)
        commit('setGalleryMeals', res.data.meals)
    }
}
const mutations = {
    setPopularMeals :(state, popularmeals) =>state.popularmeals = popularmeals,
    setGalleryMeals : (state, galleryMeals) => state.galleryMeals = galleryMeals
}

export default {
    state, getters,actions, mutations
}