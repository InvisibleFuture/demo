<template>
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
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				navs: [{
					id: 666,
					name: 'home',
					url: '/home'
				},
				{
					id: 666,
					name: 'index',
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

<style lang="less" scoped>
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
</style>