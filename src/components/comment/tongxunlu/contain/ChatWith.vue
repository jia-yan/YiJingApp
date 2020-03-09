<template>
	<div id="persondata">
		<div id="header">
			<header id="header-son" class="mui-bar mui-bar-nav">
				<a class="mui-icon mui-icon-arrowleft mui-pull-left my-icon" @click="goBack"></a>
				<h1 class="mui-title">Fighting</h1>
				<!-- <a class="mui-icon mui-icon-search mui-pull-right"></a> -->
			</header>
		</div>
		
		<div class="navbar">
			
		</div>
	</div>
</template>

<script>

import { Navbar, TabItem } from 'mint-ui'
import { Cell } from 'mint-ui'


export default {
	name: 'ChatWith',
	data() {
		return {
			
		}
	},
	components: {
		Navbar,
		TabItem,
		Cell,
	
	},
	methods: {
		goBack() {
			this.$router.go(-1);
		}
	}
};
</script>

<style scoped="scoped">
	
	 
	  
	  #app {
	    overflow: hidden;
	  }
	
	.color-icon{
		color: #E8E8E8;
	}
	.mui-icon[data-v-401a808e] {
	    color: #d3d3d3;
	}
	#persondata {
		z-index: 100;
		width: 100%;
		height: 1000px;
		position: fixed;
		top: 0;
		overflow: auto;
		background-color: #F5F5F5;
	}
	.demo-list-wrap {
	  width: 100%;
	  max-width: 360px;
	  overflow: hidden;
	}
	#header-son{
		background-color: #FFFFFF;
	}
	.navbar{
		margin-top: 50px;
	}	
	.navbarfix{
		background-color: #FFFFFF;
		z-index: 1000;
	}
	.tab-container{
		margin-top: 85px;
	}
	.navbar-son{
		width: 100%;
		margin-top: 44px;
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
