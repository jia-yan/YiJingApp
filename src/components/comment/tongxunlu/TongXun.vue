<template>
	<div id="tongxun">
		<search></search>
		<div>
			<message @navClick="handlechatwith({ path: '/tongxunlu/chatwith'})"></message>
			<message @navClick="handlechatwith({ path: '/tongxunlu/chatwith'})"></message>
			<message @navClick="handlechatwith({ path: '/tongxunlu/chatwith'})"></message>
			<message @navClick="handlechatwith({ path: '/tongxunlu/chatwith'})"></message>
			<message @navClick="handlechatwith({ path: '/tongxunlu/chatwith'})"></message>
			<message @navClick="handlechatwith({ path: '/tongxunlu/chatwith'})"></message>
			<message @navClick="handlechatwith({ path: '/tongxunlu/chatwith'})"></message>
		</div>
		
		<!-- <div class="mychatwith">
			<transition name="slide-left">
			  <keep-alive>
			    <router-view></router-view>
			  </keep-alive>
			</transition>
		</div> -->
		
		<div id="blank"></div>
	</div>
</template>

<script>
	import Search from './contain/Search.vue'
	import Message from './contain/Message.vue'
	export default {
		name: 'TongXun',
		components: {
			Search,
			Message
		},
		methods: {
			handlechatwith(router) {
				this.$router.push(router)
			},
			// chatwith(router) {
			// 	this.$router.push(router)
			// }
		}
	}
</script>

<style scoped="scoped">
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
		
	#tongxun{
		width: 100%;
		height: 100%;
		overflow: auto;
	}
	#blank{
		width: 100%;
		height: 120px;
	}
</style>
