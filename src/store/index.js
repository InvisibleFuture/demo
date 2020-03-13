import Vue from 'vue'
import Vuex from 'vuex'
import createPersiste from 'vue-savedata'

Vue.use(Vuex)

//const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    //cart,
    //products
  },
  //strict: debug,
  plugins: [createPersiste()], //debug ? [createLogger(),createPersiste()] : [createPersiste()],
  state: {
    count: 10,
    online: false,
    token: '',
    user: {
      uid: '',
      gid: '',
      username: '',
      threads: '',
      posts: '',
      credits: '',
      golds: '',
      rmbs: '',
      avatar: '',
      digests: '',
      digests_3: '',
      groupname: '',
      avatar_url: '',
      avatar_path: '',
      online_status: '',
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
