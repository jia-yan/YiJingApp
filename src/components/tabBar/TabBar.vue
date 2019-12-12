<template>
	<!-- //一定不要将mint-ui组件放到root下例如千万不要其直接放到template下 -->
	<div class="tabbar my-tabbar">
		<nav class="mui-bar mui-bar-tab my-mui-bar">
			<router-link class="mui-tab-item" to="/shouye">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">信息</span>
			</router-link>
			<router-link class="mui-tab-item" to="/publish">
				<span class="mui-icon mui-icon-plus publish"></span>
			</router-link>
			<router-link class="mui-tab-item" to="/tongxunlu">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</router-link>
			<router-link class="mui-tab-item" to="/set">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
		
	</div>
</template>
<!-- 图片的路径不能直接写，要require进来 -->
<script>
	export default {
		name: 'TabBar',
		components: {}
	}
</script>

<style scoped="scoped">
	.my-tabbar .my-mui-bar{
		background-color: #FFFFFF;
	}
	.tabbar .mui-bar .publish{
		/* display: block; */
		width: 36px;
		height: 36px;
		font-size: 36px;
	}
</style>
