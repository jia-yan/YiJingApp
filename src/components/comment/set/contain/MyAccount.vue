<template>
	<div id="persondata">
		<div id="header">
			<header id="header-son" class="mui-bar mui-bar-nav">
				<a class="mui-icon mui-icon-arrowleft mui-pull-left my-icon" @click="goBack"></a>
				<h1 class="mui-title">评论留言</h1>
				<a class="mui-icon mui-icon-search mui-pull-right"></a>
			</header>
		</div>
		
		<div class="navbar">
			<yd-countup
			            endnum="1200"
			            duration="3"
			            decimals="2"
			            separator=","
			            prefix="$"
			            suffix="美元"
			></yd-countup>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import { CountUp } from 'vue-ydui/dist/lib.rem/countup'
/* 使用px：import {CountUp} from 'vue-ydui/dist/lib.px/countup'; */
// import 'vue-ydui/dist/ydui.base.css'
Vue.component(CountUp.name, CountUp)
// 注意：按需引入单个组件，另需导入重置基础样式；即在 main.js 或根组件执行 import 'vue-ydui/dist/ydui.base.css';

export default {
	name: 'MyAccount',
	data() {
		return {			
			
		}
	},
	components: {
		CountUp
	},
	methods: {
		goBack() {
			this.$router.go(-1);
		}
	}
};
</script>

<style scoped="scoped">
	@import './ydui.base.css';
	/* @import url(""); */
	.demo1 {
	  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
	  font-size: 6em;
	  color: #04BE02;
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
