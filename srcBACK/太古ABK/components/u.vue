<template>
	<div class="hello">
		<nav class="navs">
			<h1>user 他人亦或自己</h1>
			<p>
				概略信息 头像昵称身份角色签注(对外公开的)<br>
				活跃度 (关注与被关注) 职务 标签 等级<br>
				能力等级 (自我评定)<br>
				参与团体 归属<br>
				偏好设置 (私有的, 但对外生效的)
			</p>
			<p>
				作品集(公开或不公开)<br>
				作品列表<br>
				上载的资源
			</p>
			<p>
				参与的话题或项目(公开或不公开)<br>
				关注的话题或项目(公开或不公开)<br>
				收藏的资源或上载的资源(公开或不公开 可与话题项目合并)<br>
			</p>
			<p>作品或是收集关注参与的话题</p>
			<p>
				角色信息与记录与偏好设置(允许注销账号, 但必须能够证明是本人注册的, 身份指纹)<br>
				图像或附件唯一, 可通过秒传方式判定, 无效的资源及时清理, 并自动替换回收的id序列<br>
				可从本地判断分仓信息, 以指向不同仓库地址获取资源<br>
			</p>
			<p>
				角色 / 基本信息 内容记录与活动记录 收藏与存储<br>
				设置 / 联络方式 个性化(偏好) 隐私设置 注销账号<br>
				细节设置项不应存在, 可选性堆叠入基本模型中
			</p>
			<ul>
				<li v-for="tab in tabs" v-bind:key="tab.id" v-bind:class="['tab-button', { active: currentTab === tab.id }]" v-on:click="currentTab = tab.id">{{ tab.name }}</li>
			</ul>
		</nav>
		<keep-alive>
			<component v-bind:is="currentTabComponent" class="tab"></component>
		</keep-alive>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data () {
			return {
				currentTab: 'trunk',
				tabs: [
					{'id':'trunk', 'name':'结构组成/计划任务与完成度记录(主)'},
					{'id':'issues', 'name':'问题与疏漏与解决方案(细节方案)(主)/困扰/反面意见与权衡'},
					{'id':'data', 'name':'文献资料与数据收集/文档/附件'},
					{'id':'contributor', 'name':'贡献者与职位结构'},
				]
			}
		},
		computed: {
			currentTabComponent: function () {
				return 'tab-' + this.currentTab.toLowerCase()
			}
		},
		components: {
			'tab-trunk': () => import('./p-trunk'),
			'tab-issues': () => import('./p-issues'),
			'tab-data': () => import('./p-data'),
			'tab-contributor': () => import('./p-contributor')
		}
	}
</script>

<style>
.navs {
	font-weight: normal;
	padding: 1rem;
	padding-bottom: 0;
	background: #fafbfc;
	border-bottom: 1px solid #e1e4e8;
}
.navs>h1 { margin:0; }
.navs>ul { list-style: none; }
.navs>ul:after{content:"";display:block;clear:both;}
.navs>ul>li { float: left; padding: 1rem; margin: .5rem; }
.navs>ul>li>a { color: #42b983; }
</style>
