<template>
	<div id="persondata">
		<div id="header">
			<header id="header-son" class="mui-bar mui-bar-nav">
				<a class="mui-icon mui-icon-arrowleft mui-pull-left my-icon" @click="goBack"></a>
				<h1 class="mui-title">我的加入</h1>
				<a class="mui-icon mui-icon-search mui-pull-right"></a>
			</header>
		</div>
		
		<div class="navbar">
			<div class="navbarfix">
				<mt-navbar v-model="selected" class="navbar-son" fixed>
					<mt-tab-item id="1">我的加入</mt-tab-item>
				  <mt-tab-item id="2">我的创建</mt-tab-item>
				</mt-navbar>
			</div>
			
			
			<!-- tab-container -->
			<div class="tab-container">
				<mt-tab-container v-model="selected" swipeable>
				  <mt-tab-container-item id="1">
						<mu-paper :z-depth="1" class="demo-list-wrap">
						   <mu-list toggle-nested>
						    <mu-list-item button :ripple="false" nested :open="open === 'send'" @toggle-nested="open = arguments[0] ? 'send' : ''">
						      <mu-list-item-action>
						        <a class="mui-icon mui-icon-contact mui-pull-left"></a>
						      </mu-list-item-action>
						      <mu-list-item-title>Sent mail</mu-list-item-title>
						      <mu-list-item-action>
						        <a class="mui-icon mui-icon-arrowdown mui-pull-right"></a>
						      </mu-list-item-action>
						      <mu-list-item button :ripple="false" slot="nested">
						        <mu-list-item-title>List Item 1</mu-list-item-title>
						      </mu-list-item>
						      <mu-list-item button :ripple="false" slot="nested">
						        <mu-list-item-title>List Item 2</mu-list-item-title>
						      </mu-list-item>
						      <mu-list-item button :ripple="false" slot="nested">
						        <mu-list-item-title>List Item 3</mu-list-item-title>
						      </mu-list-item>
						    </mu-list-item>
						    <mu-list-item button :ripple="false" nested :open="open === 'drafts'" @toggle-nested="open = arguments[0] ? 'drafts' : ''">
						      <mu-list-item-action>
						        <a class="mui-icon mui-icon-contact mui-pull-left"></a>
						      </mu-list-item-action>
						      <mu-list-item-title>Drafts</mu-list-item-title>
						      <mu-list-item-action>
						        <a class="mui-icon mui-icon-arrowdown mui-pull-right"></a>
						      </mu-list-item-action>
						      <mu-list-item button :ripple="false" slot="nested">
						        <mu-list-item-title>List Item 1</mu-list-item-title>
						      </mu-list-item>
						      <mu-list-item button :ripple="false" slot="nested">
						        <mu-list-item-title>List Item 2</mu-list-item-title>
						      </mu-list-item>
						      <mu-list-item button :ripple="false" slot="nested">
						        <mu-list-item-title>List Item 3</mu-list-item-title>
						      </mu-list-item>
						    </mu-list-item>
						    <mu-list-item button :ripple="false" nested :open="open === 'inbox'" @toggle-nested="open = arguments[0] ? 'inbox' : ''">
						      <mu-list-item-action>
						        <a class="mui-icon mui-icon-contact mui-pull-left"></a>
						      </mu-list-item-action>
						      <mu-list-item-title>Inbox</mu-list-item-title>
						      <mu-list-item-action>
						        <a class="mui-icon mui-icon-arrowdown mui-pull-right"></a>
						      </mu-list-item-action>
						      <mu-list-item button :ripple="false" slot="nested">
						        <mu-list-item-title>List Item 1</mu-list-item-title>
						      </mu-list-item>
						      <mu-list-item button :ripple="false" slot="nested">
						        <mu-list-item-title>List Item 2</mu-list-item-title>
						      </mu-list-item>
						      <mu-list-item button :ripple="false" slot="nested">
						        <mu-list-item-title>List Item 3</mu-list-item-title>
						      </mu-list-item>
						    </mu-list-item>
						    <mu-list-item button :ripple="false" nested :open="open === 'stared'" @toggle-nested="open = arguments[0] ? 'stared' : ''">
						      <mu-list-item-action>
						        <a class="mui-icon mui-icon-contact mui-pull-left"></a>
						      </mu-list-item-action>
						      <mu-list-item-title>Stared</mu-list-item-title>
						      <mu-list-item-action>
						        <a class="mui-icon mui-icon-arrowdown mui-pull-right"></a>
						      </mu-list-item-action>
						      <mu-list-item button :ripple="false" slot="nested">
						        <mu-list-item-title>List Item 1</mu-list-item-title>
						      </mu-list-item>
						      <mu-list-item button :ripple="false" slot="nested">
						        <mu-list-item-title>List Item 2</mu-list-item-title>
						      </mu-list-item>
						      <mu-list-item button :ripple="false" slot="nested">
						        <mu-list-item-title>List Item 3</mu-list-item-title>
						      </mu-list-item>
						    </mu-list-item>
						  </mu-list>
						</mu-paper>
				  </mt-tab-container-item>
				  <mt-tab-container-item id="2">
						<mu-paper :z-depth="1" class="demo-list-wrap">
						   <mu-list toggle-nested>
						    <mu-list-item button :ripple="false" nested :open="open === 'send'" @toggle-nested="open = arguments[0] ? 'send' : ''">
						      <mu-list-item-action>
						        <a class="mui-icon mui-icon-contact mui-pull-left"></a>
						      </mu-list-item-action>
						      <mu-list-item-title>Sent mail</mu-list-item-title>
						      <mu-list-item-action>
						        <a class="mui-icon mui-icon-arrowdown mui-pull-right"></a>
						      </mu-list-item-action>
						      <mu-list-item button :ripple="false" slot="nested">
						        <mu-list-item-title>List Item 1</mu-list-item-title>
						      </mu-list-item>
						      <mu-list-item button :ripple="false" slot="nested">
						        <mu-list-item-title>List Item 2</mu-list-item-title>
						      </mu-list-item>
						      <mu-list-item button :ripple="false" slot="nested">
						        <mu-list-item-title>List Item 3</mu-list-item-title>
						      </mu-list-item>
						    </mu-list-item>
						    <mu-list-item button :ripple="false" nested :open="open === 'drafts'" @toggle-nested="open = arguments[0] ? 'drafts' : ''">
						      <mu-list-item-action>
						        <a class="mui-icon mui-icon-contact mui-pull-left"></a>
						      </mu-list-item-action>
						      <mu-list-item-title>Drafts</mu-list-item-title>
						      <mu-list-item-action>
						        <a class="mui-icon mui-icon-arrowdown mui-pull-right"></a>
						      </mu-list-item-action>
						      <mu-list-item button :ripple="false" slot="nested">
						        <mu-list-item-title>List Item 1</mu-list-item-title>
						      </mu-list-item>
						      <mu-list-item button :ripple="false" slot="nested">
						        <mu-list-item-title>List Item 2</mu-list-item-title>
						      </mu-list-item>
						      <mu-list-item button :ripple="false" slot="nested">
						        <mu-list-item-title>List Item 3</mu-list-item-title>
						      </mu-list-item>
						    </mu-list-item>
						    <mu-list-item button :ripple="false" nested :open="open === 'inbox'" @toggle-nested="open = arguments[0] ? 'inbox' : ''">
						      <mu-list-item-action>
						        <a class="mui-icon mui-icon-contact mui-pull-left"></a>
						      </mu-list-item-action>
						      <mu-list-item-title>Inbox</mu-list-item-title>
						      <mu-list-item-action>
						        <a class="mui-icon mui-icon-arrowdown mui-pull-right"></a>
						      </mu-list-item-action>
						      <mu-list-item button :ripple="false" slot="nested">
						        <mu-list-item-title>List Item 1</mu-list-item-title>
						      </mu-list-item>
						      <mu-list-item button :ripple="false" slot="nested">
						        <mu-list-item-title>List Item 2</mu-list-item-title>
						      </mu-list-item>
						      <mu-list-item button :ripple="false" slot="nested">
						        <mu-list-item-title>List Item 3</mu-list-item-title>
						      </mu-list-item>
						    </mu-list-item>
						    <mu-list-item button :ripple="false" nested :open="open === 'stared'" @toggle-nested="open = arguments[0] ? 'stared' : ''">
						      <mu-list-item-action>
						        <a class="mui-icon mui-icon-contact mui-pull-left"></a>
						      </mu-list-item-action>
						      <mu-list-item-title>Stared</mu-list-item-title>
						      <mu-list-item-action>
						        <a class="mui-icon mui-icon-arrowdown mui-pull-right"></a>
						      </mu-list-item-action>
						      <mu-list-item button :ripple="false" slot="nested">
						        <mu-list-item-title>List Item 1</mu-list-item-title>
						      </mu-list-item>
						      <mu-list-item button :ripple="false" slot="nested">
						        <mu-list-item-title>List Item 2</mu-list-item-title>
						      </mu-list-item>
						      <mu-list-item button :ripple="false" slot="nested">
						        <mu-list-item-title>List Item 3</mu-list-item-title>
						      </mu-list-item>
						    </mu-list-item>
						  </mu-list>
						</mu-paper>
				  </mt-tab-container-item>
				</mt-tab-container>
			</div>
			
		</div>
	</div>
</template>

<script>
import { Navbar, TabItem } from 'mint-ui'
import { Cell } from 'mint-ui'

export default {
	name: 'Review',
	data() {
		return {
			selected: '1',
			open: 'send'
		}
	},
	components: {
		Navbar,
		TabItem,
		Cell
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
