<template>
	<img :src="user.avatar_url" :alt="user.username" :title="user.username">
</template>

<script>
	export default {
		props: ['user']
	}
</script>