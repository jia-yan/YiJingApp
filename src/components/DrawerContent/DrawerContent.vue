<template>
	<div id="drawercontents">
		<div class="box-fix">
			<div class="box-information">
				<!-- <div class="box-information-left" @click="goToswift" @click="navToggleSon"><img src="./../../assets/images/header/pic.png" alt="touxiang"></div> -->
				<div class="box-information-left" @click="navToggleSon({ path: '/persondata'})"><img src="./../../assets/images/header/pic.png" alt="touxiang"></div>
				<div class="box-information-right">
					<div class="box-information-right-name">Fighting</div>
					<div class="box-information-right-specially">
						<span>马鞍山</span>
						<span>|</span>
						<span>学生</span>
					</div>
				</div>
			</div>
			<div class="team">
				<div class="team-left">
					<div class="team-left-top"><span>所在团队</span><span>vip</span><span>v16</span></div>
					<div class="team-left-bottom"><span>硬币：</span><span>34.0</span></div>
				</div>
				<div class="team-right">
					<div class="team-right-boxrulays"><img src="" alt=""></div>
					<div class="team-right-boxrulays"><img src="" alt=""></div>
				</div>
			</div>
			<div class="box-classfy">
				<div class="box-classfy-son" @click="navToggleSon({ path: '/dynstate'})">
					<div class="box-classfy-son-top centuty">1</div>
					<div class="box-classfy-son-bottom centuty">动态</div>
				</div>
				<div class="box-classfy-son" @click="navToggleSon({ path: '/visitor'})">
					<div class="box-classfy-son-top centuty">9</div>
					<div class="box-classfy-son-bottom centuty">访客</div>
				</div>
				<div class="box-classfy-son" @click="navToggleSon({ path: '/looking'})">
					<div class="box-classfy-son-top centuty">330</div>
					<div class="box-classfy-son-bottom centuty">看点</div>
				</div>			
			</div>
		</div>
		<div class="list-box">
				<div class="list-box-grounp">
					<ul class="mui-table-view">					
					    <li class="mui-table-view-cell list-row" @click="navToggleSon({ path: '/history'})">
					      <a class="mui-navigate-right">
									<span class="mui-icon mui-icon-compose"></span>
									<span>历史记录</span>
								</a>
					    </li>
					    <li class="mui-table-view-cell" @click="navToggleSon({ path: '/downmanage'})">
					      <a class="mui-navigate-right">
					      	<span class="mui-icon mui-icon-compose"></span>
					      	<span>下载管理</span>
					      </a>
					    </li>
					    <li class="mui-table-view-cell" @click="navToggleSon({ path: '/shoucang'})">
					      <a class="mui-navigate-right">
					      	<span class="mui-icon mui-icon-compose"></span>
					      	<span>我的收藏</span>
					      </a>
					    </li>
							<li class="mui-table-view-cell" @click="navToggleSon({ path: '/signin'})">
							   <a class="mui-navigate-right">
							   	<span class="mui-icon mui-icon-compose"></span>
							   	<span>我的打卡</span>
							   </a>
							</li>
							<li class="mui-table-view-cell">
							   <a class="mui-navigate-right">
							   	<span class="mui-icon mui-icon-compose"></span>
							   	<span>个性装扮</span>
							   </a>
							</li>
					</ul>
				</div>
				<div class="list-box-grounp">
					<ul class="mui-table-view">
					    <li class="mui-table-view-cell" @click="navToggleSon({ path: '/mypublish'})">
					      <a class="mui-navigate-right">
					      	<span class="mui-icon mui-icon-compose"></span>
					      	<span>我的发布</span>
					      </a>
					    </li>
							<li class="mui-table-view-cell">
								<a class="mui-navigate-right">
									<span class="mui-icon mui-icon-compose"></span>
									<span>创作中心</span>
								</a>
							</li>
					    <li class="mui-table-view-cell">
								<a class="mui-navigate-right">
									<span class="mui-icon mui-icon-compose"></span>
									<span>热门活动</span>
								</a>
					    </li>
					</ul>
				</div>
				<div class="list-box-grounp">
					<ul class="mui-table-view">
					    <li class="mui-table-view-cell">
					      <a class="mui-navigate-right">
					      	<span class="mui-icon mui-icon-compose"></span>
					      	<span>直播中心</span>
					      </a>
					    </li>
							<li class="mui-table-view-cell">
							  <a class="mui-navigate-right">
							  	<span class="mui-icon mui-icon-compose"></span>
							  	<span>我的课程</span>
							  </a>
							</li>
					    <li class="mui-table-view-cell">
					      <a class="mui-navigate-right">
					      	<span class="mui-icon mui-icon-compose"></span>
					      	<span>我的订单</span>
					      </a>
					    </li>
							<li class="mui-table-view-cell">
							  <a class="mui-navigate-right">
							  	<span class="mui-icon mui-icon-compose"></span>
							  	<span>会员中心</span>
							  </a>
							</li>
					</ul>
				</div>
				<div class="list-box-grounp">
					<ul class="mui-table-view">
					    <li class="mui-table-view-cell">
					      <a class="mui-navigate-right">
					      	<span class="mui-icon mui-icon-compose"></span>
					      	<span>账号管理</span>
					      </a>
					    </li>
							<li class="mui-table-view-cell">
							  <a class="mui-navigate-right">
							  	<span class="mui-icon mui-icon-compose"></span>
							  	<span>关于我们</span>
							  </a>
							</li>
					    <li class="mui-table-view-cell">
					      <a class="mui-navigate-right">
					      	<span class="mui-icon mui-icon-compose"></span>
					      	<span>加入我们</span>
					      </a>
					    </li>
							<li class="mui-table-view-cell">
							  <a class="mui-navigate-right">
							  	<span class="mui-icon mui-icon-compose"></span>
							  	<span>帮助与反馈</span>
							  </a>
							</li>
					</ul>
				</div>
		</div>
		<div class="team-blank"></div>
		<div class="tabbar-bottom-fix">
			<div class="box-classfy">
				<div class="box-classfy-son">
					<div class="box-classfy-son-top centuty">1</div>
					<div class="box-classfy-son-bottom centuty">夜间</div>
				</div>
				<div class="box-classfy-son">
					<div class="box-classfy-son-top centuty">9</div>
					<div class="box-classfy-son-bottom centuty">申请</div>
				</div>
				<div class="box-classfy-son">
					<div class="box-classfy-son-top centuty">330</div>
					<div class="box-classfy-son-bottom centuty">客服</div>
				</div>			
			</div>
		</div>
	</div>
