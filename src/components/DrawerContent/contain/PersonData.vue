<template>
	<div id="persondata">
		<div id="header">
			<header id="header" class="mui-bar mui-bar-nav">
				<a class="mui-icon mui-icon-arrowleft mui-pull-left my-icon" @click="goBack"></a>
				<h1 class="mui-title">个人资料</h1>
				<!-- <a class="mui-icon mui-icon-extra mui-icon-extra-sweep mui-pull-right"></a> -->
			</header>
		</div>
		<div class="input-form">
			<form class="mui-input-group">
				<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
				<mt-radio title="性别" class="mygender" v-model="gender" :options="['男', '女']"></mt-radio>
				<mt-field label="年龄" placeholder="请输入年龄" v-model="age"></mt-field>
				<mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
				<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
				<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
				<mt-field label="网站" placeholder="请输入网址" type="url" v-model="website"></mt-field>
				<mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
				<mt-field label="自我介绍" class="mytext" placeholder="自我介绍" type="textarea" rows="4" v-model="introduction"></mt-field>
				<mt-field label="邮箱" :state="state[0]" v-model="email"></mt-field>
				<mt-field label="验证码" v-model="captcha"><img src="../../comment/shouye/images/pic1.jpg" alt="" height="45px" width="100px" /></mt-field>
				<mt-field label="QQ" placeholder="请输入QQ号" type="number" v-model="QQ"></mt-field>
				<mt-field label="微信" placeholder="请输入微信号" type="number" v-model="weixin"></mt-field>
				<mt-field label="微博" placeholder="请输入微博号" type="number" v-model="weibo"></mt-field>
				<mt-field label="网站" placeholder="请输入网址" type="url" v-model="website"></mt-field>
				<mt-field label="数字" placeholder="请输入数字" type="number" v-model="number"></mt-field>
			</form>
			<div class="mui-button-row my-btn">
				<button type="button" class="mui-btn mui-btn-primary my-btnson">确认</button>
				<button type="button" class="mui-btn mui-btn-danger my-btnson">取消</button>
			</div>
		</div>
	</div>
</template>

<script>
import { Field } from 'mint-ui';
import { Radio } from 'mint-ui';
export default {
	name: 'PersonData',
	data() {
		return {
			username: '',
			gender: '',
			age: '',
			email: '',
			password: '',
			phone: '',
			website: '',
			number: '',
			birthday: '',
			introduction: '',
			captcha: '',
			state: ['success', 'error', 'warning'],
			QQ: '',
			weixin: '',
			weibo: ''
		};
	},
	components: {},
	methods: {
		goBack() {
			this.$router.go(-1);
		}
	}
};
</script>

<style scoped="scoped">
	.my-btn{
		height: 100px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.my-btn .my-btnson{
		margin: 0 10px;
	}
#persondata {
	z-index: 10000;
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	overflow: auto;
}
.input-form {
	margin-top: 50px;
	width: 100%;
	height: auto;
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
.my-icon {
	color: #999999 !important;
}

.mytext >>> .mint-field-core::-ms-input-placeholder {
	line-height: 100px;
	height: 100px;
}
.mytext >>> .mint-field-core::-webkit-input-placeholder {
	line-height: 100px;
	height: 100px;
}
.mytext >>> .mint-field-core::-ms-placeholder {
	line-height: 100px;
	height: 100px;
}
.mytext >>> .mint-field-core::-webkit-placeholder {
	line-height: 100px;
	height: 100px;
}
.mygender {
	display: flex;
	justify-content: flex-start;
	padding-top: 2px;
	border-top: 0.5px solid #ededed;
}
.mygender >>> .mint-radiolist-title {
	display: block;
	width: 36px;
	font-size: 16px;
	color: #6a6767;
	padding-left: 2px;
}
.mygender >>> .mint-cell-wrapper {
	/* display: block; */
	width: 90px;
	text-decoration: none;
	background-size: 118% 0px;
}
.mygender >>> .mint-cell {
	/* display: block; */
	width: 80px;
}
</style>
