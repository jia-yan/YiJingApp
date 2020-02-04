<template>
	<div id="header">
		<header id="header" class="mui-bar mui-bar-nav my-header">
			<a class="my-icon"><img src="./images/pic.png" alt=""></a>
			<!-- <h1 class="mui-title">第二页</h1> -->
			<div class="center-comment">
				<a class="my-icon my-icon-else"><img src="./images/pic.png" alt=""></a>
				<a class="my-icon my-icon-else my-icon-else"><img src="./images/pic.png" alt=""></a>
				<a class="my-icon my-icon-else"><img src="./images/pic.png" alt=""></a>
				<a class="my-icon my-icon-else"><img src="./images/pic.png" alt=""></a>
				<a class="my-icon my-icon-else"><img src="./images/pic.png" alt=""></a>
				<a class="my-icon my-icon-else"><img src="./images/pic.png" alt=""></a>
			</div>
			<a class="mui-icon mui-icon-extra mui-icon-extra-sweep mui-pull-right">
				<mt-actionsheet>
				</mt-actionsheet>
			</a>
			
		</header>
	</div>
</template>

<script>
	import Actionsheet from 'mint-ui'
	export default {
		name: 'FirstHeader',
		data() {
			return {
				
			}
		},
		components: {
			
		},
		methods: {
			
		}
	}
</script>

<style scoped="scoped">
	.my-header{
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #FFFFFF;
	}
	.my-header .center-comment{
		padding: 0 5px 0 25px;
		overflow: hidden;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.my-icon-else{
		margin: 0 2px;
	}
	.my-icon, .my-icon img{
		width: 30px;
		height: 30px;
		border-radius: 50%;
	}
	.mui-bar .mui-pull-left .mui-icon {
		padding-right: 5px;
		font-size: 28px;
	}
	.mui-bar .mui-btn {
		font-weight: normal;
		font-size: 17px;
	}
	.mui-bar .mui-btn-link {
		top: 1px;
	}
	.mui-icon{
		color: #2b85e4;
	}
</style>
