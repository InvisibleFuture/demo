import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', name: 'Index', component: () => import('@/components/index') },
      { path: '/home', name: 'Home', component: () => import('@/components/Home') },
      { path: '/p:id', name: 'thread', component: () => import('@/components/thread') },
      { path: '/list:id', name: 'forum', component: () => import('@/components/forum') },
      { path: '/account', name: 'account', component: () => import('@/components/account.vue') },
      { path: '/404', name: '404', component: () => import('@/components/404') },
      { path: '*', redirect: '/404' }
    ]
  })
}
