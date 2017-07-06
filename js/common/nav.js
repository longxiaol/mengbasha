$(function(){
	$("#nav ul li").mouseenter(function(){
		$(this).find("div").css({display:"block"}).stop()
		.animate({left:0},300)
	})
	$("#nav ul li").mouseleave(function(){
		$(this).find("div").stop()
		.animate({left:"-140px"},100,function(){
			$("#nav ul li div").css({display:"none"})
		})
	})
})
