<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h2>Essential Linkss</h2>
		<p>荒原~</p>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data () {
			return {
				msg: '求道者的',
				list: [
					{ id:'646865', name:'求道者的', time:'88565466' },
					{ id:'646865', name:'求道者的', time:'88565466' },
					{ id:'646865', name:'求道者的', time:'88565466' },
					{ id:'646865', name:'求道者的', time:'88565466' },
					{ id:'646865', name:'求道者的', time:'88565466' },
					{ id:'646865', name:'求道者的', time:'88565466' },
				]
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
	font-weight: normal;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
