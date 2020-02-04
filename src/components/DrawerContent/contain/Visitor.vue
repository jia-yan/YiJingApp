<template>
	<div id="persondata">
		<div id="header">
			<header id="header-son" class="mui-bar mui-bar-nav">
				<a class="mui-icon mui-icon-arrowleft mui-pull-left my-icon" @click="goBack"></a>
				<h1 class="mui-title">我的访客</h1>
				<a class="mui-icon mui-icon-search mui-pull-right"></a>
			</header>
		</div>
		<div class="listgrounp">
			<mu-paper :z-depth="1" class="demo-list-wrap">
			  <mu-list>
			    <mu-sub-header>Today</mu-sub-header>
			    <mu-list-item avatar button :ripple="false" class="list-grounp-son">
			      <mu-list-item-action>
			        <mu-avatar>
			          <img src="../../Header/images/pic.png">
			        </mu-avatar>
			      </mu-list-item-action>
			      <mu-list-item-title>Mike Li</mu-list-item-title>
			      <mu-list-item-action>
							<a class="mui-icon mui-icon-chatbubble mui-pull-right"></a>
			      </mu-list-item-action>
			    </mu-list-item>
			    <mu-list-item avatar button :ripple="false" class="list-grounp-son">
			      <mu-list-item-action>
			        <mu-avatar>
			          <img src="../../Header/images/pic.png">
			        </mu-avatar>
			      </mu-list-item-action>
			      <mu-list-item-title>Maco Mai</mu-list-item-title>
			      <mu-list-item-action>
			        <a class="mui-icon mui-icon-chatbubble mui-pull-right"></a>
			      </mu-list-item-action>
			    </mu-list-item>
			    <mu-list-item avatar button :ripple="false" class="list-grounp-son">
			      <mu-list-item-action>
			        <mu-avatar>
			          <img src="../../Header/images/pic.png">
			        </mu-avatar>
			      </mu-list-item-action>
			      <mu-list-item-title>Alex Qin</mu-list-item-title>
			      <mu-list-item-action>
			        <a class="mui-icon mui-icon-chatbubble mui-pull-right"></a>
			      </mu-list-item-action>
			    </mu-list-item>
			    <mu-list-item avatar button :ripple="false" class="list-grounp-son">
			      <mu-list-item-action>
			        <mu-avatar>
			          <img src="../../Header/images/pic.png">
			        </mu-avatar>
			      </mu-list-item-action>
			      <mu-list-item-title>Allen Qun</mu-list-item-title>
			      <mu-list-item-action>
			        <a class="mui-icon mui-icon-chatbubble mui-pull-right"></a>
			      </mu-list-item-action>
			    </mu-list-item>
			    <mu-list-item avatar button :ripple="false" class="list-grounp-son">
			      <mu-list-item-action>
			        <mu-avatar>
			          <img src="../../Header/images/pic.png">
			        </mu-avatar>
			      </mu-list-item-action>
			      <mu-list-item-title>Myron Liu</mu-list-item-title>
			      <mu-list-item-action>
			        <a class="mui-icon mui-icon-chatbubble mui-pull-right"></a>
			      </mu-list-item-action>
			    </mu-list-item>
			  </mu-list>
			  <mu-divider></mu-divider>
			  <mu-list>
			    <mu-sub-header>History</mu-sub-header>
			    <mu-list-item avatar button :ripple="false" class="list-grounp-son">
			      <mu-list-item-action>
			        <mu-avatar>
			          <img src="../../Header/images/pic.png">
			        </mu-avatar>
			      </mu-list-item-action>
			      <mu-list-item-title>Gaia Zhou</mu-list-item-title>
			      <mu-list-item-action>
			        <a class="mui-icon mui-icon-chatbubble mui-pull-right"></a>
			      </mu-list-item-action>
			    </mu-list-item>
			    <mu-list-item avatar button :ripple="false" class="list-grounp-son">
			      <mu-list-item-action>
			        <mu-avatar>
			          <img src="../../Header/images/pic.png">
			        </mu-avatar>
			      </mu-list-item-action>
			      <mu-list-item-title>Miller Wang</mu-list-item-title>
			      <mu-list-item-action>
			        <a class="mui-icon mui-icon-chatbubble mui-pull-right"></a>
			      </mu-list-item-action>
			    </mu-list-item>
					<mu-list-item avatar button :ripple="false" class="list-grounp-son">
					  <mu-list-item-action>
					    <mu-avatar>
					      <img src="../../Header/images/pic.png">
					    </mu-avatar>
					  </mu-list-item-action>
					  <mu-list-item-title>Gaia Zhou</mu-list-item-title>
					  <mu-list-item-action>
					    <a class="mui-icon mui-icon-chatbubble mui-pull-right"></a>
					  </mu-list-item-action>
					</mu-list-item>
					<mu-list-item avatar button :ripple="false" class="list-grounp-son">
					  <mu-list-item-action>
					    <mu-avatar>
					      <img src="../../Header/images/pic.png">
					    </mu-avatar>
					  </mu-list-item-action>
					  <mu-list-item-title>Miller Wang</mu-list-item-title>
					  <mu-list-item-action>
					    <a class="mui-icon mui-icon-chatbubble mui-pull-right"></a>
					  </mu-list-item-action>
					</mu-list-item>
					<mu-list-item avatar button :ripple="false" class="list-grounp-son">
					  <mu-list-item-action>
					    <mu-avatar>
					      <img src="../../Header/images/pic.png">
					    </mu-avatar>
					  </mu-list-item-action>
					  <mu-list-item-title>Gaia Zhou</mu-list-item-title>
					  <mu-list-item-action>
					    <a class="mui-icon mui-icon-chatbubble mui-pull-right"></a>
					  </mu-list-item-action>
					</mu-list-item>
					<mu-list-item avatar button :ripple="false" class="list-grounp-son">
					  <mu-list-item-action>
					    <mu-avatar>
					      <img src="../../Header/images/pic.png">
					    </mu-avatar>
					  </mu-list-item-action>
					  <mu-list-item-title>Miller Wang</mu-list-item-title>
					  <mu-list-item-action>
					    <a class="mui-icon mui-icon-chatbubble mui-pull-right"></a>
					  </mu-list-item-action>
					</mu-list-item>
			  </mu-list>
			</mu-paper>
		</div>
		
	</div>
</template>

<script>


export default {
	name: 'Visitor',
	data() {
		return {
			
		}
	},
	components: {
		
	},
	methods: {
		goBack() {
			this.$router.go(-1);
		}
	}
};
</script>

<style scoped="scoped">
	#persondata {
		z-index: 100;
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		overflow: auto;
		background-color: #F5F5F5;
	}
	.listgrounp{
		margin-top: 50px;
	}
	#header-son{
		background-color: #FFFFFF;
	}
	.navbar{
		margin-top: 50px;
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
	.list-grounp-son:active{
		background-color: #dfdfdf;
	}
</style>
