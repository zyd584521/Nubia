import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTouch from "vue-touch"
import "@common/filter"
import observer from '../public/js/observer';

Vue.config.productionTip = false
Vue.use(VueTouch, { name: 'v-touch' })

Vue.prototype.$observer = observer
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
