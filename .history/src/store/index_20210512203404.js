import Vue from 'vue'
import Vuex from 'vuex'
import options from '../store/modules/options'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        options,
    }
})