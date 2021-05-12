import Vue from 'Vue'
import Vuex from 'vuex'
import options from './modules/options'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        options,
    }
})