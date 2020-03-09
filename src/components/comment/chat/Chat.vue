<template>
	<div class="chat-content" id="chat">
		<!-- <div class="my-mt">
			<mt-search
				class="my-mt-search"
			  cancel-text="取消"
			  placeholder="搜索">
			</mt-search>
		</div>	 -->
		<search></search>
		<chat-swipe></chat-swipe>
		<div id="occupation">
			<div class="occupation">职圈</div>
			<div class="occupation">片区</div>
		</div>
		<div>
			<card-view></card-view>
			<card-view></card-view>
			<card-view></card-view>
		</div>
		<chat-swipe></chat-swipe>
		<div class="intrestion">
			<div class="intrestion-model">
				<div class="model"></div>
				<div class="model"></div>
				<div class="model"></div>
			</div>
			<div class="intrestion-model">
				<div class="model"></div>
				<div class="model"></div>
				<div class="model"></div>
			</div>
		</div>
		<div>
			<news-read></news-read>
			<news-read></news-read>
			<news-read></news-read>
		</div>
		<div class="intrestion-model my-intrestion-model">
			<div class="model"></div>
			<div class="model"></div>
			<div class="model"></div>
		</div>	
		<div>
			<card-view></card-view>
			<card-view></card-view>
			<card-view></card-view>
		</div>
		<div class="intrestion">
			<div class="intrestion-model">
				<div class="model"></div>
				<div class="model"></div>
				<div class="model"></div>
			</div>
			<div class="intrestion-model">
				<div class="model"></div>
				<div class="model"></div>
				<div class="model"></div>
			</div>
		</div>
		<div>
			<news-read></news-read>
			<news-read></news-read>
			<news-read></news-read>
		</div>
		<div id="blank"></div>
	</div>
</template>

<script>
	import ChatSwipe from './contain/ChatSwipe.vue'
	import CardView from './contain/CardView.vue'
	import NewsRead from './contain/NewsRead.vue'
	import Search from './contain/Search.vue'
	export default {
		name: 'Chat',
		data() {
			return {
				
			}
		},
		components: {
			ChatSwipe,
			CardView,
			NewsRead,
			Search
		}
	}
</script>
<!-- 通常在style中添加属性scoped后，所修改的组件默认样式通常不起效果
使用 “>>>” 可以在使用scoped的情况下，穿透scoped修改组件默认样式 -->
<style scoped="scoped">
	#chat{
		width: 100%;
		height: 100%;
		overflow: auto;
	}
	#blank{
		width: 100%;
		height: 120px;
	}
	
	#occupation{
		display: flex;
		justify-content: space-around;
		width: 100%;
		height: 130px;
	}
	#occupation .occupation{
		/* margin: 0 5px; */
		width: 130px;
		height: 130px;
		/* background-color: #000000; */
		border-radius: 10px;
	}
	#occupation .occupation:nth-child(1){
		background-color: #ffa626;
	}
	#occupation .occupation:nth-child(2){
		background-color: #be5858;
	}
	.intrestion{
		display: flex;
		justify-content: center;
		align-content: space-around;
		flex-wrap: wrap;
		width: 100%;
		height: 260px;
	}
	.intrestion .intrestion-model,.intrestion-model{
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 120px;
	}
	.intrestion .model,.model{
		width: 28%;
		height: 120px;
		background-color: #E06C75;
		border-radius: 10px;
	}
	.my-intrestion-model{
		margin-top: 8px;
	}
</style>
