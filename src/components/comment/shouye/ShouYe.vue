<template> 
	<div id="shouye">
		<shouye-swipe></shouye-swipe>
		<work-title></work-title>
		<div id="work-contain">
			<work-contain></work-contain>
			<work-contain></work-contain>
			<work-contain></work-contain>
			<div id="blank"></div>
		</div>
	</div>
	
</template>

<script>
	import WorkTitle from './work/WorkTitle.vue'
	import ShouyeSwipe from './contain/ShouyeSwipe.vue'
	import WorkContain from './work/WorkContain.vue'
	
	export default {
		name: 'ShouYe',
		components: {		
			WorkTitle,
			ShouyeSwipe,
			WorkContain
		}
	}
</script>

<style scoped="scoped">
	#shouye{
		width: 100%;
		height: 100%;
		/* height: auto; */
		overflow: auto;
		/* overflow-y: scroll; */
	}
	#shouye #work-contain{
		width: 100%;
		height: 100%;
	}
	#shouye #blank{
		width: 100%;
		height: 120px;
	}
</style>
