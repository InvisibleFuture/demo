<style lang="less" scoped>
span {
	height: 16px;
	font-weight: bold;
	cursor: pointer;
	display: inline-block;
	font-size: 12px;
	color: #4c4c4c;
}
</style>

<template>
	<span v-text="user.username"></span>
</template>

<script>
	export default {
		props: ['user']
	}
</script>