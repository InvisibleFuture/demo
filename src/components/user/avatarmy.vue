<style lang="less" scoped>
.user {
	position: relative;
	//padding: 12px;
	display: flex;
	align-items: center;
	img {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		padding-right: .5rem;
	}
	.ex {
		position: relative;
		display: flex;
		align-items: center;
		ul {
		display: none;
		list-style: none;
		margin: 0;
		padding: 10px;
		border-radius: 5px;
		z-index: 10;
		position: absolute;
		top: 50px;
		left: -80px;
		background: #555;
		}
	}
}
</style>
<template>
	<div>
		<div v-if="online" class="user">
			<message v-if="online"></message>
			<div class="ex">
				<img :src="user.avatar_url" :alt="user.username" :title="user.username">
				<span v-text="user.username"></span>
				<ul>
					<li>个人中心</li>
					<li>我的路书</li>
				</ul>
			</div>
		</div>
		<div v-else>
			<user-login></user-login>
			<p v-text="online"></p>
		</div>
	</div>
</template>

<script>
	export default {
		components: {
			//'avatar': () => import('@/components/user/avatar'),
			'message': () => import('@/components/user'),
			'user-login': () => import('@/components/login')
		},
		data() {
			return {
				//online: this.$store.state.online, //传递无效?
				//user: this.$store.state.user,
			}
		},
		computed: {
			online () {
				return this.$store.state.online
			},
			user () {
				return this.$store.state.user
			}
		}
	}
</script>
