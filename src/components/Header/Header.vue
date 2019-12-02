<template>
	<div id="header">
		<header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-icon mui-icon-bars mui-pull-left" @click="navToggleSon"></a>
			<!-- <router-link class="mui-icon mui-icon-bars mui-pull-left"></router-link> -->
			<h1 class="mui-title">导航栏</h1>
			<a class="mui-icon mui-icon-extra mui-icon-extra-sweep mui-pull-right" @click="openErWeiMa">
				<mt-actionsheet
				  :actions="actions"
					cancel-text="取消"
				  v-model="sheetVisible">
				</mt-actionsheet>
			</a>
			
		</header>
	</div>
</template>

<script>
	import Actionsheet from 'mint-ui'
	export default {
		name: 'myHeader',
		data() {
			return {
				sheetVisible: false,//一开始不让其见到
				closeOnClickModal: true,
				actions: [
					{
						name: '拍照',
						method: this.takePhoto
					},
					{
						name: '打开相册',
						method: this.openAlbum
					},
					{
						name: '取消',
						method: this.openAlbum
					}
				]
			}
		},
		components: {
			Actionsheet
		},
		methods: {
			// navToggleSon: () => {
			// 	this.$emit('navClick')
			// }//这样定义函数不行
			navToggleSon() {
				this.$emit('navClick')
			},
			openErWeiMa() {
				this.sheetVisible = true
			}
		}
	}
</script>

<style scoped="scoped">
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
</style>
