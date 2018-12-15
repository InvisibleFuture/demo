import axios from 'axios'

// 设置axios 的默认属性
//axios.defaults.withCredentials = false //(跨域时是否使用证书)
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8' //(请求头)
// axios.defaults.baseURL = (process.env.NODE_ENV == 'development' ? 'http://192.168.1.234:10086/Api/StartAPI/StartAPI' : 'http://www.hhh.com/Api/StartAPI/StartAPI') //(根据开发环境和生产环境使用不同的请求地址)
const instance = axios.create({
	baseURL: 'http://dev.xxxxxxxxxxx.com/',
	headers:{
		'Content-Type':'application/x-www-form-urlencoded'
	},
	transformRequest: [function (data) {
		data = Qs.stringify(data);
		return data;
	}],
	withCredentials:true   //加了这段就可以跨域了 
});

// 数据服务器
// 图像服务器
// 文件服务器
// 区域与 CDN 分发
// 消息推送服务

// 判断是否视网膜屏幕决定载入图像分辨率
// 图像与文件上载服务器
// 数据上载服务器


//const URL_BASE = '/static/'
const URL_BASE = 'http://localhost/api/index.php'

export default {
	install(Vue,options){
		Vue.prototype.apiGet = function (type, id) {
			
			/* 当数据由多个服务器分别提供时 由客户端判定数据从哪里获取
			   get 请求只允许唯一参数? 由服务端决定给什么 给多少
			   直接将返回的数据装进组件的data容器?
			switch(type){
				case 'p':
					var path = '/static/api.json';
					break;
				case 'u':
					var path = '/static/api.json';
					break;
				default:
					alert("GET请求必须携带类型参数！")
			}
			*/

			//axios.get( URL_BASE + type +'6666.json' ).then( response => (this.data = response.data))
			axios.get( URL_BASE, { params: { id: 12345 } } ).then( response => (this.data = response.data))
			console.log('get data !')
		}
	}

/*
	get_ajax(type, id) {
		//return axios.get(URL_BASE + url).then((res) => {
		//Vue.set(this, name, res.data)
		//this.$emit('GET_AJAX_COMPLETE')
		//})
		var sss = { data:1, b:1, c:1 }
		return sss
		// 若是失败, 只调取错误提示, 取消动作
		// 若是成功, 返回标准值?
	}
*/
}