import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
//import ProjectList from '@/components/ProjectList'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: home },
    //{ path: '/forum-:id.htm', name: 'forum', component: resolve => require(['@/components/forum'],resolve) },
    { path: '/thread-:id.htm', name: 'thread', component: resolve => require(['@/components/thread'],resolve) },
    { path: '/forum-:id.htm', name: 'forum', component: resolve => require(['@/components/forum'],resolve) },
    //{ path: '/plist', name: 'HelloWorld', component: ProjectList },
    { path: '/areas', name: 'areas', component: resolve => require(['@/components/areas'],resolve) },
    { path: '/idea', name: 'idea', component: resolve => require(['@/components/idea'],resolve) },
    { path: '/project', name: 'project', component: resolve => require(['@/components/project'],resolve) },
    { path: '/p:id', name: 'p', component: resolve => require(['@/components/p'],resolve) },
    { path: '/u:id', name: 'u', component: resolve => require(['@/components/u'],resolve) },
    //{ path: '/plist', name: 'plist', component: resolve => require(['@/components/plist'],resolve) },
    //{ path: '/p:id', name: 'p', component: resolve => require(['@/components/p'],resolve) },
  ],
  mode: 'history'
})
