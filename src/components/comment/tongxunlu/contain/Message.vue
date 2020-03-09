<template>
	<div class="con" @click="navToggleSon()">
		<div class="left"><img src="../../../../../public/images/cbd.jpg" alt="" /></div>
		<div class="right">
			<div class="left-1">
				<div class="top">气质男神*^*</div>
				<div class="bottom">比颜值我认输，但比气质，恕我直言，在场的各位加起来都不够我眨眨眼的</div>
			</div>
			<div class="right-1">
				<div class="time">23:49</div>
				<div class="xiaoxi">3</div>
			</div>
		</div>
		
		
	</div>
	
</template>

<script>
	export default {
		name: 'Search',
		components: {
			
		},
		methods: {
			navToggleSon() {
				this.$emit('navClick')
			},
			// chatwith(router) {
			// 	this.$router.push(router)
			// }
		}
	}
</script>

<style>

.con {
	width: 100%;
	height: 80px;
	display: flex;
	justify-content: space-between;
	background-color: #fff;
	border-bottom: 1px solid #eee;
}
.con .left {
	width: 25%;
	padding-left: 20px;
	height: 80px;
	display: flex;
	align-items: center;
}
.con .left img {
	width: 50px;
	height: 50px;
	border-radius: 50%;
}
.con .right {
	width: 75%;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.con .right .left-1 {
	height: 60px;
	width: 180px;
	display: flex;
	/*align-items: center;*/
	align-content: center;
	flex-wrap: wrap;
}
.con .right .left-1 .top {
	margin-bottom: 5px;
	/*color: #56cb16;*/
	font-size: 14px;
}
.con .right .left-1 .bottom {
	font-size: 12px;
	color: #8c8b8b;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 1;
	overflow: hidden;
}
.con .right .right-1 {
	margin-right: 20px;
	width: 50px;
	display: flex;
	justify-content: center;
	align-content: center;
	flex-wrap: wrap;
}
.con .right .right-1 .time {
	color: #56cb16;
}
.con .right .right-1 .xiaoxi {
	height: 15px;
	width: 30px;
	background-color: #56cb16;
	color: #eee;
	border-radius: 7px;
	margin-top: 3px;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 0.7;
	font-size: 12px;
}
</style>
