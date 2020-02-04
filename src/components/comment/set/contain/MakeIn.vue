<template>
	<div id="persondata">
		<div id="header">
			<header id="header-son" class="mui-bar mui-bar-nav">
				<a class="mui-icon mui-icon-arrowleft mui-pull-left my-icon" @click="goBack"></a>
				<h1 class="mui-title">我的创作</h1>
				<a class="mui-icon mui-icon-search mui-pull-right"></a>
			</header>
		</div>
		
		<div class="navbar">
			<div class="navbarfix">
				<mt-navbar v-model="selected" class="navbar-son" fixed>
					<mt-tab-item id="1">全部</mt-tab-item>
				  <mt-tab-item id="2">作品</mt-tab-item>
					<mt-tab-item id="3">文章</mt-tab-item>
					<mt-tab-item id="4">专利</mt-tab-item>
				</mt-navbar>
			</div>
			
			
			<!-- tab-container -->
			<div class="tab-container">
				<mt-tab-container v-model="selected" swipeable>
				  <mt-tab-container-item id="1">
				      <card-care></card-care>
				  		<card-care></card-care>
				  		<card-list></card-list>
				  		<card-list></card-list>
				  		<card-list></card-list>
				  		<work-contain></work-contain>
				  		<work-contain></work-contain>
				  		<work-contain></work-contain>
				    </mt-tab-container-item>
				    <mt-tab-container-item id="2">
							<work-contain></work-contain>
							<work-contain></work-contain>
							<work-contain></work-contain>
							<work-contain></work-contain>
							<work-contain></work-contain>
							<work-contain></work-contain>
							<work-contain></work-contain>
				    </mt-tab-container-item>
				    <mt-tab-container-item id="3">
							<news-read></news-read>
							<news-read></news-read>
							<news-read></news-read>
							<news-read></news-read>
							<news-read></news-read>
							<news-read></news-read>
							<news-read></news-read>
				    </mt-tab-container-item>
				  	<mt-tab-container-item id="4">
				  	  <card-care></card-care>
				  		<card-care></card-care>
				  		<card-care></card-care>
				  		<card-care></card-care>
				  		<card-care></card-care>
				  		<card-care></card-care>
				  		<card-care></card-care>
				  		<card-care></card-care>
				  	</mt-tab-container-item>
				  </mt-tab-container>
			</div>
			
		</div>
	</div>
</template>

<script>
import { Navbar, TabItem } from 'mint-ui'
import { Cell } from 'mint-ui'
import CardList from '../../../DrawerContent/contain/CardList.vue'
import ShouCang from '../../../DrawerContent/contain/ShouCang.vue'
import CardCare from '../../../DrawerContent/contain/CardCare.vue'
import WorkContain from '../../shouye/work/WorkContain.vue'
import NewsRead from '../../chat/contain/NewsRead.vue'


export default {
	name: 'Review',
	data() {
		return {
			selected: '1'
		}
	},
	components: {
		Navbar,
		TabItem,
		Cell,
		CardList,
		ShouCang,
		CardCare,
		WorkContain,
		NewsRead
	},
	methods: {
		goBack() {
			this.$router.go(-1);
		}
	}
};
</script>

<style scoped="scoped">
	.color-icon{
		color: #E8E8E8;
	}
	.mui-icon[data-v-401a808e] {
	    color: #d3d3d3;
	}
	#persondata {
		z-index: 100;
		width: 100%;
		height: 100%;
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
	.navbar .navbar-son >>> .mint-tab-item{
		color: #000000;
		background-color: #FFFFFF;
		   padding: 13px 0;
				padding-top: 16px;
	}
	.navbar .navbar-son >>> .is-selected{
		color: #26a2ff;
		border-bottom: 2px solid #26a2ff;
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

