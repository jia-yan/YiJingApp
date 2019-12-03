<template>
	<!-- <div id="shouye">shouye</div> -->
	<swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback" class="my-swipe">
		<!-- slides -->
		<swiper-slide class="my-swiper-slide"><img class="swipe-img" src="https://img.alicdn.com/tps/TB1ZS5EJXXXXXaJXVXXXXXXXXXX-730-300.jpg" alt="" style="opacity: 1;"></swiper-slide>
		<swiper-slide class="my-swiper-slide"><img class="swipe-img" src="https://gw.alicdn.com/imgextra/i2/1480336/O1CN015bee3l1ELveBLY16t_!!1480336-0-lubanu.jpg" alt="" style="opacity: 1;"></swiper-slide>
		<swiper-slide class="my-swiper-slide"><img class="swipe-img" src="https://gw.alicdn.com/imgextra/i4/1445320/O1CN0156Rcxm1pAbda8cOPZ_!!1445320-0-lubanu.jpg" alt="" style="opacity: 1;"></swiper-slide>
		<swiper-slide class="my-swiper-slide"><img class="swipe-img" src="https://gw.alicdn.com/imgextra/i4/1460168/O1CN01C4zeqZ1D6z6nRwrmn_!!1460168-0-lubanu.jpg" alt="" style="opacity: 1;"></swiper-slide>
		
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>

<script>
	//导入轮播组件 vue-awesome-swiper
	//因为这不是全局导入，只是按需导入 所以要在所需组件中导入注册
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	
	
	export default {
		name: 'ShouYe',
		components: {
			swiper,
			swiperSlide
		},
		data() {
			return {
				swiperOption: {
					// some swiper options/callbacks
					// 所有的参数同 swiper 官方 api 参数
					// ...
					autoplay: true,//可选选项，自动滑动
					initialSlide :0,//设置为2后，Swiper初始化时activeSlide成了第三个
					direction : 'horizontal',//可设置水平(horizontal)或垂直(vertical)  可使用swiper.changeDirection()方法动态切换方向
					//height: 'auto',//你的slide高度
					height: 120,
					autoplay : {
					  delay:2000
					},
					loopedSlides: 5,//在loop模式下使用slidesPerview:'auto'，还需使用该参数设置所要用到的loop个数(一般设置大于可视slide个数2个即可)
					effect : 'coverflow',//切换效果
					slidesPerView: '1.2',//设置slider容器能够同时显示的slides数量  可以为数字【数字可以位小数】 auto 
					centeredSlides: true,//true 滑块汇聚中
					spaceBetween: '15%',//slide 之间的距离
					coverflowEffect: {
					  rotate: 0,
					  stretch: 0,//每个slide之间的拉升值 值越大靠得越近
					  depth: 200,//slide位置的深度 值越大看起来越小
					  modifier: 1,//depth rotate stretch 的倍率
					  slideShadows : false//开启slide阴影
					},
					
					speed:300,//切换速度，即slider自动滑动开始到结束的时间（单位ms），也是触摸滑动时释放至贴合的时间 类似于过度的时间
					// width: 100,
					autoHeight: false, //高度随内容变化
					pagination: {
					  el: '.swiper-pagination'
					},
					preloadImages:false,//默认为true，Swiper会强制加载所有图片。
					// freeMode : true,//默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
					// freeModeMomentumRatio : 5,
					loop : true,//设置为true 则开启loop模式。loop模式：会在原本slide前后复制若干个slide(默认一个)并在合适的时候切换，让Swiper看起来是循环的。 loop模式在与free模式同用时会产生抖动，因为free模式下没有复制slide的时间点。
					//preventClicks : false,//默认true
					observer:true,//启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
					//默认false，不开启，可以使用update()方法更新。
					on: {
						tap: function(event) {
						  //window.location.replace('/chat')
							window.location.href = '/chat'
					  }
					},
				}
			}
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper;
			}
		},
		mounted() {
			// current swiper instance
			// 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
			// console.log('this is current swiper instance object', this.swiper);
			// this.swiper.slideTo(5, 1000, false);
		},
		methods: {
			callback: () => {
				
			}
		}
	}
</script>

<style scoped="scoped">
	.my-swipe{
		margin-top: 3px;
	}
	/* .my-swiper-slide{
		border-radius: 5px;
	} */
	.swipe-img{
		height: 120px;
		width: 100%;
		border-radius: 5px;
	}
</style>
