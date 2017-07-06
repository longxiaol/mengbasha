//放大镜
	//点击分享微博   延时器
$(function(){
	$("#goodDetail .goodDetailL .henduo .fenxiang a").click(function(){
		var time=null;
		clearTimeout(time);
		$(this).siblings().css({visibility: "visible"});
		time=setTimeout(function(){
			$("#goodDetail .goodDetailL .henduo .fenxiang div").css({visibility: "hidden"});
		},3000);
	})
})
	//点击切换图片
$(function(){
	$("#goodDetail .goodDetailL .henduo .small_div li").eq(0).css({borderColor:"#666666"});//第一个最初边框颜色
	$("#goodDetail .goodDetailL .henduo .small_div li").click(function(){
		$("#goodDetail .goodDetailL .henduo .small_div li").css({borderColor:"white"})
		$(this).css({borderColor:"#666666"});
		var osrc=$(this).find("img")[0].src
		$("#goodDetail .goodDetailL .henduo .mid_div li").find("img").attr({src:osrc})
	})
})
//移动到中等图片上   大图显示  呈现放大效果
$(function(){
	$("#goodDetail .goodDetailL .henduo .mid_div li").mouseover(function(){
		$(this).find(".mid_img").css({display:"none"});
		$(this).find(".big_img").css({display:"block"});
	})
	$("#goodDetail .goodDetailL .henduo .mid_div li").mouseout(function(){
		$(this).find(".mid_img").css({display:"block"});
		$(this).find(".big_img").css({display:"none"});
	})
})
//大图移动
$(function(){
	$("#goodDetail .goodDetailL .henduo .mid_div li").mousemove(function(e){
		var oLeft = (32-e.pageX);
		var oTop = (196-e.pageY);
		$(this).find(".big_img").css({left:oLeft,top:oTop});
	})
})
//点击加减
$(function(){
	$("#goodDetail .goodDetailL .henduo .jianshu ul .jian").click(function(){
		var otext=$("#goodDetail .goodDetailL .henduo .jianshu ul li").eq(1).text();
		$("#goodDetail .goodDetailL .henduo .jianshu ul li").eq(1).text(otext-1);
		if(otext<2){
			alert("商品数量不能小于1");
			$("#goodDetail .goodDetailL .henduo .jianshu ul li").eq(1).text(1);
		}
	})
	$("#goodDetail .goodDetailL .henduo .jianshu ul .jia").click(function(){
		var otext=parseInt($("#goodDetail .goodDetailL .henduo .jianshu ul li").eq(1).text());
		$("#goodDetail .goodDetailL .henduo .jianshu ul li").eq(1).text(otext+1);
	})
})

//点击购买和收藏出来登录页面
$("#goodDetail .goodDetailL .henduo .goumai .lijigoumai,#goodDetail .goodDetailL .henduo .goumai .jiarushoucang").click(function(){
	$("#login .loginBox").css({display:"block"});
	$("#login .loginBox .zhuce").stop().animate({right:0},500);
	$("#login .loginBox .dengluR").css({display:"block"});
	$("#login .loginBox .zhuceR").css({display:"none"});
	$("#login .loginBox .dengluR em a").eq(0).click(function(){
		$("#login .loginBox .dengluR").css({display:"none"});
		$("#login .loginBox .zhuceR").css({display:"block"});
	})
	$("#login .loginBox .zhuceR em a").eq(0).click(function(){
		$("#login .loginBox .dengluR").css({display:"block"});
		$("#login .loginBox .zhuceR").css({display:"none"});
	})
})
//到达时间+2
$(function(){
	var oDate = new Date();
	var oDay = oDate.getDate()+2;
	var oMonth = oDate.getMonth()+1;
	$("#goodDetail .goodDetailL .henduo .xinxi .sanjiliandong p .yue").text(oMonth+"月");
	$("#goodDetail .goodDetailL .henduo .xinxi .sanjiliandong p .ri").text(oDay+"日")
})
//点击款式换字等
var isClick=false;

