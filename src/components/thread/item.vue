<style lang="less" scoped>
.thread {
	position: relative;
	word-wrap: break-word;
	background-color: #fff;
	a {
		outline: 0;
		text-decoration: none;
		line-height: 18px;
		color: #555555;
	}
	div.img {
		background-size: cover;
		width: 100%;
		height: 148px;
	}
	.subject {
		display: block;
		padding: 0 16px;
		margin: 10px 0;
		line-height: 1.35em;
		font-size: 12px;
		overflow: hidden;
		word-wrap: break-word;
		white-space: nowrap;
    	text-overflow: ellipsis;
	}
	.stats {
		display: block;
		padding: 0 15px;
		margin: 10px 0;
		color: #8c7e7e;
		line-height: 1.35em;
	}
	.convo {
		padding: 0 15px;
		margin: 10px 0;
		background: #fafafa;
		background: #fff;
		color: #999;
		border-top: 1px solid #f2f2f2;
		position: relative;
		font-size: 12px;
		.avatar {
			float: left;
			display: block;
			width: 34px;
			height: 34px;
			margin: 16px 0;
			background-color: #fff;
		}
		.infox {
			margin-left: 34px;
			margin-right: 30px;
			height: 51px;
			padding: 15px 0 0 10px;
			line-height: 1.5;
			.inner {
				overflow: hidden;
				height: 37px;
				.line {
					display: block;
					width: 100%;
					line-height: 18px;
					height: 18px;
					.author {
						float: left;
						max-width: 80px;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						display: inline-block;
						text-decoration: none;
						outline: 0;
						line-height: 18px;
						color: #9e7e6b;
					}
					.x {
						display: inline-block;
						overflow: hidden;
						padding-left: 5px;
					}
					.tag {
						max-width: 120px;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						display: inline-block;
						text-decoration: none;
						outline: 0;
						color: #9e7e6b;
						line-height: 18px;
						font-size: 12px;
					}
				}
			}
		}
	}
}
</style>

<template>
	<div class="thread">
		<a :href="'http://xiaoyaozj.com/thread-'+data.tid+'.htm'" target="_blank">
		<div class="img" :style="'background-image: url('+data.img+');'"></div>
		<p class="subject" v-text="data.subject"></p>
		<p class="stats">
			<span><svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3355"><path d="M512 416a96 96 0 1 0 0 192 96 96 0 0 0 0-192z m511.952 102.064c-0.016-0.448-0.064-0.864-0.096-1.296a8.16 8.16 0 0 0-0.08-0.656c0-0.32-0.064-0.624-0.128-0.928-0.032-0.368-0.064-0.736-0.128-1.088-0.032-0.048-0.032-0.096-0.032-0.144a39.488 39.488 0 0 0-10.704-21.536c-32.672-39.616-71.536-74.88-111.04-107.072-85.088-69.392-182.432-127.424-289.856-150.8-62.112-13.504-124.576-14.064-187.008-2.64-56.784 10.384-111.504 32-162.72 58.784-80.176 41.92-153.392 99.696-217.184 164.48-11.808 11.984-23.552 24.224-34.288 37.248-14.288 17.328-14.288 37.872 0 55.216 32.672 39.616 71.52 74.848 111.04 107.056 85.12 69.392 182.448 127.408 289.888 150.784 62.096 13.504 124.608 14.096 187.008 2.656 56.768-10.4 111.488-32 162.736-58.768 80.176-41.936 153.376-99.696 217.184-164.48 11.792-12 23.536-24.224 34.288-37.248 5.712-5.872 9.456-13.44 10.704-21.568l0.032-0.128a12.592 12.592 0 0 0 0.128-1.088c0.064-0.304 0.096-0.624 0.128-0.928l0.08-0.656 0.096-1.28c0.032-0.656 0.048-1.296 0.048-1.952l-0.096-1.968zM512 704c-106.032 0-192-85.952-192-192s85.952-192 192-192 192 85.968 192 192c0 106.048-85.968 192-192 192z" fill="" p-id="3356"></path></svg></span>
			<span v-text="data.views">0</span>
			<span><svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4378"><path d="M512 144.794c-247.162 0-447.527 161.007-447.527 359.62 0 82.45 34.532 158.417 92.605 219.078l-0.264 1.396-22.58 119.482c-4.195 22.198 17.213 40.612 38.534 33.146l114.764-40.186 27.887-9.765c59.339 23.353 126.052 36.469 196.58 36.469 247.162 0 447.527-161.007 447.527-359.62S759.162 144.794 512 144.794z" p-id="4379"></path></svg></span>
			<span v-text="data.posts">0</span>
			<span :style="'color:' + (data.like==1?'#cc1414':'#8c7e7e')"><svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2161"><path d="M705.985598 189.086519c-151.953807 9.209756-193.986109 128.930441-193.986109 128.930441s-42.033325-119.720685-193.986109-128.930441S-95.223247 466.899826 511.999488 830.66676C1119.2212 466.899826 857.939405 179.877787 705.985598 189.086519z" p-id="2162"></path></svg></span>
			<span v-text="data.likes">0</span>
		</p>
		</a>
		<div class="convo">
			<a href="http://xiaoyaozj.com/user-104169.htm">
				<img class="avatar" :src="data.user.avatar_url" :alt="data.user.username" :title="data.user.username">
			</a>
			<div class="infox">
				<div class="inner">
					<div class="line">
						<a class="author" v-text="data.user.username" :href="'http://xiaoyaozj.com/user-'+data.user.uid+'.htm'"></a>
						<span class="x">发表到</span>
					</div>
					<div class="line"><a class="tag" href="#">逍遥自驾</a></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['data'],
	}
</script>