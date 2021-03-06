import Vue from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import store from './store/index'
import router from './router/index'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.config.productionTip = false
Vue.use(Antd);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDFBbC8Q4Z4Uuqc5L3BGUTrHxaI301NmZg',
  },
})
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
