<template>
	<div class="con">
		<div class="left-newsread"><img src="../../comment/chat/images/pic1.jpg" alt="" /></div>
		<div class="right">
			<div class="title">风雨人生路，冷暖心自知</div>
			<div class="wenz">
				不知道从什么时候开始，习惯了所有的事，都自己担着；所有的苦，都自己忍着，不再逢人就诉说，不再对谁都流泪。
			</div>
			<div class="dibu">
				<div class="yi">Fighting</div>
				<div class="er">2019-6-17</div>
				<div class="san">
					<a class="mui-icon mui-icon-plusempty"></a>
					<span>关注</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'NewsRead',
		data() {
			return {
				
			}
		},
		components: {
			
		}
	}
</script>

<style scoped="scoped">
.con {
	width: 100%;
	height: 120px;
	display: flex;
	justify-content: flex-start;
}
.con .left-newsread{
	width: 130px;
	margin-left: 5px;
	/*vertical-align: middle;*/
	/* display: flex;
	align-items: center; */
	height: 120px;
}
.con .left-newsread img {
	width: 130px;
	height: 110px;
}
.con .right {
	/* width: 220px; */
	width: 57%;
	display: flex;
	flex-wrap: wrap;
	align-content: space-between;
	margin-left: 10px;
	padding-right: 5px;
}
.con .right .title {
	margin-top: 5px;
}
.con .right .wenz {
	width: 200px;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 4;
	overflow: hidden;
	font-size: 10px;
	color: #929090;
}
.con .right .dibu {
	height: 20px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #a9aaa9;
	font-size: 10px;
	padding-top: 10px;
}
.con .right .dibu .yi {
	margin-right: 10px;
}
.con .right .dibu .er {
	margin: 0 0px;
}
.con .right .dibu .san {
	margin-right: 10px;
	display: flex;
	align-items: center;
}
.con .right .dibu .san span{
	margin-top: 2px;
	color: #ff4081;
}
</style>

