<style lang="less" scoped>
	div.card {
		margin: 0 0 10px;
		border-radius: 4px;
		color: #656565;
		background-color: #fff;
		position: relative;
		overflow: hidden;
		.user_head_div {
			background: #efefef;
			display: flex;
			padding: 10px;
			img {
				width: 64px;
				height: 64px;
				border-radius: 50%;
			}
			.ie2 {
				padding: 10px 0 0 10px;
			}
		}
		.follow_div {
			padding: 10px;
		}
	}
</style>

<template>
	<div class="card" @click.stop>
		<div class="user_head_div">
			<avatar :user="user"></avatar>
			<div class="ie2">
				<p>
					<name :user="user"></name>
					<span class="ie2">Lv&nbsp;12</span>
				</p>
				<p class="ie2">「今でもあなたは私の光。」</p>
			</div>
		</div>
		<div class="follow_div">
			<span id="post_detail_follow_btn" onclick="setRelation(this, '6294360860113072660')" class="follow_span" style="display: none;">关注</span>
			<span id="post_detail_user_login" onclick="do_login()" class="follow_span">关注</span>
			<p><span style="margin-right: 20px;">粉丝：3324</span><span>金币：0</span></p>
		</div>
	</div>
</template>

<script>
	import avatar from '@/components/user/avatar.vue'
	import name   from '@/components/user/name.vue'

	export default {
		props: ['user'],
		components: {
			avatar, name
		}
	}
</script>