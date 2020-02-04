<template>
	<div id="persondata">
		<div id="header">
			<header id="header-son" class="mui-bar mui-bar-nav">
				<a class="mui-icon mui-icon-arrowleft mui-pull-left my-icon" @click="goBack"></a>
				<h1 class="mui-title">我的历史</h1>
				<a class="mui-icon mui-icon-search mui-pull-right"></a>
			</header>
		</div>
		
		<div class="navbar">
			<div class="navbarfix">
				<mt-navbar v-model="selected" class="navbar-son" fixed>
					<mt-tab-item id="1">相册</mt-tab-item>
				  <mt-tab-item id="2">视频</mt-tab-item>
				</mt-navbar>
			</div>
			
			
			<!-- tab-container -->
			<div class="tab-container">
				<mt-tab-container v-model="selected" swipeable>
				  <mt-tab-container-item id="1">
						<mu-paper :z-depth="1" class="demo-list-wrap">
						  </mu-appbar>
						  <mu-list textline="two-line">
						    <mu-list-item avatar button :ripple="false" class="mu-list-itme-zidingyi">
						      <mu-list-item-action>
						        <mu-avatar>
											<img src="../../comment/chat/images/pic1.jpg" alt="" />
						        </mu-avatar>
						      </mu-list-item-action>
						      <mu-list-item-content>
						        <mu-list-item-title>手机截屏</mu-list-item-title>
						        <mu-list-item-sub-title>637张图片</mu-list-item-sub-title>
						      </mu-list-item-content>
						      <mu-list-item-action>
						        <mu-button icon>
											<a class="mui-icon mui-icon-arrowright mui-pull-right color-icon"></a>
						        </mu-button>
						      </mu-list-item-action>
						    </mu-list-item>
						    <mu-list-item avatar button :ripple="false" class="mu-list-itme-zidingyi">
						      <mu-list-item-action>
						        <mu-avatar>
						          <img src="../../comment/chat/images/pic1.jpg" alt="" />
						        </mu-avatar>
						      </mu-list-item-action>
						      <mu-list-item-content>
						        <mu-list-item-title>手机截屏</mu-list-item-title>
						        <mu-list-item-sub-title>637张图片</mu-list-item-sub-title>
						      </mu-list-item-content>
						      <mu-list-item-action>
						        <mu-button icon>
						          <a class="mui-icon mui-icon-arrowright mui-pull-right color-icon"></a>
						        </mu-button>
						      </mu-list-item-action>
						    </mu-list-item>
						    <mu-list-item avatar button :ripple="false" class="mu-list-itme-zidingyi">
						      <mu-list-item-action>
						        <mu-avatar>
						          <img src="../../comment/chat/images/pic1.jpg" alt="" />
						        </mu-avatar>
						      </mu-list-item-action>
						      <mu-list-item-content>
						        <mu-list-item-title>手机截屏</mu-list-item-title>
						        <mu-list-item-sub-title>637张图片</mu-list-item-sub-title>
						      </mu-list-item-content>
						      <mu-list-item-action>
						        <mu-button icon>
						          <a class="mui-icon mui-icon-arrowright mui-pull-right color-icon"></a>
						        </mu-button>
						      </mu-list-item-action>
						    </mu-list-item>
								<mu-list-item avatar button :ripple="false" class="mu-list-itme-zidingyi">
								  <mu-list-item-action>
								    <mu-avatar>
								      <img src="../../comment/chat/images/pic1.jpg" alt="" />
								    </mu-avatar>
								  </mu-list-item-action>
								  <mu-list-item-content>
								    <mu-list-item-title>手机截屏</mu-list-item-title>
								    <mu-list-item-sub-title>637张图片</mu-list-item-sub-title>
								  </mu-list-item-content>
								  <mu-list-item-action>
								    <mu-button icon>
								      <a class="mui-icon mui-icon-arrowright mui-pull-right color-icon"></a>
								    </mu-button>
								  </mu-list-item-action>
								</mu-list-item>
								<mu-list-item avatar button :ripple="false" class="mu-list-itme-zidingyi">
								  <mu-list-item-action>
								    <mu-avatar>
								      <img src="../../comment/chat/images/pic1.jpg" alt="" />
								    </mu-avatar>
								  </mu-list-item-action>
								  <mu-list-item-content>
								    <mu-list-item-title>手机截屏</mu-list-item-title>
								    <mu-list-item-sub-title>637张图片</mu-list-item-sub-title>
								  </mu-list-item-content>
								  <mu-list-item-action>
								    <mu-button icon>
								      <a class="mui-icon mui-icon-arrowright mui-pull-right color-icon"></a>
								    </mu-button>
								  </mu-list-item-action>
								</mu-list-item>
								<mu-list-item avatar button :ripple="false" class="mu-list-itme-zidingyi">
								  <mu-list-item-action>
								    <mu-avatar>
								      <img src="../../comment/chat/images/pic1.jpg" alt="" />
								    </mu-avatar>
								  </mu-list-item-action>
								  <mu-list-item-content>
								    <mu-list-item-title>手机截屏</mu-list-item-title>
								    <mu-list-item-sub-title>637张图片</mu-list-item-sub-title>
								  </mu-list-item-content>
								  <mu-list-item-action>
								    <mu-button icon>
								      <a class="mui-icon mui-icon-arrowright mui-pull-right color-icon"></a>
								    </mu-button>
								  </mu-list-item-action>
								</mu-list-item>
								<mu-list-item avatar button :ripple="false" class="mu-list-itme-zidingyi">
								  <mu-list-item-action>
								    <mu-avatar>
								      <img src="../../comment/chat/images/pic1.jpg" alt="" />
								    </mu-avatar>
								  </mu-list-item-action>
								  <mu-list-item-content>
								    <mu-list-item-title>手机截屏</mu-list-item-title>
								    <mu-list-item-sub-title>637张图片</mu-list-item-sub-title>
								  </mu-list-item-content>
								  <mu-list-item-action>
								    <mu-button icon>
								      <a class="mui-icon mui-icon-arrowright mui-pull-right color-icon"></a>
								    </mu-button>
								  </mu-list-item-action>
								</mu-list-item>
								<mu-list-item avatar button :ripple="false" class="mu-list-itme-zidingyi">
								  <mu-list-item-action>
								    <mu-avatar>
								      <img src="../../comment/chat/images/pic1.jpg" alt="" />
								    </mu-avatar>
								  </mu-list-item-action>
								  <mu-list-item-content>
								    <mu-list-item-title>手机截屏</mu-list-item-title>
								    <mu-list-item-sub-title>637张图片</mu-list-item-sub-title>
								  </mu-list-item-content>
								  <mu-list-item-action>
								    <mu-button icon>
								      <a class="mui-icon mui-icon-arrowright mui-pull-right color-icon"></a>
								    </mu-button>
								  </mu-list-item-action>
								</mu-list-item>
								<mu-list-item avatar button :ripple="false" class="mu-list-itme-zidingyi">
								  <mu-list-item-action>
								    <mu-avatar>
								      <img src="../../comment/chat/images/pic1.jpg" alt="" />
								    </mu-avatar>
								  </mu-list-item-action>
								  <mu-list-item-content>
								    <mu-list-item-title>手机截屏</mu-list-item-title>
								    <mu-list-item-sub-title>637张图片</mu-list-item-sub-title>
								  </mu-list-item-content>
								  <mu-list-item-action>
								    <mu-button icon>
								      <a class="mui-icon mui-icon-arrowright mui-pull-right color-icon"></a>
								    </mu-button>
								  </mu-list-item-action>
								</mu-list-item>
						  </mu-list>
						  <mu-divider inset></mu-divider>
						  
						</mu-paper>
				  </mt-tab-container-item>
				  <mt-tab-container-item id="2">
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
import CardCare from './CardCare.vue'
import WorkContain from '../../comment/shouye/work/WorkContain.vue'

export default {
	name: 'DownManage',
	data() {
		return {
			selected: '1'
		}
	},
	components: {
		Navbar,
		TabItem,
		Cell,
		CardCare,
		WorkContain
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
	.mu-avatar img {
	    border-radius: 0%;
	}
	.mu-list-itme-zidingyi:active{
		background-color: #E6E1DC;
	}
	.mui-icon[data-v-401a808e] {
	    color: #d3d3d3;
	}
	.mu-avatar {
	    border-radius: 0px;
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
