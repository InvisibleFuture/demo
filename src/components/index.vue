<style lang="less" scoped>
ul.navbar {
	display: flex;
	justify-content: center;
	list-style: none;
	li {
		padding: 3px 30px;
		font-size: 16px;
		font-weight: 400;
	}
}
.active {
	color: #1a7129;
	font-weight: bold;
	border-bottom: 2px solid #1a7129;
}
.end {
	display: flex;
	justify-content: center;
	padding: 20px 0px;
}
.sec {
	display: flex;
	justify-content: center;
	> div {
		padding: 20px;
		> div {}
		> ul {
			list-style: none;
			display: flex;
			>li {
				padding: 2px 8px;
				margin: 0 4px;
				background: #efefef;
				border-radius: 10px;
			}
		}
	}
}
</style>

<template>
	<div>
	<!--
	<vue-tabs-swiper v-model="value" ref="tabsSwiper" tab-font-weight="bold" tab-color="#484848" tab-active-color="#3189F4">
		<thread-list tab-label="最新推荐"></thread-list>
		<thread-list tab-label="最新线路"></thread-list>
	</vue-tabs-swiper>
	<thread-list tab-label="最新推荐"></thread-list>
	<thread-list tab-label="最新线路"></thread-list>-->
	<div class="sec">
		<div class="start">
			<div>
				<span>出发地</span>
				<span style="color:#333;font-size:1.5rem;" v-text="params.startname">全部</span>
				<span style="color:#666;">&nbsp;&nbsp;&nbsp;当前城市</span>
				<span style="padding: 2px 8px;margin: 0 4px;background: #efefef;border-radius: 10px;"
				@click="params.page=1;params.start=params.CurrentLocation;params.startname=params.CurrentLocationName;getsecrb(1)" v-text="params.CurrentLocationName"></span>
			</div>
			<ul>
				<li @click="params.page=1;params.start='';params.startname='不限';Unlimited()">不限</li>
				<li @click="params.page=1;params.start=310000;params.startname='上海市';getsecrb(1)">上海</li>
				<li @click="params.page=1;params.start=440100;params.startname='广州市';getsecrb(1)">广州</li>
				<li @click="params.page=1;params.start=500000;params.startname='重庆市';getsecrb(1)">重庆</li>
				<li @click="params.page=1;params.start=440300;params.startname='深圳市';getsecrb(1)">深圳</li>
				<li @click="params.page=1;params.start=610100;params.startname='西安市';getsecrb(1)">西安</li>
				<li @click="SelectCity('start')">更多</li>
			</ul>
		</div>

		<div class="node">
			<div>
				<span>目的地和途经</span>
				<span style="color:#333;font-size:1.5rem;" v-text="params.nodename"></span>
			</div>
			<ul>
				<li @click="params.page=1;params.node='';params.nodename='不限';Unlimited()">不限</li>
				<li @click="params.page=1;params.node=370200;params.nodename='青岛';getsecrb(1)">青岛</li>
				<li @click="params.page=1;params.node=510100;params.nodename='成都';getsecrb(1)">成都</li>
				<li @click="params.page=1;params.node=140700;params.nodename='平遥';getsecrb(1)">平遥</li>
				<li @click="params.page=1;params.node=150900;params.nodename='乌兰察布';getsecrb(1)">乌兰察布</li>
				<li @click="params.page=1;params.node=654300;params.nodename='喀纳斯';getsecrb(1)">喀纳斯</li>
				<li @click="SelectCity('node')">更多</li>
			</ul>
		</div>
	</div>

	<Swiper @click="openlink" v-show="navbarshow"
		:clientW="1100" :clientH="350" :autoPlayDelay="5000"
		style="margin: 0 auto 32px auto;"
		:urlList="[
			'http://xiaoyaozj.com/view/img/old_user.png',
			//'http://xiaoyaozj.com/view/img/old_user.png',
			//'http://xiaoyaozj.com/view/img/old_user.png'
		]"
	></Swiper>
	
	<ul class="navbar" v-show="navbarshow">
		<li @click="getnewrb(1)" :class="{active:value=='newrb'}">最新路线</li>
		<li @click="gethotrb(1)" :class="{active:value=='hotrb'}">热门推荐</li>
	</ul>

	<thread-list :data="rblist"></thread-list>
	<div v-if="end" class="end">
		<p>被你看光了~</p>
	</div>
	<!-- thread-page -->
	<!--ul class="thread-page">
		<li v-for="page in pages" v-text="page"></li>
	</ul-->

</div>
</template>

