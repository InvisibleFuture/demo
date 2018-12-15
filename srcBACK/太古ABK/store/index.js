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
		initialize: 0, /* 初始化状态, 第一个请求必须是当前页面信息 */
		count: 0,
		// 登录信息存于 cookie , 此处似乎不必要?
		login: { id:1, token:'46546546fdasdadas123344' },
		// 全局存储角色信息 (全局存储将面临内存回收问题 故似乎不必要, 故此处仅存储 关联好友的信息? 好友信息实际也需要更新的)
		users: [
			{ id:1, name:'橘纸', ex:'组关联角色而不是角色关联组' },
			{ id:2, name:'白糖', ex:'组关联角色而不是角色关联组' }
		],
		user: {
			// Destroy when exiting
			login: { id:1, token:'46546546fdasdadas123344' },
			setting: '',
			draft:'',
			friend:'',
			list: [
				// public information
				{ id:0, avatar:'av481966.png', },
				{ id:1, avatar:'av645646.png', }
			]
		},
		msg: {
			// 对话, 私信, 系统推送, 区域或全局即时广播, 区域即时对话 (将对话信息暂存于store)
			user:'对话角色列 对话信息列?',
			system:'',
		},
		server: {
			// File and data server ( 页面服务可以拦截转到data地址, 但图像服务不可拦截, 本地提供图像服务时直接使用相对路径 )
			data: { domain:'misakam.com', path:'/' },
			img:  { domain:'misakam.com', path:'/' },
			file: { domain:'misakam.com', path:'/' },
			msg:  { domain:'misakam.com', path:'/' }
		}
		// There seems to be no need to manage the data..
	},
	mutations: {
		increment (state) {
			state.count++
		},
		initialize (state) {
			state.initialize++
		}
	}
})