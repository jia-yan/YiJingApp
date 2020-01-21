<template>
	<div id="set">
		<div class="top-header">
			<div class="box-information">
				<div class="box-information-left"><img src="./../../../assets/images/header/pic.png" alt="touxiang"></div>
				<div class="box-information-right">
					<div class="box-information-right-name">Fighting</div>
					<div class="box-information-right-specially">
						<span>马鞍山</span>
						<span>|</span>
						<span>学生</span>
					</div>
				</div>
			</div>
			<div class="box-classfy">
				<div class="box-classfy-son">
					<div class="box-classfy-son-top centuty">0</div>
					<div class="box-classfy-son-bottom centuty">人气</div>
				</div>
				<div class="box-classfy-son">
					<div class="box-classfy-son-top centuty">0</div>
					<div class="box-classfy-son-bottom centuty">积分</div>
				</div>
				<div class="box-classfy-son">
					<div class="box-classfy-son-top centuty">0</div>
					<div class="box-classfy-son-bottom centuty">粉丝</div>
				</div>
				<div class="box-classfy-son">
					<div class="box-classfy-son-top centuty">0</div>
					<div class="box-classfy-son-bottom centuty">关注</div>
				</div>
			</div>
		</div>
		<div class="list-box">
			<div class="list-box-grounp">
				<ul class="mui-table-view">					
				    <li class="mui-table-view-cell list-row">
				      <a class="mui-navigate-right">
								<span class="mui-icon mui-icon-compose"></span>
								<span>我的创作</span>
							</a>
				    </li>
				    <li class="mui-table-view-cell">							
				      <a class="mui-navigate-right">
				      	<span class="mui-icon mui-icon-compose"></span>
				      	<span>我的收藏</span>
				      </a>
				    </li>
				    <li class="mui-table-view-cell">
				      <a class="mui-navigate-right">
				      	<span class="mui-icon mui-icon-compose"></span>
				      	<span>我的点赞</span>
				      </a>
				    </li>
						<li class="mui-table-view-cell">
						   <a class="mui-navigate-right">
						   	<span class="mui-icon mui-icon-compose"></span>
						   	<span>我的加入</span>
						   </a>
						</li>
				</ul>
			</div>
			<div class="list-box-grounp">
				<ul class="mui-table-view">
				    <li class="mui-table-view-cell">
				      <a class="mui-navigate-right">
				      	<span class="mui-icon mui-icon-compose"></span>
				      	<span>我的课程</span>
				      </a>
				    </li>
				    <li class="mui-table-view-cell">
							<a class="mui-navigate-right">
								<span class="mui-icon mui-icon-compose"></span>
								<span>我的账户</span>
							</a>
				    </li>
				</ul>
			</div>
			<div class="list-box-grounp">
				<ul class="mui-table-view">
				    <li class="mui-table-view-cell">
				      <a class="mui-navigate-right">
				      	<span class="mui-icon mui-icon-compose"></span>
				      	<span>消息中心</span>
				      </a>
				    </li>
				    <li class="mui-table-view-cell">
				      <a class="mui-navigate-right">
				      	<span class="mui-icon mui-icon-compose"></span>
				      	<span>反馈与帮助</span>
				      </a>
				    </li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Set',
		components: {
			
		}
	}
</script>

<style scoped="scoped">
	.top-header{
		width: 100%;
		height: 180px;
	}
	.box-information{
		width: 100%;
		height: 100px;
		display: flex;
		justify-content: flex-start;
		padding-left: 20px;
	}
	.box-information .box-information-left,.box-information .box-information-left img{
		width: 80px;
		height: 80px;
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
		font-size: 24px;
		font-weight: 400;
		font-style: italic;
		letter-spacing: 1px;
	}
	.box-information .box-information-right .box-information-right-specially span{
		margin-right: 5px;
	}
	.box-classfy{
		width: 100%;
		height: 80px;
		display: flex;
		justify-content: space-around;
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
		color: #BBBBBB;
		margin-top: 3px;
	}
	.box-classfy .box-classfy-son .centuty{
		width: 100%;
		text-align: center;
	}
	.list-box{
		width: 100%;
		height: 100%;
	}
	.list-box .list-box-grounp{
		border-top: 10px solid #ededed;
	}
	.list-box .list-box-grounp ul li a span{
		margin-right: 3px;
	}
	#set{
		position: relative;
		/* top: -50px; */
		width: 100%;
		height: 100%;
		/* height: auto; */
		overflow: auto;
		/* overflow-y: scroll; */
	}
	.mui-table-view-cell:active{
		background-color: #dfdfdf;
	}
</style>
