<template>
	<div class="hello">
		<h2>{{ data.title }}</h2>
		<p>待解决 | 执行中 | 已完成 | 拒绝(失败或不能完成)</p>
		<ul>
			<li v-for="task in evenNumbers">{{ task.name }}</li>
		</ul>
		<p>荒原~</p>
	</div>
</template>

<script>
	export default {
		name: 'p-issues',
		data () {
			return {
				// 数据交换时直接填装的
				data: {
					id: 'none',
					title: 'is issues list',
					composer: 'none',
					readme: '这是项目的自述文件',
					// 一个组可以有多个任务, 一个任务可以由多个角色完成, 一个角色可以参加多个组 ( 不必存储详细信息 )
					// 项目组是附属于项目的职务分组
					group:[
						//{ id:1, name: '亚特兰蒂斯', main:'任务组的主线', task:[1,2], user:[1,2] },
						//{ id:2, name: '亚特兰蒂斯', main:'任务组的主线', task:[1,2], user:[1,2] }
					],
					task:[
						{ id:1, name: '1看不见的未来', 'group':1, status: 1 },
						{ id:2, name: '2看不见的未来', 'group':1, status: 1 },
						{ id:3, name: '3看不见的未来', 'group':1, status: 1 },
						{ id:4, name: '4看不见的未来', 'group':1, status: 2 },
						{ id:5, name: '5看不见的未来', 'group':1, status: 2 },
						{ id:6, name: '6看不见的未来', 'group':1, status: 3 },
						{ id:7, name: '7看不见的未来', 'group':2, status: 4 }
					],
					taskdef:1
				},
				taskdef:1
			}
		},
		computed: {
			evenNumbers: function () {
				return this.data.task.filter(function (item) {
					return item.status === data.taskdef
				})
			}
		},
		mounted: function () {
			//this.fetchData()
		},
		methods: {
			fetchData: async function () {
				// 从 API 取得类型为 p 的某数据
				this.apiGet('p', this.$route.params.id)
				// 从后端传来的数据并不能直接入库, 而是处理成结构数据? 但是这样就造成数据重复 所以应当直接入库
			}
		}

	}
</script>