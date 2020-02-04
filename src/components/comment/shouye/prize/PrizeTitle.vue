<template>
	<div id="prize-title">
		<div class="title">
			<span class="title-cn">获奖作品</span>
			<span>prize work</span>
		</div>
		<div class="prize-more">
			<span>全部</span>
			<span class="mui-icon mui-icon-arrowright" ></span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'PrizeTitle',
		components: {
				
		}
	}
</script>

<style scoped="scoped">
	#prize-title{
		height: 1.2rem;
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 30px 0 24px 0;
		border-top: 1px solid #EEEEEE;
		background-color: #FFFFFF;
	}
	#prize-title .title{
		width: 170px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	#prize-title .title .title-cn{
		font-size: 18px;
		/* font-weight: 900; */
		font-style: italic;
		margin-left: 5px;
		position: relative;
		top: -3px;
	}
	#prize-title .title span{
		margin: 0 2px;
		font-size: 15px;
		font-weight: 900;
	}
	#prize-title .prize-more{
		font-size: 14px;
		width: 54px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	#prize-title .prize-more span:nth-child(2){
		width: 25px;
		height: 25px;
	}
</style>

