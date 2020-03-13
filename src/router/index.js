import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', name: 'Home', component: Home },
      { path: '/p:id', name: 'thread', component: () => import('@/components/thread') },
      { path: '/list:id', name: 'forum', component: () => import('@/components/forum') },
      { path: '/404', name: '404', component: () => import('@/components/404') },
      { path: '*', redirect: '/404' }
    ]
  })
}
