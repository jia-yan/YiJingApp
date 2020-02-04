<template>
	<div class="list-box">
		<div class="list-box-grounp">
			<ul class="mui-table-view">					
			    <li class="mui-table-view-cell list-row">
			      <a class="mui-navigate-right">
							<span class="mui-icon mui-icon-compose"></span>
							<span>作品</span>
						</a>
			    </li>
			    <li class="mui-table-view-cell">							
			      <a class="mui-navigate-right">
			      	<span class="mui-icon mui-icon-compose"></span>
			      	<span>作者</span>
			      </a>
			    </li>
			    <li class="mui-table-view-cell">
			      <a class="mui-navigate-right">
			      	<span class="mui-icon mui-icon-compose"></span>
			      	<span>圈子</span>
			      </a>
			    </li>
					<li class="mui-table-view-cell">
					   <a class="mui-navigate-right">
					   	<span class="mui-icon mui-icon-compose"></span>
					   	<span>课程</span>
					   </a>
					</li>
					<li class="mui-table-view-cell">
					  <a class="mui-navigate-right">
					  	<span class="mui-icon mui-icon-compose"></span>
					  	<span>文章</span>
					  </a>
					</li>
					<li class="mui-table-view-cell">
					   <a class="mui-navigate-right">
					   	<span class="mui-icon mui-icon-compose"></span>
					   	<span>直播</span>
					   </a>
					</li>
			</ul>
		</div>
		<ul class="mui-table-view">
		    <li class="mui-table-view-cell mui-media">
		        <a href="javascript:;">
		            <img class="mui-media-object mui-pull-left" src="../../comment/chat/images/cbd.jpg">
		            <div class="mui-media-body">
		                幸福
		                <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
		            </div>
		        </a>
		    </li>
		    <li class="mui-table-view-cell mui-media">
		        <a href="javascript:;">
		            <img class="mui-media-object mui-pull-left" src="../../comment/chat/images/cbd.jpg">
		            <div class="mui-media-body">
		                木屋
		                <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
		            </div>
		        </a>
		    </li>
		    <li class="mui-table-view-cell mui-media">
		        <a href="javascript:;">
		            <img class="mui-media-object mui-pull-left" src="../../comment/chat/images/cbd.jpg">
		            <div class="mui-media-body">
		                CBD
		                <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
		            </div>
		        </a>
		    </li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'CardList',
		data() {
			return {
				
			}
		},
		components: {
			
		},
		methods: {
			
		}
	}
</script>

<style scoped="scoped">
	.mui-table-view-cell:active{
		background-color: #dfdfdf;
	}
</style>