<script>
	import 'vue-active-swiper/dist/VueActiveSwiper.css'
	import { Swiper, SwiperItem } from 'vue-active-swiper'

	//import VueTabsSwiper from "vue-tabs-swiper"
	import ThreadList from "@/components/thread/list.vue"
	export default {
		components: {
			//VueTabsSwiper,
			ThreadList,
			Swiper,
			SwiperItem
		},
		data() {
			return {
				navbarshow: true,
				scrolllock: false,
				params: {
					CurrentLocation: 310000,
					CurrentLocationName: '上海',
					start: '',
					startname: '不限',
					node: '',
					nodename: '不限',
					page: 1,
				},
				pages: 10,
				value: 'newrb',
				newrb: [],
				hotrb: [],
				secrb: [],
				rblist: [],
				end: false,
			}
		},
		mounted() {
			this.getnewrb() // 初始化默认预载 newrb
			this.onscroll() // 使用滚动条监听翻页
			this.getcity()  // 初始定位所在城市
		},
		methods: {
			openlink() {
				window.open("https://tieba.baidu.com/p/6427588291?pn=0", "_blank")
			},
			Unlimited() {
				if(this.params.start=='' && this.params.node==''){
					//this.rblist = []
					this.params.page = 1
					this.pages = 100
					this.navbarshow = true
					this.getnewrb(1)
					return
				}
				this.getsecrb(1)
			},
			SelectCity(se) {
				if (this.params.lock) { return false }
				AMapUI.loadUI(['misc/MobiCityPicker'], (MobiCityPicker) => {
					var cityPicker = new MobiCityPicker({
						//topGroups: ..., // 顶部城市列表
					});
					//监听城市选中事件
					cityPicker.on('citySelected', (cityInfo) => {
						cityPicker.hide();
						console.log(cityInfo);
						this.params.page = 1
						if (se == 'start') {
							this.params.start = cityInfo.adcode
							this.params.startname = cityInfo.name
						}else{
							this.params.node = cityInfo.adcode
							this.params.nodename = cityInfo.name
						}
						//this.searchRoadbook(this.params)
						this.params.lock = false
						this.getsecrb(1)
					})
					//显示城市列表，可以用某个click事件触发
					//start.onclick = () => {
						this.params.lock = true
						cityPicker.show();
					//}
				})
			},
			getcity() {
				AMap.plugin('AMap.CitySearch', () => {
					var citySearch = new AMap.CitySearch()
					citySearch.getLocalCity((status, result) => {
						if (status === 'complete' && result.info === 'OK') {
							//this.params.start = result.adcode
							//this.params.startname = result.city
							this.params.CurrentLocation = result.adcode
							this.params.CurrentLocationName = result.city
						}
					})
				})
			},
			gethotrb(page) {
				if(page==1) {
					this.params.page = 1
					this.pages = 100
				}
				fetch(`http://xiaoyaozj.com/index-1-1.htm?page=${page}&ajax=1`)
				.then(response => response.json())
				.then(data => {
					console.log(data.message)
					if(page==1) this.rblist = []
					if(data.message.length == 0) this.pages = page
					data.message = this.conversion(data.message)
					this.rblist = this.rblist.concat(data.message)
					this.value = 'hotrb'
					this.scrolllock = false
				})
			},
			getnewrb(page) {
				if(page==1) {
					this.params.page = 1
					this.pages = 100
				}
				fetch(`http://xiaoyaozj.com/index.htm?page=${page}&ajax=1`)
				.then(response => response.json())
				.then(data => {
					console.log(data.message)
					if(page==1) this.rblist = []
					if(data.message.length == 0) this.pages = page
					data.message = this.conversion(data.message)
					this.rblist = this.rblist.concat(data.message)
					this.value = 'newrb'
					this.scrolllock = false
				})
			},
			getsecrb(page) {
				if(page==1) {
					this.params.page = 1
					this.pages = 100
					this.navbarshow = false
				}
				window.console.log(`http://xiaoyaozj.com:8080/?start=${this.params.start}&city=${this.params.node}&page=${page}`)
				fetch(`http://xiaoyaozj.com:8080/?start=${this.params.start}&city=${this.params.node}&page=${page}`)
				.then(response => response.json())
				.then(data => {
					console.log(data.message)
					if(page==1) this.rblist = []
					if(data.message.length == 0) this.pages = page
					data.message = this.conversion(data.message)
					this.rblist = this.rblist.concat(data.message)
					this.value = 'secrb'
					this.scrolllock = false
				})
			},
			conversion(data) {
				var server = 'http://xiaoyaozj.com/'
				var reg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+).)+([A-Za-z0-9-~\/])+$/
				data.forEach(item => {
					item.img = reg.test(item.img) ? item.img : (server+item.img)
					item.user_avatar_url = reg.test(item.user_avatar_url) ? item.user_avatar_url : (server+item.user_avatar_url)
					item.user.avatar_url = reg.test(item.user.avatar_url) ? item.user.avatar_url : (server+item.user.avatar_url)
					item.url = reg.test(item.url) ? item.url : (server+item.url)
					item.user_url = reg.test(item.user_url) ? item.user_url : (server+item.user_url)
				})
				return data
			},
			// 初始化监听滚动条
			onscroll() {
				window.onscroll = () => {
					if (this.getScrollTop() + this.getWindowHeight() > this.getScrollHeight()-300) {
						if (!this.scrolllock) {
							console.log("you are in the bottom!")
							this.scrolllock = true
							this.params.page++
							console.log(this.params.page)
							if (this.value == 'newrb') {
								(this.params.page<=this.pages)?this.getnewrb(this.params.page):this.end=true
							}
							if (this.value == 'hotrb') {
								(this.params.page<=this.pages)?this.gethotrb(this.params.page):this.end=true
							}
							if (this.value == 'secrb') {
								(this.params.page<=this.pages)?this.getsecrb(this.params.page):this.end=true
							}
							//(this.params.page<=this.pages)?this.searchRoadbook(this.params):console.log("end")
						}
					}
				}
			},
    		//滚动条在Y轴上的滚动距离
    		getScrollTop() {
    			var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    			if (document.body) {
    				bodyScrollTop = document.body.scrollTop;
    			}
    			if (document.documentElement) {
    				documentScrollTop = document.documentElement.scrollTop;
    			}
    			scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    			return scrollTop;
    		},
    		//文档的总高度
    		getScrollHeight() {
    			var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
    			if (document.body) {
    				bodyScrollHeight = document.body.scrollHeight;
    			}
    			if (document.documentElement) {
    				documentScrollHeight = document.documentElement.scrollHeight;
    			}
    			scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    			return scrollHeight;
    		},
    		//浏览器视口的高度
    		getWindowHeight() {
    			var windowHeight = 0;
    			if (document.compatMode == "CSS1Compat") {
    				windowHeight = document.documentElement.clientHeight;
    			} else {
    				windowHeight = document.body.clientHeight;
    			}
    			return windowHeight;
    		},
    	},
    }
</script>