<template>
  <div id="app">
		<!-- 此处千万不能写header 因为html中也会有这种标签 -->
		<!-- @slide-start="handleSlideStart"
		@slide-move="handleSlideMove"
		@slide-end="handleSlideEnd" -->
		<vue-drawer-layout ref="drawerLayout" :drawer-width="240" 
				:content-drawable="true" 
		    @mask-click="handleMaskClick"
				class="my-drawer-layout">
		  <div class="drawer-content my-drawer-content" slot="drawer">
		    <!-- drawer-content -->
				<drawer-contents @navClick="handleToggleDrawer"></drawer-contents>
		  </div>
		  <div slot="content">
		    <!-- main-content -->
				
				<!-- <my-header @navClick="handleToggleDrawer"></my-header> -->
				<!-- <router-view name="header" @navClick="handleToggleDrawer"></router-view> -->
				<transition :name="transitionName">
				  <keep-alive>
				    <router-view name="header" @navClick="handleToggleDrawer"></router-view>
				  </keep-alive>
				</transition>
				
				<div id="content">
					<!-- <router-view></router-view> -->
					<!-- keep-alive缓存数据 -->
					<transition :name="transitionName">
					  <keep-alive>
					    <router-view></router-view>
					  </keep-alive>
					</transition>
				</div>
				<!-- <tab-bar></tab-bar> -->
				
				<transition :name="transitionName">
				  <keep-alive>
				    <router-view name="tabbar"></router-view>
				  </keep-alive>
				</transition>
				<!-- <router-view name="tabbar"></router-view> -->
		  </div>
		</vue-drawer-layout>

		<!-- <my-header @navClick="toggleNav"></my-header> -->
		<!-- <swiper :options="swiperOption" ref="mySwiper" v-show="isShow" class="offcavas-s">
			<off-cavas class="offcavas" v-show="isShow" @navClick="toggleNav"></off-cavas>			
		</swiper> -->
		
		 <!-- <off-cavas leftWidth="200px">
			 
		 </off-cavas> -->
		<!-- <div id="content"> -->
			<!-- <transition>
			  <off-cavas class="offcavas" v-show="isShow" @navClick="toggleNav"></off-cavas>    
		  </transition> -->
			
			<!-- <router-view></router-view>
		</div>
    <tab-bar></tab-bar> -->
  </div>
</template>


<script>
	import TabBar from './components/tabBar/TabBar.vue'
	import myHeader from './components/Header/Header.vue'
	import FirstHeader from './components/Header/FirstHeader.vue'
	
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	
	import DrawerContents from './components/DrawerContent/DrawerContent'
	
	export default {
		name: 'app',
		data() {
			return {
				isShow: false,
				transitionName:''
			}
		},
		components: {//这里的components一定要以对象的形式
			TabBar,
			myHeader,
			FirstHeader,
			swiper,
			swiperSlide,
			DrawerContents
		},
		mounted: () => {
			// mui('body').on('tap','a',function(){
			// 	//document.location.href=this.href;
			// 	window.vm.$router.push({path: this.href});
			// });
		},
		watch: {//使用watch 监听$router的变化
		  $route(to, from) {
		    //如果to索引大于from索引,判断为前进状态,反之则为后退状态
		    if(to.meta.index > from.meta.index){
					//设置动画名称
	        this.transitionName = 'slide-left';
		    }else{
		      this.transitionName = 'slide-right';
		    }
		  }
	  },
		methods: {
			// toggleNav: () => {
			// 	this.isShow = !isShow
			// }
			// toggleNav() {
			// 	this.isShow = !this.isShow
			// 	console.log(this.isShow)
			// },
			// handleSlideStart() {
			//   this.$refs.drawerLayout.toggle()
			// },
		 //  handleSlideMove(position) {
			//   console.info('slide-move', position);
			// },
			// handleSlideEnd(visible) {
			//   console.info('slide-end', visible);
		 //  },
			handleMaskClick() {
			  console.info('mask-click');
			  this.$refs.drawerLayout.toggle(false);
			},
			handleToggleDrawer() {
				console.log(11)
			  this.$refs.drawerLayout.toggle()
			}
		}
	}
</script>


<style scoped="scoped">
	@import './assets/css/base.css';/* //这里一定要加 ;*/
	* { padding: 0; margin: 0; }
	*{ 
		touch-action: none; 
		touch-action: pan-y;
	}
	/*解决 引入报错mui.js?8ec1:6451 [Intervention] Unable to preventDefault inside passive event listener due to target being treated as passive. See https://www.chromestatus.com/features/5093566007214080 */
	/* 动画效果 */
	.slide-right-enter-active,
	.slide-right-leave-active,
	.slide-left-enter-active,
	.slide-left-leave-active {
	  will-change: transform;
	  transition: all 0.3s ease;
	  /* position: absolute;  you  bug  */
	}
	.slide-right-enter {
	  opacity: 0;
	  transform: translate3d(-100%, 0, 0);
	}
	.slide-right-leave-active {
	  opacity: 0;
	  transform: translate3d(100%, 0, 0);
	}
	.slide-left-enter {
	  opacity: 0;
	  transform: translate3d(100%, 0, 0);
	}
	.slide-left-leave-active {
	  opacity: 0;
	  transform: translate3d(-100%, 0, 0);
	}
	
	#app{
		width: 100%;
		/* height: auto; */
		height: 100%;
		background-color: #FFFFFF!important;
	}
	#app #content{
		/* position: relative; */
		position: fixed;/*这个不能用相对定位，否则超出的内容无法显示*/
		top: 49.8px;
		width: 100%;
		/* height: auto; */
		height: 100%;
		/* overflow-y: scroll; */
	}
	#app .drawer-content{
		width: 100%;
		height: 100%;
		/* 解决抽屉内容超出屏幕底部加上overflow-y: scroll;，使得菜单有滚动条 */
		overflow-y: scroll;
	}
	/* #app .my-drawer-layout{
		height: 100%;
	} */
	/*  */
	/* .mui-icon{
		color: #2b85e4;
	} */
</style>
