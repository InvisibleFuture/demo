import Vue from 'vue'
import App from './App'
//import api from './api'
import store from './store'
import router from './router'

Vue.config.productionTip = false

//Vue.use(api)

new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})
