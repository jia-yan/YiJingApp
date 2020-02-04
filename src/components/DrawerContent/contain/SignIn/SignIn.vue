<template>
	<div id="persondata">
		<!--加载页-->
		<section id="loader" class="loading">
		    <div></div>
		</section>
		<!--签到首页-->
		<section class="firPage">
		    <header>
					<a class="mui-icon mui-icon-arrowleft mui-pull-left my-icon" @click="goBack"></a>
				</header>
		    <main>
		        <div>
		            <div>
		                <i></i>
		                <span id="signDays">12</span>
		                <i></i>
		            </div>
		            <div>
		                <span id="curYear">2018</span>
		                <i></i>
		                <span id="curMonth">03</span>
		                <i></i>
		            </div>
		            <div id="calendar"></div>
		            <a id="ruleBtn" href="javascript:void (0)"></a>
		        </div>
		    </main>
		    <footer>
		        <a id="signBtn" href="javascript:void (0)"></a>
		        <ul>
		            <li>
		                <span></span>
		                <p>首次签到</p>
		                <p>天津电信本地流量50M</p>
		                <a id="gift_1" href="javascript:void (0)"></a>
		            </li>
		            <li>
		                <span></span>
		                <p>累计签到5天</p>
		                <p>天津电信本地流量300M</p>
		                <a id="gift_2" href="javascript:void (0)"></a>
		            </li>
		            <li>
		                <span></span>
		                <p>累计签到15天</p>
		                <p>天津电信本地流量1G</p>
		                <a id="gift_3" href="javascript:void (0)"></a>
		            </li>
		        </ul>
		    </footer>
		</section>
		<!--规则页-->
		<section class="rule">
		    <div></div>
		    <div>
		        <h4>活动规则：</h4>
		        <p>1)	2017年12月31日前注册用户进入活动页面，点击“生成我的故事”，通过滑动屏幕，即可阅读“2017你与电信不得不说的故事”页面，阅读页面后可获得活动奖励；</p>
		        <p>2)	2018年注册用户参与活动无法获取活动完整页面，仅可进入活动奖励领取页面，领取活动奖励；</p>
		        <p>3)	活动奖励先到先得，发完即止。</p>
		        <h4>注意事项：</h4>
		        <p>1)	流量奖品由客服人员为用户充值和订购，以0元本地流量包的形式发放，中奖后五个工作日内充值到账；</p>
		        <p>2)	翼支付奖品由客服人员为用户充值，以礼金形式赠送，不可提现，中奖后五个工作日内充值到中奖号码对应的实名制翼支付账户中。</p>
		        <p>3)	流量奖品当月未使用完可结转至下月，次月未使用完失效；主副卡不共享；订购后无短信提示，可通过公众号点击菜单 “轻松查-更多服务-套餐余量”查询；</p>
		        <p>4)	翼支付开通实名认证及使用范围，可下载“翼支付APP”客户端进行操作查询；</p>
		        <p>5)	易通卡、易通9分卡、大三元等OCS套餐、流量时长型计费及不限量套餐的用户无法获得活动奖项中的流量奖项。</p>
		        <p>6)	中奖用户的手机号码，作为发奖唯一依据，参与手机号码需为在网用户，奖励赠送期间如因手机欠费、挂失、办理停机保号、未开通翼支付实名账户等原因无法赠送，将不予补赠视为自动放弃。</p>
		    </div>
		    <a id="backBtn" href="javascript:void (0)">我知道了!</a>
		    <div></div>
		</section>
		<!--遮罩层-->
		<section id="mask" class="mask"></section>
		<!--签到弹窗-->
		<section class="popup popup_sign">
		    <div>
		        <span></span>
		    </div>
		    <div>
		        <p>签到成功！<br>累计签到更有流量礼包等您拿</p>
		        <a id="popup_sign_btn" href="javascript:void(0)">确定</a>
		    </div>
		</section>
		<!--领取奖励弹窗-->
		<section class="popup popup_gift">
		    <div>
		        <span></span>
		    </div>
		    <div>
		        <p>领取成功！<br>累计签到更有流量礼包等您拿</p>
		        <a id="popup_gift_btn" href="javascript:void(0)">确定</a>
		    </div>
		</section>
	</div>
</template>

<script>
// import './css/reset.min.css'
// import './css/styles.css'
import { Index } from './js/index.js'
import { imgLoader } from './js/imgLoader.js'
import { Init } from './js/init.js'
export default {
	name: 'SignIn',
	data() {
		return {
			value: true
		}
	},
	components: {},
	mounted(){
		// imgLoader(this.images, this.showMY(1))	
		// imgLoader()
		// Loader()
		//this.$router.push(this.$route.path)//切换项目的时候仍然在改页面
		// window.location.href = '/signin'
		// once('click', buttonElement, function () {
		//     console.log('executed only once.');
		// });
		//通过添加一个弹框来间接解决日历加载不出来的bug
		
	},
	created(){
		// this.imgLoader(this.images, this.showMY(1))	
		// this.$router.push({ path: '/signin'})
		
	},
	methods: {
		goBack() {
			this.$router.go(-1);
		},
		// showMY(percentage) {
		// 	showMask();
		// 	if (percentage === 1) {
		// 		$('#loader').remove();
		// 		hideMask();
		// 		$('.firPage').show();
		// 	}
		// },
		//显示遮罩层
		// showMask() {
		// 	$("#mask").css("height", $(document).height());
		// 	$("#mask").css("width", $(document).width());
		// 	$("#mask").show();
		// },
		// //隐藏遮罩层
		// hideMask() {
		// 	$("#mask").hide();
		// },
		// showMY(percentage) {
		// 	this.showMask();
		// 	if (percentage === 1) {
		// 		$('#loader').remove();
		// 		this.hideMask();
		// 		$('.firPage').show();
		// 	}
		// },
	}
}
</script>

<style scoped="scoped">
	@import './css/reset.min.css';
	@import './css/styles.css';
	#persondata {
		z-index: 1;
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		overflow: auto;
		background-color: #ffc910;
	}
	header {
	  width: 7.5rem;
	  height: 4.28rem;
	  background: url("./images/banner.png") center no-repeat;
	  background-size: cover;
	}
	p{
		font-size: 9px;
	}
	.mui-icon {
	    font-family: Muiicons;
	    font-size: 36px;
	    font-weight: 400;
	    font-style: normal;
	    line-height: 1;
	    display: inline-block;
	    text-decoration: none;
	    -webkit-font-smoothing: antialiased;
			color: #000000;
	}
</style>
