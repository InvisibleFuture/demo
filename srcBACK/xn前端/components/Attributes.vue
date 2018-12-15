<template>
	<div class="windows"  v-bind:style="{width: width+'px', height:height+'px', top:top+'px', left:left+'px'}">
		<header>
			yameite
		</header>

		<slot></slot>

		<footer>
			tanaru
		</footer>
	</div>
</template>

<!-- 降低复用率, 避免耦合件 -->

<script>
	export default {
		name: 'Attributes',
		data () {
			return {
				top:    20,
				left:   30,
				width:  280,
				height: 300
			}
		}
	}
</script>

<style>
.windows {
    position: fixed;
    padding: 8px;
    border-radius: 3px;
    color: #fff;
    background: rgba(100,100,100,.8);
}
</style>