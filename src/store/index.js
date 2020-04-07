import Vue from 'vue'
import Vuex from 'vuex'
//import createPersiste from 'vue-savedata'
import createVuexAlong from "vuex-along"

Vue.use(Vuex)

//const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    //cart,
    //products
  },
  plugins: [createVuexAlong()],
  //strict: debug,
  //plugins: [createPersiste()], //debug ? [createLogger(),createPersiste()] : [createPersiste()],
  state: {
    count: 10,
    online: false,
    token: '',
    user: {
      uid: 0,
      gid: 0,
      username: '游客',
      threads: 0,
      posts: 0,
      credits: '',
      golds: 0,
      rmbs: 0,
      avatar: 'http://xiaoyaozj.com/upload/avatar/000/104112.png?1583608106',
      digests: '',
      digests_3: '',
      groupname: '游客',
      avatar_url: 'http://xiaoyaozj.com/upload/avatar/000/104112.png?1583608106',
      avatar_path: '',
      online_status: '0',
    },
    msg:[
      {id: 0, msg:'wlgdc..'},
      {id: 1, msg:'wlgdc..'},
      {id: 1, msg:'wlgdc..'},
      {id: 1, msg:'wlgdc..'},
      {id: 1, msg:'wlgdc..'}
    ],
    server: {
      master: { domain: 'http://www.xiaoyaozj.com', path: '/' },
      data:   { domain: 'http://www.xiaoyaozj.com', path: '/' },
      img:    { domain: 'http://www.xiaoyaozj.com', path: '/upload/preview/' },
      file:   { domain: 'http://www.xiaoyaozj.com', path: '/' },
      ws:     { domain: 'http://www.xiaoyaozj.com', path: '/' }
    }
    // There seems to be no need to manage the data..
  },
  mutations: {
    increment (state) {
      state.count++
    },
    setuser(state, user){
      state.user = user
    },
    settoken(state, token){
      state.token= token
    },
    setonline(state, bool) {
      state.online = bool
    }
  }
})
