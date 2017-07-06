
//二级菜单
$(function(){
	$("#main .banner ul li").mouseenter(function(){
		$(this).find("ol,span").css({display:"block"})
		$(this).find("a").css({color:"white"})
		$(this).find("ol a").css({color:"#666666"})
	})
	$("#main .banner ul li").mouseleave(function(){
		$(this).find("a").css({color:"#666666"})
		$(this).find("ol,span").css({display:"none"})
	})
})
//二级菜单


//吸顶1
$(function(){
	var fixTop = $("#main .louTi").offset().top;
	$("#main .louTi div").css({width:1200})
	$(window).scroll(function(){
		var scrollTop = $(this).scrollTop();
		if(scrollTop>=fixTop){
			$("#main .louTi div").css({background:"#c5c5c5",width:10000000})
			$("#main .srlw").css({marginTop:"49px"})
			$("#main .louTi").css({position:"fixed",top:0,background:"white"})
		}else{
			$("#main .louTi div").css({background:"#f5f5f5",width:1200})
			$("#main .srlw").css({marginTop:"0"})
			$("#main .louTi").css({position:"static",background:"#f5f5f5"})
		}
	})
})
//吸顶1
//吸顶2
$(function(){
	$(window).scroll(function(){
		var scrollTop = $(this).scrollTop();
		if(scrollTop>=200){
			$("#main .guding .box3").css({display:"block"})
		}else{
			$("#main .guding .box3").css({display:"none"})
		}
	})
})
//吸顶2

//楼梯
var isClick = false;
$("#main .louTi ul li").click(function(){
	isClick=true;
	$(this).addClass("bg").siblings().removeClass("bg");
	var iTop=$(".pTop").eq($(this).index()).offset().top-49;
	$("html, body").stop().animate({scrollTop: iTop}, 1000,function(){
		isClick=false
	});
})
$(window).scroll(function(){
	if(!isClick){
		var tops = $(this).scrollTop();
		$(".pTop").each(function(){
			if(tops>=$(this).offset().top-50){
				$("#main .louTi ul li").eq($(this).index()/2-4).addClass("bg").siblings().removeClass("bg")
			}
		})
	}
})


//回到顶部
$("#main .guding div").eq(4).mouseenter(function(){
	$(this).css({background:"#666666",cursor:"pointer",color:"white"}).html("回到顶部");
	$(this).click(function(){
		$("html, body").stop().animate({scrollTop: 0},500)
	})
})
$("#main .guding div").eq(4).mouseleave(function(){
	$(this).css({background:"url(../img/common/images/guding_08.png)"}).html("")
})
//回到顶部


//轮播图
	//前后按钮
$(function(){
	$("#main .banner .lunBoTu .tupian").mouseenter(function(){
		$("#main .banner .lunBoTu .prev").stop().animate({left:50},500).css({display:"block"}).mouseover(function(){
			$(this).stop().animate({left:50}).css({cursor:"pointer",display:"block"});
			$("#main .banner .lunBoTu .next").stop().animate({right:50}).css({cursor:"pointer",display:"block"})
		});
		$("#main .banner .lunBoTu .next").stop().animate({right:50},500).css({display:"block"}).mouseover(function(){
			$(this).stop().animate({right:50}).css({cursor:"pointer",display:"block"});
			$("#main .banner .lunBoTu .prev").stop().animate({left:50}).css({cursor:"pointer",display:"block"})
		});
	})
	$("#main .banner .lunBoTu .tupian").mouseleave(function(){
		$("#main .banner .lunBoTu .prev").stop().animate({left:100},500).css({display:"none"});
		$("#main .banner .lunBoTu .next").stop().animate({right:100},500).css({display:"none"});
	})
})
	//前后按钮
