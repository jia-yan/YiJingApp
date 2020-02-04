imgLoader([
	'images/banner.png',
	'images/checked.png',
	'images/currentDate_02.png',
	'images/currentDate_03.png',
	'images/footer.png',
	'images/gift_1.png',
	'images/gift_2.png',
	'images/gift_3.png',
	'images/gx.png',
	'images/lq.png',
	'images/mainBg.png',
	'images/rule.png',
	'images/rulePage_footer.png',
	'images/rulePage_header.png',
	'images/signBtn.png',
	'images/signedBtn.png',
	'images/signNum_01.png',
	'images/signNum_03.png',
	'images/ylqBtn.png'
], function(percentage) {
	showMask();
	if (percentage === 1) {
		$('#loader').remove();
		hideMask();
		$('.firPage').show();
	}
});

//显示遮罩层
function showMask() {
	$("#mask").css("height", $(document).height());
	$("#mask").css("width", $(document).width());
	$("#mask").show();
}
//隐藏遮罩层
function hideMask() {
	$("#mask").hide();
}
