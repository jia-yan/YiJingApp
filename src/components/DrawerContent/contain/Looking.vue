<template>
	<div id="persondata">
		<div id="header">
			<header id="header-son" class="mui-bar mui-bar-nav">
				<a class="mui-icon mui-icon-arrowleft mui-pull-left my-icon" @click="goBack"></a>
				<h1 class="mui-title">我的看点</h1>
				<a class="mui-icon mui-icon-search mui-pull-right"></a>
			</header>
		</div>
		<div class="listgrounp">
			<card-care></card-care>
			<card-care></card-care>
			<card-care></card-care>
			<card-care></card-care>
			<card-care></card-care>
			<card-care></card-care>
			<card-care></card-care>
		</div>
		
	</div>
</template>

<script>
import CardCare from './CardCare.vue'

export default {
	name: 'Looking',
	data() {
		return {
			
		}
	},
	components: {
		CardCare
	},
	methods: {
		goBack() {
			this.$router.go(-1);
		}
	}
};
</script>

<style scoped="scoped">
	#persondata {
		z-index: 100;
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		overflow: auto;
		background-color: #F5F5F5;
	}
	.listgrounp{
		margin-top: 50px;
	}
	#header-son{
		background-color: #FFFFFF;
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
