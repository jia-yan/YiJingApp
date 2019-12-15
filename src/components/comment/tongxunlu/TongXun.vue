<template>
	<div id="tongxun">
		<search></search>
		<div>
			<message></message>
			<message></message>
			<message></message>
			<message></message>
			<message></message>
			<message></message>
			<message></message>
		</div>
		<div id="blank"></div>
	</div>
</template>

<script>
	import Search from './contain/Search.vue'
	import Message from './contain/Message.vue'
	export default {
		name: 'TongXun',
		components: {
			Search,
			Message
		}
	}
</script>

<style scoped="scoped">
	#tongxun{
		width: 100%;
		height: 100%;
		overflow: auto;
	}
	#blank{
		width: 100%;
		height: 120px;
	}
</style>
