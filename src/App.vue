<template>
	<div id="app">
		<header id="header">
			<nav>
				<ul class="nav">
					<li>
						<img src="http://www.xiaoyaozj.com/view/img/logo.png" style="height: 32px;">
					</li>
					<li v-for="item in navs" v-bind:key="item.id">
						<router-link :to="item.url" v-text="item.name"></router-link>
					</li>
				</ul>
			</nav>
			<user v-if="online"></user>
			<login v-else></login>
		</header>
		<!-- img src="./assets/logo.png" -->
		<main id="main">
			<transition name="fade" mode="out-in">
				<router-view />
			</transition>
		</main>
	</div>
</template>

<script>
	export default {
		name: 'app',
		components: {
			'user': () => import('./components/user'),
			'login': () => import('./components/login')
		},
		data() {
			return {
				online: this.$store.state.online,
				navs: [{
					id: 666,
					name: 'home',
					url: '/'
				},
				{
					id: 666,
					name: '路书',
					url: 'list3'
				},
				{
					id: 666,
					name: '社区',
					url: 'idea'
				},
				{
					id: 666,
					name: 'guild',
					url: 'guild'
				},
				{
					id: 666,
					name: 'work',
					url: 'work'
				},
				]
			}
		}
	}
</script>

<style lang="less">

/* 滚动槽 */
::-webkit-scrollbar {
	width: 6px;
	height: 6px;
}
::-webkit-scrollbar-track {
	border-radius: 3px;
	background: rgba(0,0,0,0.06);
	box-shadow: inset 0 0 5px rgba(0,0,0,0.08);
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
	border-radius: 3px;
	background: rgba(0,0,0,0.12);
	box-shadow: inset 0 0 10px rgba(0,0,0,0.2);
}

* {
	margin: 0;
	padding: 0;
    //transition: all 0.3s linear;
}
a {
	text-decoration: none;
}
a,
a:active {
	color: #000;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.2s;
}

/* .fade-leave-active, 2.1.8 版本以下 */
.fade-enter,
.fade-leave-to {
	opacity: 0;
}

body,
html {
	height: 100%;
	width: 100%;
	padding:0;
	margin:0;
	font-size: 12px;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	background: rgba(248, 249, 251, 1);
	height: 100%;
	width: 100%;
	overflow:auto;
}

header.mobile{}

header.pc{
	position: fixed;
}
@media screen and (max-width:1024px) {
	#header {
		padding: 20px;
	}
}
#header {
	padding: 0 32px;
	color: #fff;
	background-color: #3c4146;
	border-bottom-color: #202326;
	display: flex;
	justify-content: center;
	nav {
		//display: flex;
		//width: 1000px;
		//ul.nav:hover {
		//	// 为 list 增加 demo 标志
		//	> li:nth-child(2){
		//		position: relative;
		//	}
		//	> li:nth-child(2)::after {
		//		content: 'beta';
		//		background: #cc1414;
		//		position: absolute;
		//		left: 45px;
		//		top: 5px;
		//		font-size: 4px;
		//		border-radius: 3px;
		//		padding: 0 3px;
		//	}
		//}
		// 作为允许滚动的容器
		overflow-x: hidden; //scroll;
		overflow-y: hidden;
		white-space: nowrap;
		ul.nav {
			//flex: 1;
			//list-style: none;
			//margin: 0;
			//padding: 0;
			//display: flex;
			display: flex;
			align-items: center;
			flex-direction: row;
			list-style: none;
			padding: 0;
			margin: 0;
			li {
				padding: 0;
				margin: 0;

				a {
					display: block;
					padding: 1.5rem;
					color: #fff;
					border-radius: 3px;
					text-decoration: none;
					transition: all 0.3s linear;
				}
			}
			li:hover {
				a {
					color: #4fffff;
					background: rgba(150, 150, 150, 0.1);
					transition: all 0.3s linear;
				}
			}
		}

		ul:after {
			content: "";
			display: block;
			clear: both;
		}
	}
	.logo {
		font-size: 1rem;
		padding: 0;
		color: #24292e;
		background: #444;
	}
}

#footer {
	display: none;
	background: #ff1414;
}
</style>
