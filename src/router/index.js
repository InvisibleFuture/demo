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
      { path: '/guild', name: 'guild', component: () => import('@/components/guild') },
      { path: '/team', name: 'team', component: () => import('@/components/team') },
      { path: '/structure', name: 'structure', component: () => import('@/components/structure') },
      { path: '/project', name: 'project', component: () => import('@/components/project') },
      //{ path: '/user', name: 'user', component: () => import('@/components/user') },

      { path: '/p:id', name: 'thread', component: () => import('@/components/thread') },
      { path: '/lists:id', name: 'List', component: () => import('@/components/List') },
      { path: '/ps:id', name: 'P', component: () => import('@/components/P') },
      { path: '/list:id', name: 'forum', component: () => import('@/components/forum') },
      //{ path: '/u:id', name: 'U', component: () => import('@/components/U') },
      //{ path: '/forum-:id.htm', name: 'forum', component: resolve => require(['@/components/forum'],resolve) },

      { path: '/404', name: '404', component: () => import('@/components/404') },
      { path: '*', redirect: '/404' }
    ]
  })
}
