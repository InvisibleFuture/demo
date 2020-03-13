<style lang="less" scoped>
span {
	font-size: 12px;
	margin: 0 2px;
	padding: 1px 3px;
	background: rgba(253,76,134,1);
	color: #fffcdf;
	vertical-align: middle;
	transform: scale(0.85);
	border-radius: 3px;
	display: inline-block;
}
</style>

<template>
	<span v-text="user.groupname"></span>
</template>

<script>
	export default {
		props: ['user']
	}
</script>