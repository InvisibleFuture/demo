import Vue from 'vue'
import App from './App'
import store from './store'
import { createRouter } from './router'

Vue.config.productionTip = false

export function createApp () {
  const router = new createRouter()
  const app = new Vue({
    store,
    router,
    render: h => h(App)
  })
  return { app, router }
}
