<template>
	<ul>
		<li v-for="item in postlist" v-bind:key="item.id">
			<div><img :src="item.user.avatar_url" /></div>
			<div>
				<span class="name">{{ item.user.username }}</span>
				<span class="level">{{ item.user.groupname }}</span>
				<span class="master" v-if="item.user.uid == thread.uid">Master</span>
				<span class="floor"># {{ item.floor }}</span>
				<p>{{ item.message }}</p>
				<time>{{ item.create_date_fmt }}</time>
			</div>
		</li>
		<li v-if="login">
			<div><img :src="thread.user.avatar_url" onclick="gotoUserPage('/user6294360860113072660')" :alt="thread.user.username"></div>
			<div style="display:flex; flex-direction: column;">
				<textarea id="textarea" v-model="form.message" placeholder="内容" name="message" v-on:keyup.ctrl.enter="submit"></textarea>
				<div id="textareas">
					<button title="Alt + Enter" @click="submit">回复</button>
					<!--span>1 / 1024</span-->
				</div>
			</div>
		</li>
	</ul>
</template>

<script>
	export default {
		props: ['postlist'],
		data: function () {
			return {
				login: true,
				id: 0,
			}
		},
		methods: {
			submit: function() {
				if (this.form.message == '' || this.form.lock) {
					return
				}
				this.form.lock = true // 锁定发帖按钮, 防止重复发帖

				let token = this.$store.state.token
				let server = this.$store.state.server.master.domain
				let bodyFormData = new FormData()
				bodyFormData.set('tid', this.thread.tid)
				bodyFormData.set('message', this.form.message)
				bodyFormData.set('doctype', this.form.doctype)
				bodyFormData.set('return_html', this.form.return_html)
				bodyFormData.set('quotepid', this.form.quotepid)
				axios({
					method: 'post',
					url: server + '/?post-create.htm?ajax=1&bbs_token=' + token,
					data: bodyFormData,
					headers: {'Content-Type': 'multipart/form-data'}
				}).then(r => {
					// 登陆失效会返回 302 重定向且指向 login.html, 待前端完全剥离, 使之返回 401
					console.log(r.data)
					if (r.data.code == "0") {
						r.data.message.user_avatar_url = server+'/'+r.data.message.user_avatar_url
						r.data.message.user.avatar_url = server+'/'+r.data.message.user.avatar_url
						this.postlist.push(r.data.message)
						this.form.message = '' // 只在发帖成功时才清空输入框
						this.form.lock = false // 解锁发帖按钮
					}else{
						// 返回了错误信息, 回收已经添加的元素
						this.form.lock = false // 失败也解锁
					}
				})
				// 当返回的http状态码错误时 回收已经添加的元素
				this.form.lock = false // 解锁发帖按钮
			}
		}
	}
</script>