</template>
<script>
  export default {
		name: 'DrawerContents',
    data () {
     return {
        // theme2: 'dark'
      }
    },
		methods: {
			// goToswift() {
			// 	// router.push({ path: '/persondata'})
				
			// 	this.$router.push({ path: '/persondata'});
			// },
			navToggleSon(router) {
				this.$emit('navClick')
				this.$router.push(router)
			},
			// navToggleSon1() {
			// 	this.$emit('navClick')
			// 	this.$router.push({ path: '/dynstate'})
			// },
			// navToggleSon2() {
			// 	this.$emit('navClick')
			// 	this.$router.push({ path: '/visitor'})
			// },
		}
  }
</script>
<style scoped="scoped">
	.box-fix{
		position: fixed;
		top: 0;
		z-index: 10;
		background-color: #FAFAFA;
		width: 100%;
	}
	.box-information{
		width: 100%;
		height: 80px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding-left: 20px;
	}
	.box-information .box-information-left,.box-information .box-information-left img{
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
	.box-information .box-information-right{
		width: 200px;
		height: 80px;
		padding-left: 20px;
		display: flex;
		align-content: center;
		flex-wrap: wrap;
	}
	.box-information .box-information-right .box-information-right-name,.box-information .box-information-right .box-information-right-specially{
		width: 100%;
		/* height: 30px; */
	}
	.box-information .box-information-right .box-information-right-name{
		font-size: 20px;
		font-weight: 400;
		font-style: italic;
		letter-spacing: 1px;
	}
	.box-information .box-information-right .box-information-right-specially span{
		margin-right: 5px;
		font-size: 13px;
		color: #919191;
	}
	.team{
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.team .team-left{
		width: 60%;
		height: auto;
		margin-left: 10px;
	}
	.team .team-right{
		width: 40%;
		height: auto;
		display: flex;
		justify-content: space-around;
	}
	.team-right-boxrulays{
		width: 28px;
		height: 28px;
		border-radius: 50%;
		background-color: #888888;
	}
	.team-left-top>span,.team-left-bottom>span{
		margin-right: 0.3125rem;
	}
	.box-classfy{
		width: 100%;
		height: 70px;
		display: flex;
		justify-content: space-around;
		border-bottom: 1px solid #F0F0F0;
	}
	.box-classfy .box-classfy-son{
		width: 60px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-content: center;
		margin: 0 10px;
	}
	.box-classfy .box-classfy-son .box-classfy-son-bottom{
		/* color: #BBBBBB; */
		margin-top: 3px;
		font-weight: 500;
	}
	.box-classfy .box-classfy-son .centuty{
		width: 100%;
		text-align: center;
	}
	.mui-table-view-cell:after,.mui-table-view:after{
		background-color: #FFFFFF;
	}
	.list-box{
		width: 100%;
		height: 100%;
		margin-top: 200px;
	}
	.list-box .list-box-grounp{
		border-top: 10px solid #ededed;
	}
	.list-box .list-box-grounp ul li a span{
		margin-right: 3px;
	}
	.tabbar-bottom-fix{
		position: fixed;
		bottom: 0;
		z-index: 1;
		background-color: #FAFAFA;
	}
	.team-blank{
		width: 100%;
		height: 120px;
	}
	.mui-table-view-cell:active{
		background-color: #dfdfdf;
	}
</style>
