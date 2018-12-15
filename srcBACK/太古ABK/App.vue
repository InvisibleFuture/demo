<template>
	<div id="app">
		<header>
			<ul class="nav">
				<li><router-link to="/">Home</router-link></li>
				<!-- 同类型 相合并到主页展示 故顶部无需 nav 条 -->
				<li><router-link to="/areas">areas</router-link></li>
				<li><router-link to="/project">project</router-link></li>
				<li><router-link to="/idea">idea</router-link></li>
				<li><router-link to="/want">want</router-link></li>
				<li><router-link to="/vision">vision</router-link></li>
			</ul>
			<!-- 此处判断角色登录状态 快捷键 i -->
			<ul class="user">
				<li title="动态通知/ 事务通知/ 声音开关">通知</li>
				<li title="提案/ 设想/ 思路">创建</li>
				<li title="角色/ 角色属性数据 / 角色中心/设置包括声音/语言"><img src="./assets/logo.png"></li>
			</ul>
		</header>
		<router-view/>
	</div>
</template>

<script>

export default {
	name: 'App'
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	/*margin-top: 60px;*/
}
html, body { font-size:12px; padding:0; margin:0; }
header { display: flex; color: #fff; background-color: #3c4146; border-bottom-color: #202326; }
header>ul { flex: 1; list-style: none; margin: 0; padding: 0; }
header>ul:after{ content:"";display:block;clear:both; }
header>ul>li { float: left; padding: 0; margin: 0; }
header>ul>li>a { display: block; padding: 1.5rem 1.5rem; color: #fff; text-decoration: none; }
.user>li { float: right; }
.user>li>img { width:32px; height:32px; }
.logo { font-size: 1rem; padding: 0; color: #24292e; background: #444; }
</style>