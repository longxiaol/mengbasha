$(function(){
	$("#nav1 ul li").mouseenter(function(){
		$(this).find(".honghuadong").css({display:"block"}).stop()
		.animate({left:0},300);
	})
	$("#nav1 ul li").mouseleave(function(){
		$(this).find(".honghuadong").stop()
		.animate({left:"-140px"},100,function(){
			$("#nav1 ul li .honghuadong").css({display:"none"})
		})
	})
	$("#nav1 .no").mouseenter(function(){
		$(this).find(".songli").css({display:"block"});
	})
	$("#nav1 .no").mouseleave(function(){
		$(this).find(".songli").css({display:"none"})
	})
})
