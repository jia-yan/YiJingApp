<template>
	<div id="header">
		<header id="header-son" class="mui-bar mui-bar-nav">
			<a class="mui-icon mui-icon-bars mui-pull-left"></a>
			<h1 class="mui-title">第三页</h1>
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
	#header-son{
		background-color: #FFFFFF;
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
