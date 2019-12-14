<template>
	<div class="con">
		<div class="left"><img src="../images/cbd.jpg" alt="" /></div>
		<div class="right">
			<div class="title">风雨人生路，冷暖心自知</div>
			<div class="wenz">
				不知道从什么时候开始，习惯了所有的事，都自己担着；所有的苦，都自己忍着，不再逢人就诉说，不再对谁都流泪。
				人生漫漫，我们都曾渴望过有人懂，期望过被人关怀，可在前行的过程中，渐渐发现，世上没有真正的感同身受，许多时候，走得累不累，只有自己最清楚；心里的伤，疼不疼，只有自己才知道。
				就像一位网友留言说的：不再见人就说累，因为没有人能替自己承受，不再一受委屈就找人倾诉，因为没有人会理解，生活总有太多的繁琐，每个人都有自己的难关要过，有自己的旅途要走，是欢喜也好，悲伤也罢，往往只能独自体会，默默忍受。
				风雨人生路，向来冷暖心自知，纵使身边来来往往不少人，可不是谁都能陪我们走到最后，也不是谁都愿意用心感受我们的喜怒哀乐，一路上，酸甜苦辣都要自己尝，风霜雨雪都要自己挡。
				也许正是经历多了没人陪伴的日子，慢慢的开始学会了接受，习惯了坚强，学会了承受，习惯了沉默，不管内心有多痛彻心扉，人前永远谈笑风生。
				有句话说：“表面看似无坚不摧的人，背后未必没有辛酸；脸上常常带笑的人，心里未必没有伤痕，不过是一个人走过了许多艰难的时光，便学会了冷暖自知。”
				岁月中，总有太多的艰苦，却不得不面对；生活里，总有太多的无奈，却不得不接受。 有时候，外表云淡风轻，其实内心早已风起云涌，看起来笑得比谁都开心，其实背后同样满腹心酸。
				人这一辈子，有很多苦衷，除了自己谁都无法理解；有很多悲伤，除了自己谁也无法感受。
				所以，当委屈难过的时候，要学会自我安慰，自我释然。活着，就是一个过程，在这个过程中，尽可能让自己过得快乐一点。
				不管经历有多苦，旅途的路有多难，懂得用微笑代替眼泪，用坚强乐观代替自怨自艾，永远持一颗赤子之心行走于风雨人生路。
			</div>
			<div class="dibu">
				<div class="yi">Fighting</div>
				<div class="er">2019-6-17</div>
				<div class="san">2小时前</div>
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
.con .left {
	width: 130px;
	margin-left: 5px;
	/*vertical-align: middle;*/
	display: flex;
	align-items: center;
	height: 120px;
}
.con .left img {
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
	/*height: 60px;*/
	/*white-space: wrap;*/
	/*text-overflow: ellipsis;
	          -o-text-overflow: ellipsis;
	          overflow: hidden;*/
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
	color: #a9aaa9;
	font-size: 10px;
}
.con .right .dibu .yi {
	margin-right: 20px;
}
.con .right .dibu .er {
	margin: 0 10px;
}
.con .right .dibu .san {
	margin-right: 10px;
}
</style>
