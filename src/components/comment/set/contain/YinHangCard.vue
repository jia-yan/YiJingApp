<template>
	<div id="persondata">
		<div id="header">
			<header id="header-son" class="mui-bar mui-bar-nav">
				<a class="mui-icon mui-icon-arrowleft mui-pull-left my-icon" @click="goBack"></a>
				<h1 class="mui-title">支付交易</h1>
				<!-- <a class="mui-icon mui-icon-search mui-pull-right"></a> -->
			</header>
		</div>

		<div class="navbar">
			<div class="contain">
				<div class="left">
					<div class="left-l"><img src="./../images/youzheng.png" alt="" /></div>
					<div class="left-r">
						<div class="left-r-top">中国邮政储蓄银行</div>
						<div class="left-r-bottom">
							尾号
							<span>8298</span>
							储蓄卡
						</div>
					</div>
				</div>
				<div class="right"><img src="./../images/more2.png" alt="" /></div>
			</div>

			<div class="shuru">
				<div class="shuru-top">提现金额</div>
				<div class="shuru-center">
					<div class="shuru-center-left">￥</div>
					<div class="shuru-center-right"><input type="number" /></div>
				</div>
				<div class="shuru-bottom">
					可用余额
					<span>20000.00</span>
					元
				</div>
			</div>

			<!-- <div class="aui-btn botton" @click.native="show1 = true">预计两小时到账，确认提现</div> -->
			
			<div>
				<yd-button size="large" type="primary" @click.native="show1 = true" class="botton">预计两小时到账，确认提现</yd-button>
				<yd-keyboard v-model="show1" :callback="done1" ref="keyboardDemo1"></yd-keyboard>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import { KeyBoard } from 'vue-ydui/dist/lib.rem/keyboard';
/* 使用px：import {KeyBoard} from 'vue-ydui/dist/lib.px/keyboard'; */
import { Button, ButtonGroup } from 'vue-ydui/dist/lib.rem/button';
/* 使用px：import {Button, ButtonGroup} from 'vue-ydui/dist/lib.px/button'; */
import {  Loading } from 'vue-ydui/dist/lib.rem/dialog';
/* 使用px：import { Confirm, Alert, Toast, Notify, Loading } from 'vue-ydui/dist/lib.px/dialog'; */

Vue.prototype.$dialog = {
    loading: Loading
};
Vue.component(Button.name, Button);
Vue.component(ButtonGroup.name, ButtonGroup);
Vue.component(KeyBoard.name, KeyBoard);

export default {
	name: 'Review',
	data() {
		return {
			show1: false
		};
	},
	components: {
		KeyBoard,
		Button,
		ButtonGroup,	
		Loading
	},
	methods: {
		goBack() {
			this.$router.go(-1);
		},
		done1(val) {
			console.log('输入的密码是：' + val);
			this.$dialog.loading.open('验证支付密码');
		
			/* 模拟异步验证密码 */
			setTimeout(() => {
				if(val == 123456) {
					this.$refs.keyboardDemo1.$emit('ydui.keyboard.error', '支付成功')
				} else {
					this.$refs.keyboardDemo1.$emit('ydui.keyboard.error', '对不起，您的支付密码不正确，请重新输入。');
				}
				// this.$refs.keyboardDemo1.$emit('ydui.keyboard.error', '对不起，您的支付密码不正确，请重新输入。');
				this.$dialog.loading.close();
			}, 2000);
		}
	}
};
</script>

<style scoped="scoped">
@import './ydui.base.css';

body {
	background-color: #eee;
	display: flex;
	justify-content: center;
	align-content: flex-start;
	flex-wrap: wrap;
}
.contain {
	width: 100%;
	height: 110px;
	border-top: 15px solid #eee;
	border-bottom: 15px solid #eee;
	padding: 0px 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #fff;
}
.contain .left {
	width: 80%;
	height: 80px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
.contain .left .left-l {
	height: 40px;
	width: 40px;
}
.contain .left .left-l img {
	height: 40px;
	width: 40px;
}
.contain .left .left-r {
	margin-left: 20px;
	height: 60px;
	display: flex;
	align-content: center;
	/* justify-content: flex-start; */
	flex-wrap: wrap;
}
.contain .left .left-r .left-r-top {
	width: 100%;
	height: 25px;
	line-height: 25px;
	font-size: 16px;
	text-align: left;
}
.contain .left .left-r .left-r-bottom {
	width: 100%;
	height: 25px;
	line-height: 25px;
	font-size: 14px;
	color: #9c9999;
	text-align: left;
}
.contain .left .left-r .left-r-bottom span {
	/*display: block;*/
	padding: 0 5px;
}
.contain .right {
	height: 20px;
	width: 20px;
}
.contain .right img {
	height: 20px;
	width: 20px;
}
.contain:active {
	background-color: #eee;
}
.shuru {
	width: 100%;
	height: 121px;
	background-color: #fff;
}
.shuru .shuru-top {
	width: 100%;
	height: 35px;
	line-height: 35px;
	padding: 0 10px;
	font-size: 14px;
	color: #9c9999;
}
.shuru .shuru-center {
	width: 100%;
	height: 50px;
	line-height: 50px;
	padding: 0 10px;
	border-bottom: 1px solid #eee;
	display: flex;
	justify-content: flex-start;
}
.shuru .shuru-center .shuru-center-left {
	font-size: 25px;
	font-weight: 700;
	width: 30px;
	text-align: center;
	vertical-align: ;
}
.shuru .shuru-center .shuru-center-right {
	height: 50px;
	width: 275px;
}
.shuru .shuru-center .shuru-center-right input {
	height: 49px;
	width: 275px;
	border: 0;
	margin-bottom: 0;
}
.shuru .shuru-bottom {
	width: 100%;
	height: 35px;
	line-height: 35px;
	padding: 0 10px;
	font-size: 14px;
	color: #9c9999;
}
.shuru .shuru-bottom span {
	margin: 0 5px;
}
.botton {
	height: 50px;
	width: 94%;
	font-size: 16px;
	color: #fff;
	background-color: #42a0ef;
	margin: 0 auto;
	margin-top: 30px;
	line-height: 50px;
	border-radius: 5px;
	
}
.botton:active {
	background-color: #1d6db1;
}

.color-icon {
	color: #e8e8e8;
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
	background-color: #f5f5f5;
}
#header-son {
	background-color: #ffffff;
}
.navbar {
	margin-top: 50px;
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
.mui-icon {
	color: #2b85e4;
}
</style>
