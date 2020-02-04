<template>
	<div id="persondata">
		<div id="header">
			<header id="header-son" class="mui-bar mui-bar-nav">
				<a class="mui-icon mui-icon-arrowleft mui-pull-left my-icon" @click="goBack"></a>
				<h1 class="mui-title">我的课程</h1>
				<a class="mui-icon mui-icon-search mui-pull-right"></a>
			</header>
		</div>
		
		<div class="navbar">
			<div class="navbarfix">
				<mt-navbar v-model="selected" class="navbar-son" fixed>
					<mt-tab-item id="1">已完成</mt-tab-item>
				  <mt-tab-item id="2">未完成</mt-tab-item>
				</mt-navbar>
			</div>
			
			
			<!-- tab-container -->
			<div class="tab-container">
				<mt-tab-container v-model="selected" swipeable>
				  <mt-tab-container-item id="1">
						<div class="myclass">
							<div class="myclass-box">
								<div class="myclass-box-top">
									<img src="../../chat/images/pic1.jpg" alt="">
								</div>
								<div class="myclass-box-bottom">
									<div class="myclass-box-bottom-title">
										厉害了原来还可以这样哈哈哈哈
									</div>
									<div class="myclass-box-bottom-information">
										<div>
											<span>讲师</span>
											<span>Fighting</span>
										</div>
										<div>
											<span>12000</span>
											<span>人观看</span>
										</div>								
									</div>
								</div>
							</div>
							<div class="myclass-box">
								<div class="myclass-box-top">
									<img src="../../chat/images/cbd.jpg" alt="">
								</div>
								<div class="myclass-box-bottom">
									<div class="myclass-box-bottom-title">
										厉害了原来还可以这样哈哈哈哈
									</div>
									<div class="myclass-box-bottom-information">
										<div>
											<span>讲师</span>
											<span>Fighting</span>
										</div>
										<div>
											<span>12000</span>
											<span>人观看</span>
										</div>								
									</div>
								</div>
							</div>
							<div class="myclass-box">
								<div class="myclass-box-top">
									<img src="../../chat/images/cbd.jpg" alt="">
								</div>
								<div class="myclass-box-bottom">
									<div class="myclass-box-bottom-title">
										厉害了原来还可以这样哈哈哈哈
									</div>
									<div class="myclass-box-bottom-information">
										<div>
											<span>讲师</span>
											<span>Fighting</span>
										</div>
										<div>
											<span>12000</span>
											<span>人观看</span>
										</div>								
									</div>
								</div>
							</div>
							<div class="myclass-box">
								<div class="myclass-box-top">
									<img src="../../chat/images/cbd.jpg" alt="">
								</div>
								<div class="myclass-box-bottom">
									<div class="myclass-box-bottom-title">
										厉害了原来还可以这样哈哈哈哈
									</div>
									<div class="myclass-box-bottom-information">
										<div>
											<span>讲师</span>
											<span>Fighting</span>
										</div>
										<div>
											<span>12000</span>
											<span>人观看</span>
										</div>								
									</div>
								</div>
							</div>
							<div class="myclass-box">
								<div class="myclass-box-top">
									<img src="../../chat/images/cbd.jpg" alt="">
								</div>
								<div class="myclass-box-bottom">
									<div class="myclass-box-bottom-title">
										厉害了原来还可以这样哈哈哈哈
									</div>
									<div class="myclass-box-bottom-information">
										<div>
											<span>讲师</span>
											<span>Fighting</span>
										</div>
										<div>
											<span>12000</span>
											<span>人观看</span>
										</div>								
									</div>
								</div>
							</div>
							<div class="myclass-box">
								<div class="myclass-box-top">
									<img src="../../chat/images/cbd.jpg" alt="">
								</div>
								<div class="myclass-box-bottom">
									<div class="myclass-box-bottom-title">
										厉害了原来还可以这样哈哈哈哈
									</div>
									<div class="myclass-box-bottom-information">
										<div>
											<span>讲师</span>
											<span>Fighting</span>
										</div>
										<div>
											<span>12000</span>
											<span>人观看</span>
										</div>								
									</div>
								</div>
							</div>
							<div class="myclass-box">
								<div class="myclass-box-top">
									<img src="../../chat/images/cbd.jpg" alt="">
								</div>
								<div class="myclass-box-bottom">
									<div class="myclass-box-bottom-title">
										厉害了原来还可以这样哈哈哈哈
									</div>
									<div class="myclass-box-bottom-information">
										<div>
											<span>讲师</span>
											<span>Fighting</span>
										</div>
										<div>
											<span>12000</span>
											<span>人观看</span>
										</div>								
									</div>
								</div>
							</div>
							<div class="myclass-box">
								<div class="myclass-box-top">
									<img src="../../chat/images/cbd.jpg" alt="">
								</div>
								<div class="myclass-box-bottom">
									<div class="myclass-box-bottom-title">
										厉害了原来还可以这样哈哈哈哈
									</div>
									<div class="myclass-box-bottom-information">
										<div>
											<span>讲师</span>
											<span>Fighting</span>
										</div>
										<div>
											<span>12000</span>
											<span>人观看</span>
										</div>								
									</div>
								</div>
							</div>
							<div class="myclass-box">
								<div class="myclass-box-top">
									<img src="../../chat/images/cbd.jpg" alt="">
								</div>
								<div class="myclass-box-bottom">
									<div class="myclass-box-bottom-title">
										厉害了原来还可以这样哈哈哈哈
									</div>
									<div class="myclass-box-bottom-information">
										<div>
											<span>讲师</span>
											<span>Fighting</span>
										</div>
										<div>
											<span>12000</span>
											<span>人观看</span>
										</div>								
									</div>
								</div>
							</div>
							
						</div>
						
				  </mt-tab-container-item>
				  <mt-tab-container-item id="2">
						<div class="myclass">
							<div class="myclass-box">
								<div class="myclass-box-top">
									<img src="../../chat/images/pic1.jpg" alt="">
								</div>
								<div class="myclass-box-bottom">
									<div class="myclass-box-bottom-title">
										厉害了原来还可以这样哈哈哈哈
									</div>
									<div class="myclass-box-bottom-information">
										<div>
											<span>讲师</span>
											<span>Fighting</span>
										</div>
										<div>
											<span>12000</span>
											<span>人观看</span>
										</div>								
									</div>
								</div>
							</div>
							<div class="myclass-box">
								<div class="myclass-box-top">
									<img src="../../chat/images/pic1.jpg" alt="">
								</div>
								<div class="myclass-box-bottom">
									<div class="myclass-box-bottom-title">
										厉害了原来还可以这样哈哈哈哈
									</div>
									<div class="myclass-box-bottom-information">
										<div>
											<span>讲师</span>
											<span>Fighting</span>
										</div>
										<div>
											<span>12000</span>
											<span>人观看</span>
										</div>								
									</div>
								</div>
							</div>
							<div class="myclass-box">
								<div class="myclass-box-top">
									<img src="../../chat/images/pic1.jpg" alt="">
								</div>
								<div class="myclass-box-bottom">
									<div class="myclass-box-bottom-title">
										厉害了原来还可以这样哈哈哈哈
									</div>
									<div class="myclass-box-bottom-information">
										<div>
											<span>讲师</span>
											<span>Fighting</span>
										</div>
										<div>
											<span>12000</span>
											<span>人观看</span>
										</div>								
									</div>
								</div>
							</div>
							<div class="myclass-box">
								<div class="myclass-box-top">
									<img src="../../chat/images/pic1.jpg" alt="">
								</div>
								<div class="myclass-box-bottom">
									<div class="myclass-box-bottom-title">
										厉害了原来还可以这样哈哈哈哈
									</div>
									<div class="myclass-box-bottom-information">
										<div>
											<span>讲师</span>
											<span>Fighting</span>
										</div>
										<div>
											<span>12000</span>
											<span>人观看</span>
										</div>								
									</div>
								</div>
							</div>
							<div class="myclass-box">
								<div class="myclass-box-top">
									<img src="../../chat/images/pic1.jpg" alt="">
								</div>
								<div class="myclass-box-bottom">
									<div class="myclass-box-bottom-title">
										厉害了原来还可以这样哈哈哈哈
									</div>
									<div class="myclass-box-bottom-information">
										<div>
											<span>讲师</span>
											<span>Fighting</span>
										</div>
										<div>
											<span>12000</span>
											<span>人观看</span>
										</div>								
									</div>
								</div>
							</div>
							<div class="myclass-box">
								<div class="myclass-box-top">
									<img src="../../chat/images/pic1.jpg" alt="">
								</div>
								<div class="myclass-box-bottom">
									<div class="myclass-box-bottom-title">
										厉害了原来还可以这样哈哈哈哈
									</div>
									<div class="myclass-box-bottom-information">
										<div>
											<span>讲师</span>
											<span>Fighting</span>
										</div>
										<div>
											<span>12000</span>
											<span>人观看</span>
										</div>								
									</div>
								</div>
							</div>
							<div class="myclass-box">
								<div class="myclass-box-top">
									<img src="../../chat/images/pic1.jpg" alt="">
								</div>
								<div class="myclass-box-bottom">
									<div class="myclass-box-bottom-title">
										厉害了原来还可以这样哈哈哈哈
									</div>
									<div class="myclass-box-bottom-information">
										<div>
											<span>讲师</span>
											<span>Fighting</span>
										</div>
										<div>
											<span>12000</span>
											<span>人观看</span>
										</div>								
									</div>
								</div>
							</div>
							<div class="myclass-box">
								<div class="myclass-box-top">
									<img src="../../chat/images/pic1.jpg" alt="">
								</div>
								<div class="myclass-box-bottom">
									<div class="myclass-box-bottom-title">
										厉害了原来还可以这样哈哈哈哈
									</div>
									<div class="myclass-box-bottom-information">
										<div>
											<span>讲师</span>
											<span>Fighting</span>
										</div>
										<div>
											<span>12000</span>
											<span>人观看</span>
										</div>								
									</div>
								</div>
							</div>
							<div class="myclass-box">
								<div class="myclass-box-top">
									<img src="../../chat/images/pic1.jpg" alt="">
								</div>
								<div class="myclass-box-bottom">
									<div class="myclass-box-bottom-title">
										厉害了原来还可以这样哈哈哈哈
									</div>
									<div class="myclass-box-bottom-information">
										<div>
											<span>讲师</span>
											<span>Fighting</span>
										</div>
										<div>
											<span>12000</span>
											<span>人观看</span>
										</div>								
									</div>
								</div>
							</div>
							
						</div>
						
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
	name: 'MyClass',
	data() {
		return {
			selected: '1'
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
	.myclass{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-content: flex-start;
		flex-wrap: wrap;
		margin-top: 5px;
	}
	.myclass-box{
		width: 48%;
		height: 136px;
		border-radius: 5px;
		display: flex;
		justify-content: center;
		align-content: flex-start;
		flex-wrap: wrap;
		margin: 3px 3px;
		background-color: #FFFFFF;
		border: 1px solid #f3ebeb;
		box-shadow: 2px -2px 5px 0px #F3F3F3;
	}
	.myclass-box-top{
		width: 100%;
		height: 90px;
		border-radius: 5px;
	}
	.myclass-box-top img{
		width: 100%;
		height: 90px;
		border-radius: 5px;
	}
	.myclass-box-bottom{
		height: 45px;
		width: 100%;
		padding-top: 3px;
	}
	.myclass-box-bottom-title{
		width: 100%;
		height: 20px;
		line-height: 20px;
		font-size: 13px;
		font-weight: 600;
		letter-spacing: 1px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
	.myclass-box-bottom-information{
		width: 100%;
		height: 20px;
		padding-bottom: 5px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 10px;
		color: #746f6f;;
	}
	.myclass-box-bottom-information div:nth-child(2){
		/* margin-right: 5px; */
	}
	.myclass-box-bottom-information div span{
		margin: 0 6px 0 0;
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
		/* background-color: #F5F5F5; */
		background-color: #FFFFFF;
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
