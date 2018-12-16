import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      //{ path: '/', name: 'Hello', component: HelloWorld },
      { path: '/', name: 'Home', component: Home },
      { path: '/test', name: 'Test', component: () => import('@/components/Test') },
      { path: '/list:id', name: 'List', component: () => import('@/components/List') },
      { path: '/p:id', name: 'P', component: () => import('@/components/P') },
      { path: '/forum:id', name: 'forum', component: () => import('@/components/forum') },
      //{ path: '/u:id', name: 'U', component: () => import('@/components/U') },
      //{ path: '/forum-:id.htm', name: 'forum', component: resolve => require(['@/components/forum'],resolve) },
      { path: '/thread:id', name: 'thread', component: resolve => require(['@/components/thread'],resolve) }
    ]
  })
}
