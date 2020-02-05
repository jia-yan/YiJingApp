<template>
	<div id="persondata">
		<div id="header">
			<header id="header-son" class="mui-bar mui-bar-nav">
				<a class="mui-icon mui-icon-arrowleft mui-pull-left my-icon" @click="goBack"></a>
				<h1 class="mui-title">我的账单</h1>
				<a class="mui-icon mui-icon-search mui-pull-right"></a>
			</header>
		</div>
		
		<div class="navbar">
			<div class="mycount">
				<div class="jine">
					总金额：(元)
				</div>
				<yd-countup endnum="1200" duration="3" decimals="2" class="my-countup"
				            separator="," prefix="&yen;" suffix=""
				></yd-countup>
				<div class="btn">
					<mt-button type="default" size="normal" @click="ToAccount">转出</mt-button>
					<mt-button type="primary" size="normal" @click="ToAccount">转入</mt-button>
				</div>
			</div>
			
			<div class="myrouter">
				<transition name="slide-left">
				  <keep-alive>
				    <router-view></router-view>
				  </keep-alive>
				</transition>
			</div>
			
			<div class="timeline">
				<span>交易记录</span>
				<yd-timeline class="timeline-item1">
				        <yd-timeline-item>
				            <p>【转出】您的订单号****已转入1200元，我们将在一个工作日内处理完毕</p>
				            <p style="margin-top: 10px;">2020-02-02 20:24:18</p>
				        </yd-timeline-item>
				        <yd-timeline-item>
				            <p>【转入】您的订单号****已转入1200元，我们将在一个工作日内处理完毕</p>
				            <p style="margin-top: 10px;">2020-02-02 20:24:18</p>
				        </yd-timeline-item>
				        <yd-timeline-item>
				            <p>【转出】您的订单号****已转入1200元，我们将在一个工作日内处理完毕</p>
				            <p style="margin-top: 10px;">2020-02-02 20:24:18</p>
				        </yd-timeline-item>
								<yd-timeline-item>
								    <p>【转出】您的订单号****已转入1200元，我们将在一个工作日内处理完毕</p>
								    <p style="margin-top: 10px;">2020-02-02 20:24:18</p>
								</yd-timeline-item>
								<yd-timeline-item>
								    <p>【转入】您的订单号****已转入1200元，我们将在一个工作日内处理完毕</p>
								    <p style="margin-top: 10px;">2020-02-02 20:24:18</p>
								</yd-timeline-item>
								<yd-timeline-item>
								    <p>【转出】您的订单号****已转入1200元，我们将在一个工作日内处理完毕</p>
								    <p style="margin-top: 10px;">2020-02-02 20:24:18</p>
								</yd-timeline-item>
								<yd-timeline-item>
								    <p>【转出】您的订单号****已转入1200元，我们将在一个工作日内处理完毕</p>
								    <p style="margin-top: 10px;">2020-02-02 20:24:18</p>
								</yd-timeline-item>
								<yd-timeline-item>
								    <p>【转入】您的订单号****已转入1200元，我们将在一个工作日内处理完毕</p>
								    <p style="margin-top: 10px;">2020-02-02 20:24:18</p>
								</yd-timeline-item>
								<yd-timeline-item>
								    <p>【转出】您的订单号****已转入1200元，我们将在一个工作日内处理完毕</p>
								    <p style="margin-top: 10px;">2020-02-02 20:24:18</p>
								</yd-timeline-item>
				    </yd-timeline>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'

import { CountUp } from 'vue-ydui/dist/lib.rem/countup'
import {TimeLine, TimeLineItem} from 'vue-ydui/dist/lib.px/timeline'
Vue.component(TimeLine.name, TimeLine)
Vue.component(TimeLineItem.name, TimeLineItem)
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
		CountUp,
		TimeLine, 
		TimeLineItem
	},
	methods: {
		goBack() {
			this.$router.go(-1)
		},
		ToAccount() {
			// this.$router.push({ path: '/myaccount/toaccount'})
			this.$router.push({ path: '/myaccount/yinhangcard'})
		}
	}
};
</script>

<style scoped="scoped">
	.slide-right-enter-active,
	.slide-right-leave-active,
	.slide-left-enter-active,
	.slide-left-leave-active {
	  will-change: transform;
	  transition: all 0.3s ease;
	  /* position: absolute;  you  bug  */
	}
	.slide-right-enter {
	  opacity: 0;
	  transform: translate3d(-100%, 0, 0);
	}
	.slide-right-leave-active {
	  opacity: 0;
	  transform: translate3d(100%, 0, 0);
	}
	.slide-left-enter {
	  opacity: 0;
	  transform: translate3d(100%, 0, 0);
	}
	.slide-left-leave-active {
	  opacity: 0;
	  transform: translate3d(-100%, 0, 0);
	}
	
	@import './ydui.base.css';
	
	.yd-timeline-item:first-child>.yd-timeline-icon {
	    background-color: #70bbf3;
	}
	.yd-timeline-item:first-child:before {
	    background-color: #FFFFFF;
	}
	.mycount{
		width: 96%;
		height: 200px;
		border: 1px solid #EFEBE9;
		border-radius: 5px;
		margin: 0 auto;
		background-color: #FFFFFF;
		padding-top: 20px;
	}
	.mycount .jine{
		width: 100%;
		text-align: center;
	}
	.mycount .btn{
		height: 100px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.mycount .btn .mint-button{
		padding: 0 35px;
	}
	.timeline{
		width: 96%;
		height: auto;
		margin: 0 auto;
		border-radius: 5px;
	}
	.timeline span{
		display: block;
		width: 100%;
		height: 35px;
		padding-left: 10px;
		text-align: left;
		line-height: 35px;
		color: #9b9a9e;
	}
	.timeline .timeline-item1{
		text-align: left;
	}
	.my-countup{
		font-size: 40px;
	}
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
		width: 100%;
		text-align: center;
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
