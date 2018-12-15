import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: home },
    { path: '/forum-:id.htm', name: 'forum', component: resolve => require(['@/components/forum'],resolve) },
    { path: '/thread-:id.htm', name: 'thread', component: resolve => require(['@/components/thread'],resolve) }
  ],
  mode: 'history'
})
