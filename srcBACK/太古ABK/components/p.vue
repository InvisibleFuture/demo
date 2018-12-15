<template>
	<div class="hello">
		<nav class="navs">
			<h1>{{ data.title + data.id }}</h1>

			<!-- 组 -->
			<ul>
				<li v-for="group in data.group">
					<h3>{{ group.name }}</h3>
					<ul>
						<li v-for="id in group.user">{{ data.user[ id ] }}</li>
					</ul>
					<ul>
						<li v-for="id in group.task">{{ data.task[ id ] }}</li>
					</ul>
				</li>
			</ul>

			<ul>
				<li
					v-for="tab in tabs"
					v-bind:key="tab.id"
					v-bind:class="['tab-button', { active: currentTab === tab.id }]"
					v-on:click="currentTab = tab.id"
					:title="tab.title"
				>{{ tab.name }}</li>
			</ul>
		</nav>

		项目结构<br>
		项目分组 - 大纲 / 组任务指派<br>
		主线计划与分支<br>

		<!-- 文档模型 / 项目细则计划存放 / 数据来源 -->
		<h1>示例项目</h1>
		<ul>
			<li>项目简介</li>
			<li>市场需求</li>
			<li>资质公关</li>
			<li>困扰阻碍</li>
			<li>解决方案</li>
			<li>运作组织结构(规划)</li>
			<li>上下游合作关系</li>
			<li>利益划分</li>
		</ul>

 
		<!-- 任务 | 未完成的, 已完成的, 待完成的 {{ data.group[ task.group ].name }} 列表时不需要关系式 -->
		<ul>
			<li v-for="task in data.task">
				{{ task.name }}
				<span v-if="task.status === 1">未解决</span>
				<span v-else-if="task.status === 2">执行中</span>
				<span v-else-if="task.status === 3">已完成</span>
				<span v-else-if="task.status === 4">失败(不能完成)</span>
				<span v-else-if="task.status === 5">取消</span>
				<span v-else>错误状态</span>
			</li>
		</ul>

		<hr>


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
				// 数据交换时直接填装的
				data: {
					id: 'noneaa',
					title: 'nonebb',
					composer: 'none',
					readme: '这是项目的自述文件',
					// 一个组可以有多个任务, 一个任务可以由多个角色完成, 一个角色可以参加多个组 ( 不必存储详细信息 )
					// 项目组是附属于项目的职务分组
					group:[
						//{ id:1, name: '亚特兰蒂斯', main:'任务组的主线', task:[1,2], user:[1,2] },
						//{ id:2, name: '亚特兰蒂斯', main:'任务组的主线', task:[1,2], user:[1,2] }
					],
					task:[
						//{ id:1, name: '看不见的未来', 'group'=>1, status: 'off' },
						//{ id:2, name: '看不见的未来', 'group'=>2, status: 'off' }
					],
					user:[
						//{ id:1, name:'橘纸', ex:'组关联角色而不是角色关联组' },
						//{ id:2, name:'白糖', ex:'组关联角色而不是角色关联组' }
					]
				},

				// 标签数据 不受交互数据影响 仅用于国际化 ( 标签页似乎不必要组件化, 组件化即改变route )
				currentTab: 'trunk',
				tabs: [
					{'id':'trunk', 'name':'大纲', 'title':'结构组成/计划任务与完成度记录(主)'},
					{'id':'issues', 'name':'issues', 'title':'问题与疏漏与解决方案(细节方案)(主)/困扰/反面意见与权衡'},
					{'id':'data', 'name':'文档', 'title':'文献资料与数据收集/文档/附件'},
					{'id':'contributor', 'name':'贡献者', 'title':'贡献者与职位结构'},
				]
			}
		},
		mounted: function () {
			this.fetchData()
		},
		methods: {
			fetchData: async function () {
				// 从 API 取得类型为 p 的某数据
				//this.apiGet('p', this.$route.params.id)
				// 从后端传来的数据并不能直接入库, 而是处理成结构数据? 但是这样就造成数据重复 所以应当直接入库
				//axios.get( URL_BASE, { params: { id: 12345 } } ).then( response => ( this.data = response.data ))
				//console.log('get data !')
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
