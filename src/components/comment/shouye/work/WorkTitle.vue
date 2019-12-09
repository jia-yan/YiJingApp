<template>
	<div id="work-title">
		<div class="title">
			<span class="title-cn">作品</span>
			<span>work</span>
		</div>
		<div class="work-more">
			<span>更多</span>
			<span class="mui-icon mui-icon-arrowright" ></span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'WorkTitle',
		components: {
				
		}
	}
</script>

<style scoped="scoped">
	#work-title{
		height: 2.5rem;
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 8px 0;
		border-top: 1px solid #EEEEEE;
	}
	#work-title .title{
		width: 100px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	#work-title .title .title-cn{
		font-size: 18px;
		/* font-weight: 900; */
		font-style: italic;
		margin-left: 5px;
		position: relative;
		top: -3px;
	}
	#work-title .title span{
		margin: 0 2px;
		font-size: 15px;
		font-weight: 900;
	}
	#work-title .work-more{
		font-size: 14px;
		width: 54px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	#work-title .work-more span:nth-child(2){
		width: 25px;
		height: 25px;
	}
</style>
