<template>
	<div class="idea">
		<h1>{{ msg }}</h1>
		<h2>idea => project | idea want vision | 农业 养殖 交通 通讯 水利 环境 能源 :: 专利标记 版权标记 开源共享理念与之冲突</h2>
		<ul v-if="list.length" class="plist">
			<li v-for="item in list">
				<router-link :to="{ name: 'p', params: { id: item.id }}">
					<img v-if="item.img.length" :src="item.img">
					<p>{{ item.name }}</p>
				</router-link>
			</li>
		</ul>
		<p>关于科研类, 有方向, 有目的, 有突破口的研发方式 | 技术研发</p>
		<p>产品类, 有经验的 改进方式 | 实践总结</p>
		<p>两者相同, 都需要利益关系维持才能运作,
			即 贡献时间精力参与事务需要获得利益来源并保障基本环境与生态,
			同时方向主导者也是为了利益诉求
			有无娱乐向导性的?
		</p>
		<p>认知错觉/ 利益是维持生存的基本, 荣耀是拉开贫富差距的根源</p>
		<p>了解 > 实验 > 数据 >　调参实验<br>
			研发应是已稳定输出的厂家在做的事，　但厂家不会将研发数据共享<br>
			相同地，　个人研发者若是为谋利，　亦不会共享<br>
			公共平台价值在于经验交汇交换, ... <br>
			git 源码何不具保密价值? 由于过多? 理想产品型? 共享者有利可图, 此非一次性使用的经验<br>
			技术细节是一次性使用的经验, so..  工具与实例<br>
			其实都不缺人.<br>
			缺少的是消费力, 但增加消费力并不能增加其创造力, 反而贬值自身持有资产<br>
			能够改变的只是对方行为方式与工作状态或类型<br>
			营销促进消费? 能够带动其参与创造价值? 如贷款压力<br>
			似乎是扭曲的<br>
			于是 "制造产品" 目的为何?<br>
			物资 技术 人力 能源 - NNN<br>
			
		</p>
		<p>理想 - 实质优先权</p>
		<p>"苟富贵, 莫相忘"</p>
		<p>故 - 不能以利益本身为目的, 亦不可以商业项目作为出发点</p>

		<p>幻境永驻 / 如何从理想世界  x 乌托邦 / 如何</p>
		<p>排除, 隔离, 吸引, 提纯, 结晶</p>
		<p>使想法共享, 使想法执行, 使项目可升级可维护, 以目的为基准</p>
		<div>
			<h2>建设世界架构::必须是可拆解可耦合的</h2>
			世界结构
			逻辑结构
			数据结构
			交换结构
			记录结构
			<ul>
				<li>角色与角色主页/关注与参与与收藏</li>
				<li>动机/项目/事件/目标<li>
				<li>世界组构/认知/数据</li>
				<li>u/p: wiki</li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
		<p>先创建生态环境, 再创建运作结构</p>
		<p>避免使用狭义定量, 你//需要是怎样的//人</p>
	</div>
</template>

<!--
	img 取自 静态资源服务器, Nginx 中静态资源设置为优先级最高, 故不必增加特殊前缀来判断资源类型, 但可用前缀分区分片
	前端判断图像是否丢失, 以避免由于图像丢失造成的版面混乱
	项目状态/ 活跃度/ 灰蓝绿红
-->

<script>
	export default {
		name: 'HelloWorld',
		data () {
			return {
				msg: 'idea of want of vision',
				list: [
					{ id: '646865', name: '能源和新能量耗散', img: '2333.png', time: '88565466' },
					{ id: '646865', name: '糖水充电', img: '2333.png', time: '88565466' },
					{ id: '646865', name: '无摩擦力轮轴', img: '2333.png', time: '88565466' },
					{ id: '646865', name: '行走的叉梯', img: '2333.png', time: '88565466' },
					{ id: '646865', name: '饰品', img: '2333.png', time: '88565466' },
					{ id: '646865', name: '土层覆盖式散播机', img: '', time: '88565466' },
				]
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.idea {

}

.idea h1, h2 {
	font-weight: normal;
}
.idea ul {
	list-style-type: none;
	padding: 0;
}
.idea li {
	display: inline-block;
	margin: 0 10px;
}
.idea a {
	color: #42b983;
}
</style>