$(function(){
	var iNow = 0;
	var timer=null;
	autoPlay();
	function autoPlay(){
		clearInterval(timer);
		timer=setInterval(function(){
			iNow++;
			if(iNow==4){
				iNow=0;
			}
			tab();
		},3000)
	}
	//向前
	$("#main .banner .lunBoTu .prev").click(function(){
		iNow--;
		if(iNow==-1){
			iNow=3;
		}
		tab();
	})
	//向后
	$("#main .banner .lunBoTu .next").click(function(){
		iNow++;
		if(iNow==4){
			iNow=0;
		}
		tab();
	})
	//圆点控制
	for (var i=0;i<4;i++) {
		$("#main .banner .yuandian li").click(function(){
			iNow=$(this).index();
			tab();
		})
	}
	$("#main .banner .lunBoTu").mouseenter(function(){
		clearInterval(timer)
	})
	$("#main .banner .lunBoTu").mouseleave(function(){
		autoPlay()
	})
	function tab(){
		for (var i=0;i<4;i++) {
			$("#main .banner .yuandian li").removeClass("dingshibian")
		}
		$("#main .banner .yuandian li")[iNow].className="dingshibian";
		$("#main .banner .tupian li").stop().animate({opacity:0});
		$($("#main .banner .tupian li")[iNow]).stop().animate({opacity:1});
	}
})
$("#main .guding .box4").mouseenter(function(){
	$(this).find(".xiaoshi").css({display:"block"})
})
$("#main .guding .box4").mouseleave(function(){
	$(this).find(".xiaoshi").css({display:"none"})
})

//生日礼物瀑布流
$(function(){
	$.ajax({
		type:"get",
		url:"../data/index/srlw.json",
		async:true,
		success:function(data){
			for(var i=0;i<11;i++){
				$("#main .srlw li").eq(i).find("img").attr({"src":data[i].src});
			}
			for(var i=0;i<10;i++){
				$("#main .srlw li").eq(i).click(function(){
					location.href = "goodDetail.html"
				})
			}
		}
	});
})
//生日礼物瀑布流
//本周新品瀑布流
$(function(){
	$.ajax({
		type:"get",
		url:"../data/index/srlw.json",
		async:true,
		success:function(data){
			for(var i=0;i<11;i++){
				$("#main .bzxp li").eq(i).find("img").attr({"src":data[i+11].src});
			}
			for(var i=0;i<10;i++){
				$("#main .bzxp li").eq(i).click(function(){
					location.href = "goodDetail.html"
				})
			}
		}
	});
})
//本周新品瀑布流
//送女友瀑布流
$(function(){
	$.ajax({
		type:"get",
		url:"../data/index/srlw.json",
		async:true,
		success:function(data){
			for(var i=0;i<11;i++){
				$("#main .snv li").eq(i).find("img").attr({"src":data[i+22].src});
			}
			for(var i=0;i<10;i++){
				$("#main .snv li").eq(i).click(function(){
					location.href = "goodDetail.html"
				})
			}
		}
	});
})
//送女友瀑布流
//送男友瀑布流
$(function(){
	$.ajax({
		type:"get",
		url:"../data/index/srlw.json",
		async:true,
		success:function(data){
			for(var i=0;i<7;i++){
				$("#main .snan li").eq(i).find("img").attr({"src":data[i+33].src});
			}
			for(var i=0;i<6;i++){
				$("#main .snan li").eq(i).click(function(){
					location.href = "goodDetail.html"
				})
			}
		}
	});
})
//送男友瀑布流
//成双成对瀑布流
$(function(){
	$.ajax({
		type:"get",
		url:"../data/index/srlw.json",
		async:true,
		success:function(data){
			for(var i=0;i<6;i++){
				$("#main .gouLiang li").eq(i).find("img").attr({"src":data[i+40].src});
			}
			for(var i=0;i<5;i++){
				$("#main .gouLiang li").eq(i).click(function(){
					location.href = "goodDetail.html"
				})
			}
		}
	});
})
//成双成对瀑布流
//马龙卡详情
$(function(){
	$("#main .srlw li").eq(1).click(function(){
		location.href = "goodDetail.html";
	})
})

//点击跳转列表
$("#main .srlw li").eq(10).click(function(){
	location.href = "goodList.html";
})
$("#main .bzxp li").eq(10).click(function(){
	location.href = "goodList.html";
})
$("#main .snv li").eq(10).click(function(){
	location.href = "goodList.html";
})
$("#main .snan li").eq(6).click(function(){
	location.href = "goodList.html";
})
$("#main .gouLiang li").eq(5).click(function(){
	location.href = "goodList.html";
})