$(function(){
//	$("#goodDetail .goodDetailL .henduo .kuanshi ul li").eq(0).css({border:"1px solid red"});
	var goods = {};
	var goodId = null
	$("#goodDetail .goodDetailL .henduo .kuanshi ul li").click(function(){
		$("#goodDetail .goodDetailL .small_div li").eq(0).find("img").prop({src:"../img/goodDetail/images/malongka0"+($(this).index()+1)+"_01.jpg"})
		$("#goodDetail .goodDetailL .mid_div li").eq(0).find("img").prop({src:"../img/goodDetail/images/malongka0"+($(this).index()+1)+"_01.jpg"})
		$("#goodDetail .goodDetailL .henduo .xinxi h5 span").text($(this).text());
		$("#goodDetail .goodDetailL .henduo .kuanshi ul li").css({border:"1px solid #acacac"});
		$(this).css({border:"1px solid red"});
		$("#goodDetail .goodDetailL .henduo .xinxi .jiage span").text($(this).index()*10+138);
		isClick=true;
		goodId=$(this)[0].id;
		goods = $.cookie("carts")? JSON.parse($.cookie("carts")) : {};
		if(goodId in goods){
			goods[goodId].num=parseInt($("#goodDetail .goodDetailL .jianshu ul li").eq(1).text())
		}else{
			var goodImg = $("#goodDetail .goodDetailL .mid_div li").eq(0).find("img").prop("src");
			var goodStyle = $("#goodDetail .goodDetailL .xinxi h5 span").text();
			var goodPrice = $("#goodDetail .goodDetailL .xinxi .jiage span").text();
			
//			console.log(goodImg);
//			console.log(goodStyle);
//			console.log(goodPrice);
//			console.log(goodNum);
			goods[goodId]={
				tu:goodImg,
				yangshi:goodStyle,
				qian:goodPrice,
				num:""
			}
		}
	})
	//购物车
	$("#goodDetail .goodDetailL .henduo .goumai .jiarugouwuche").click(function(){
		if(isClick){
			$("#jiaruchenggong").css({display:"block"});
			$("#jiaruchenggong .tips .maiagin").click(function(){
				$("#jiaruchenggong").css({display:"none"});
			});
			$("#jiaruchenggong .tips .jiesuan").click(function(){
				$("#jiaruchenggong").css({display:"none"});
			})
			var goodNum = $("#goodDetail .goodDetailL .jianshu ul li").eq(1).text();
			goods[goodId].num=goodNum;
			$.cookie("carts", JSON.stringify(goods), {expires: 7, path: "/"});
			console.log($.cookie("carts"))
		}else{
			$("#kuaiqumai").show()
		}
	})
})
$("#header .header1right li").eq(1).mouseenter(function(){
	var carts = $.cookie("carts")? JSON.parse($.cookie("carts")) : {};
	var isko = 0;
	for (i in carts) {
		isko++
	}
	if(isko==0){
		$(this).find("div").text("您的购物车还没有商品，赶快去选购心爱的商品吧")
	}else{
		$(this).find("div").text("")
		var n=0;
		for (var i in carts) {
			n++
		}
		$(this).find("div").text("你已经成功添加"+n+"件商品")
	}
})
$("#kuaiqumai .kuaimai .kuaimaiguan").click(function(){
				$("#kuaiqumai").hide()
})
//加载广告图片
$(function(){
	$.ajax({
		type:"get",
		url:"../data/goodDetail/ad.json",
		async:true,
		success:function(data){
			for(var i=0;i<6;i++){
				$("#goodDetail .goodDetailL .shangpinguanggao ul li").eq(i).find("img").prop({"src":data[i].src})
			}
		}
	});
})
//加载商品详情
$(function(){
	$.ajax({
		type:"get",
		url:"../data/goodDetail/ad.json",
		async:true,
		success:function(data){
			for(var i=0;i<10;i++){
				$("#goodDetail .goodDetailL .shangpinbianhao .ul2 li").eq(i).find("img").prop({"src":data[i+6].src})
			}
		}
	});
})
//右边商品推荐
$(function(){
	$.ajax({
		type:"get",
		url:"../data/goodDetail/ad.json",
		async:true,
		success:function(data){
			for(var i=0;i<10;i++){
				$("#goodDetail .goodDetailR .dongtaiwu ul li").eq(i).find("img").prop({"src":data[i%7].src})
			}
		}
	});
})
$(window).scroll(function(){
	var scrollTop = $(this).scrollTop();
		if(scrollTop>=200){
			$("#goodDetail .guding .box3").css({display:"block"})
		}else{
			$("#goodDetail .guding .box3").css({display:"none"})
		}
})
//回到顶部
$("#goodDetail .guding div").eq(4).mouseenter(function(){
	$(this).css({background:"#666666",cursor:"pointer",color:"white"}).html("回到顶部");
	$(this).click(function(){
		$("html, body").stop().animate({scrollTop: 0},500)
	})
})
$("#goodDetail .guding div").eq(4).mouseleave(function(){
	$(this).css({background:"url(../img/common/images/guding_08.png)"}).html("")
})
//回到顶部
$("#goodDetail .guding div").eq(3).mouseenter(function(){
	$(this).find(".xiaoshi").show()
})
$("#goodDetail .guding div").eq(3).mouseleave(function(){
	$(this).find(".xiaoshi").hide()
})
var dtop = 0;
$("#goodDetail .goodDetailR .dongtaiwu .shangxia .shang").click(function(){
	dtop++;
	if(dtop==4){
		dtop=0;
		$("#goodDetail .goodDetailR .dongtaiwu ul").css({top:0})
	}
	$("#goodDetail .goodDetailR .dongtaiwu ul").stop().animate({top:-523*dtop},1000)
})
$("#goodDetail .goodDetailR .dongtaiwu .shangxia .xia").click(function(){
	dtop--;
	if(dtop==-1){
		dtop=3;
		$("#goodDetail .goodDetailR .dongtaiwu ul").css({top:"-523px"})
	}
	$("#goodDetail .goodDetailR .dongtaiwu ul").stop().animate({top:-523*dtop},1000)
})

