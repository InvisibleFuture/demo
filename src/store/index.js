import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    //cart,
    //products
  },
  //strict: debug,
  //plugins: debug ? [createLogger()] : [],
  state: {
    count: 10,
    login: { id: 1, token: '46546546fdasdadas123344' },
    user:[
      { id: 1, name: 'Last', avatar:'/static/u1.jpg', ex: '组关联角色而不是角色关联组' },
      { id: 2, name: '橘纸', avatar:'/static/u1.jpg', ex: '组关联角色而不是角色关联组' },
      { id: 3, name: '白糖', avatar:'/static/u1.jpg', ex: '组关联角色而不是角色关联组' }
    ],
    msg:[
      {id: 0, msg:'wlgdc..'},
      {id: 1, msg:'wlgdc..'},
      {id: 1, msg:'wlgdc..'},
      {id: 1, msg:'wlgdc..'},
      {id: 1, msg:'wlgdc..'}
    ],
    server: {
      master: { domain: 'https://xn--uesr8q.com', path: '/' },
      data:   { domain: 'https://xn--uesr8q.com', path: '/' },
      img:    { domain: 'https://xn--uesr8q.com', path: '/upload/preview/' },
      file:   { domain: 'misakam.com', path: '/' },
      ws:     { domain: 'misakam.com', path: '/' }
    }
    // There seems to be no need to manage the data..
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
