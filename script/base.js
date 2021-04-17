$(function() {
	/* 任务详情 */
	$(".ap-daily-toggle").click(function() {
		var that = $(this);
		var taskbar = $(".ap-daily-taskbar");
		if (that.hasClass("fold")) {
			that.removeClass("fold");
			taskbar.removeClass("fold");
		} else {
			that.addClass("fold");
			taskbar.addClass("fold");
		}
	})
    $(".ap-daily-maskone").click(function(){
		var apdailydet=$(".ap-mask-det");
		var that=$(this);
		//apdailydet.not(that).slideUp("slow");
		that.next().slideToggle("slow");
	}).eq(0).click();
	
   //倒计时
	countTime()

})

// 倒计时
function countTime() {

	//获取当前时间

	var date = new Date();

	var now = date.getTime();

	//设置截止时间

	var endDate = new Date("2021-04-17 00:00:00");

	var end = endDate.getTime();

	//时间差

	var differTime = end - now;

	//定义变量,h,m,s保存倒计时的时间

	var h, m, s;

	if (differTime >= 0) {

		h = Math.floor(differTime / 1000 / 60 / 60);

		m = Math.floor(differTime / 1000 / 60 % 60);

		s = Math.floor(differTime / 1000 % 60);

		h = h < 10 ? ("0" + h) : h;

		m = m < 10 ? ("0" + m) : m;

		s = s < 10 ? ("0" + s) : s;

		document.getElementById("_h").innerHTML = h + ":";

		document.getElementById("_m").innerHTML = m + ":";

		document.getElementById("_s").innerHTML = s + "";

		setTimeout(countTime, 1000);


	} else {

		document.getElementById("_h").innerHTML = "00:";

		document.getElementById("_m").innerHTML = "00:";

		document.getElementById("_s").innerHTML = "00";

	}
}
