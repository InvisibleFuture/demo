<style lang="less" scoped>
ul {
	width: 100%;
	max-width: 1280px;
	list-style: none;
	margin: 0px auto;
	padding: 0px;
	//transition: all 1s linear 0.3s;
	transition: all 0.3s linear;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	li {
		padding: 0;
		margin: 8px;
		overflow: hidden;
		width: 236px;
		border-radius: 3px;
		font-size: 12px;
		background-color: #fff;
		transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02), 0 4px 8px rgba(0, 0, 0, 0.02);
	}
}
</style>

<template>
	<ul>
		<li v-for="item in data" v-bind:key="item.tid">
			<thread-item :data="item"></thread-item>
		</li>
	</ul>
</template>

<script>
	import ThreadItem from "@/components/thread/item.vue"
	export default {
		components: {
			ThreadItem
		},
		props: ['data'],
	}
</script>