<template>
	<div id="persondata">
		<div id="header">
			<header id="header-son" class="mui-bar mui-bar-nav">
				<a class="mui-icon mui-icon-arrowleft mui-pull-left my-icon" @click="goBack"></a>
				<h1 class="mui-title">我的动态</h1>
				<a class="mui-icon mui-icon-search mui-pull-right"></a>
			</header>
		</div>
		
		<div class="navbar">
			<div class="navbarfix">
				<mt-navbar v-model="selected" class="navbar-son" fixed>
				  <mt-tab-item id="1">动态</mt-tab-item>
				  <mt-tab-item id="2">发布</mt-tab-item>
				  <mt-tab-item id="3">收藏</mt-tab-item>
					<mt-tab-item id="4">推荐</mt-tab-item>
				</mt-navbar>
			</div>
			
			
			<!-- tab-container -->
			<div class="tab-container">
				<mt-tab-container v-model="selected" swipeable>
				  <mt-tab-container-item id="1">
				    <card-list></card-list>
						<card-list></card-list>
						<card-list></card-list>
						<card-list></card-list>
						<card-list></card-list>
				  </mt-tab-container-item>
				  <mt-tab-container-item id="2">
				    <card-list></card-list>
				    <card-list></card-list>
				    <card-list></card-list>
						<card-list></card-list>
				  </mt-tab-container-item>
				  <mt-tab-container-item id="3">
				    <!-- <mt-cell title="选项三" label="选项三" is-link></mt-cell> -->
						<shou-cang></shou-cang>
				  </mt-tab-container-item>
					<mt-tab-container-item id="4">
					  <card-list></card-list>
					  <card-list></card-list>
					  <card-list></card-list>
					</mt-tab-container-item>
				</mt-tab-container>
			</div>
			
		</div>
	</div>
</template>

<script>
import { Navbar, TabItem } from 'mint-ui'
import { Cell } from 'mint-ui'
import CardList from './CardList.vue'
import ShouCang from './ShouCang.vue'

export default {
	name: 'DynState',
	data() {
		return {
			selected: '2'
		}
	},
	components: {
		Navbar,
		TabItem,
		Cell,
		CardList,
		ShouCang
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
	.navbar .navbar-son >>> .mint-tab-item{
		color: #000000;
		background-color: #FFFFFF;
		   padding: 13px 0;
				padding-top: 16px;
		/* padding: 0 0; */
	}
	.navbar .navbar-son >>> .mint-tab-item-label{
		/* line-height: 1px; */
		/* height: 42px;
		background-color: #FFFFFF;
		z-index: 100; */
	}
	.navbar .navbar-son >>> .is-selected{
		color: #26a2ff;
		border-bottom: 2px solid #26a2ff;
	}
	/* .navbar .navbar-son >>> .mint-navbar .mint-tab-item.is-selected {
	    border-bottom: 2px solid #26a2ff;
	    color: #26a2ff;
	    margin-bottom: -3px;
	} */
	/* .navbar-active:link{
		color: #000000;
	}
	.navbar-active:visited{
		color: #000000;
	}
	.navbar-active:hover{
		color: #000000;
	}
	.navbar-active:active{
		color: #000000;
	} */
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
