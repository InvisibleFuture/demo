<style lang="less" scoped>
header {
	padding: 0 16px;
	color: #fff;
	background-image: linear-gradient(0deg, #22ab39, #11561d);
	display: flex;
	justify-content: space-between;
	//background-color: #3c4146;
	//border-bottom-color: #202326;
}
@media screen and (max-width:1024px) {
	#header {
		//padding: 20px;
	}
}
</style>

<template>
	<div id="app">
		<header id="header">
			<navbar></navbar>
			<userinfo></userinfo>
			<!--avatarmy></avatarmy-->
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
		components: {
			'userinfo': () => import('@/components/user'),
			'usercookie': () => import('@/components/usercookie'),
			//'avatarmy': () => import('@/components/user/avatarmy'),
			'navbar': () => import('@/components/navbar/nav'),
		},
		data() {
			return {
				online: this.$store.state.online,
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
	padding:0;
	margin:0;
	font-size: 12px;
	color: #2c3e50;
	background: rgba(248, 249, 251, 1);
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	overflow:auto;
}

#footer {
	display: none;
	background: #ff1414;
}
</style>
