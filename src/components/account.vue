<template>
	<div>
		<Header></Header>
		// 偏好设置类, 数据管理, 账号安全类, 缓存管理类
		// TODO 昵称, 摘要, 背景图像, 角色头像, 头衔, 关注/粉丝
		// 关注话题管理, 文章管理, 回复管理, 消息私信管理
	</div>
</template>

<script>
import Header from '@/components/account/header.vue'
export default {
	components: {
		Header
	},
	data() {
		return {
			user: {
				id: '',
				name: '',
				avatar: [],
				background: [],
				group: '',
				guild: '',
				follow: [],
				fans: [],
			},
			like: {},
		}
	}
}
</script>