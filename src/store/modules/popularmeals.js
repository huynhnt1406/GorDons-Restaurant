import axios from 'axios'


const state = {
    popularmeals:[],
    galleryMeals:[],
    seafood:[],
    chicken:[],
    beef:[],
    dessert:[],
    pork:[],
    listmeals:[],
    cart:[]
}
const getters = {
    allpopularmeals: state => state.popularmeals,
    allGalleryMeals:state => state.galleryMeals,
    allseafood:state => state.seafood,
    allListmeals: state => state.listmeals,
    allchicken:state => state.chicken,
    allbeef:state => state.beef,
    alldessert:state => state.dessert,
    allpork:state => state.pork,
    allCardItems: state => state.cart
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
    },
    async getDessertMeals({commit}){
        const res = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert')
        console.log(res.data.meals)
        commit('setDessert',res.data.meals)
    },
    async getChickenMeals({commit}){
        const res = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken')
        console.log(res.data.meals)
        commit('setChicken',res.data.meals)
    },
    async getBeefMeals({commit}){
        const res = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef')
        console.log(res.data.meals)
        commit('setBeef',res.data.meals)
    },
    async getPorkMeals({commit}){
        const res = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork')
        console.log(res.data.meals)
        commit('setPork',res.data.meals)
    },
    async getSeafoodMeals({commit}){
        const res = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        console.log(res.data.meals)
        commit('setSeafood',res.data.meals)
    },
    addProductToCart({commit}, {product, quantity}){
        commit('ADD_TO_CART',{product,quantity})
    }
}
const mutations = {
    setPopularMeals :(state, popularmeals) =>state.popularmeals = popularmeals,
    setGalleryMeals : (state, galleryMeals) => state.galleryMeals = galleryMeals,
    setSeafood : (state, seafood ) => state.seafood = seafood,
    setPork : (state, pork ) => state.pork = pork,
    setChicken : (state, chicken ) => state.chicken = chicken,
    setBeef : (state,beef  ) => state.beef = beef,
    setDessert : (state,dessert  ) => state.dessert = dessert,
    ADD_TO_CART: (state,{product, quantity}) => {
        state.cart.push({
            product,
            quantity
        })
    }
}

export default {
    state, getters,actions, mutations
}