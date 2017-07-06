$(function(){
	var carts = $.cookie("carts")? JSON.parse($.cookie("carts")) : {};
	//有时间再写
	var inum = 0;
	for(var i in carts){
		inum++;
	};
//	console.log(inum)   2
	for(var i=1;i<inum;i++){
//		console.log(inum) 1
		$("#shopCar .shangping ul").eq(0).clone(true).appendTo($("#shopCar .shangping"))
	}
//	console.log(carts)
	var j = 0;//i没法共用 所以定义一个新的j
	for(var i in carts){			
//一个ul  参照写动态
//		$("#shopCar .shangping ul li").eq(1).find("img").prop({src:carts[i].tu});
//		$("#shopCar .shangping ul li").eq(2).find("p").text(carts[i].yangshi);
//		$("#shopCar .shangping ul li").eq(3).text(carts[i].qian);
//		$("#shopCar .shangping ul li").eq(4).find("div").eq(1).find("input").val(carts[i].num);
//一个ul  参照写动态
		$("#shopCar .shangping ul").eq(j).find("li").eq(1).find("img").prop({src:carts[i].tu});
		$("#shopCar .shangping ul").eq(j).find("li").eq(2).find("p").text(carts[i].yangshi);
		$("#shopCar .shangping ul").eq(j).find("li").eq(3).text(carts[i].qian);
		$("#shopCar .shangping ul").eq(j).find("li").eq(4).find("div").eq(1).find("input").val(carts[i].num);
		j++;
	}
	for(var i=0;i<inum;i++){
		var qian = $("#shopCar .shangping ul").eq(i).find("li").eq(3).text();
		var shu =  $("#shopCar .shangping ul").eq(i).find("li").eq(4).find("div").eq(1).find("input").val();
		$("#shopCar .shangping ul").eq(i).find("li").eq(5).text(qian*shu);
		$("#shopCar .shangping ul").eq(i).find("li").eq(4).find(".jian").click(function(){
			var shu1=$(this).next().find("input").val();
			shu1--;
			if(shu1<=0){
				shu1=0;
			}
			$(this).next().find("input").val(shu1);
			var qian1=$(this).parent().prev().text();
			$(this).parent().next().text(shu1*qian1);
		})
		$("#shopCar .shangping ul").eq(i).find("li").eq(4).find(".jia").click(function(){
			var shu1=$(this).prev().find("input").val();
			shu1++;
			$(this).prev().find("input").val(shu1);
			var qian1=$(this).parent().prev().text();
			$(this).parent().next().text(shu1*qian1);
		})
		$("#shopCar .shangping ul").eq(i).find("li").eq(6).click(function(){
			$(this).parent().remove();
			var ncarts =[]
			for (var i in carts) {
				ncarts.push(carts[i])
			}
			var n = $(this).parent().index();
			ncarts.splice(n,1);
			console.log(ncarts)
		})

	}
})

//点击加减价格
$(function(){
	var carts = $.cookie("carts")? JSON.parse($.cookie("carts")) : {};
	var inum = 0;
	for(var i in carts){
		inum++;
	};
	var aNum = [];
	for(var i=0;i<inum;i++){
		aNum.push(0);
		$("#shopCar .shangping ul").eq(i).find("li").eq(0).click(function(){
			var oBtn = $(this).find("input");
			if(oBtn[0].checked){
//				console.log(1);
				aNum.splice($(this).parent().index(),1,$(this).parent().find("li").eq(5).text());
				$("#shopCar .shangping ul").eq($(this).parent().index()).find("li").eq(4).find(".jian").click(function(){
					aNum.splice($(this).parent().parent().index(),1,$(this).parent().parent().find("li").eq(5).text());
					var s=0;
					for(var j in aNum){
						s+=parseInt(aNum[j]); 
					}
					$("#shopCar .tishi .xianshijiage span").text(s+".00")
				});
				$("#shopCar .shangping ul").eq($(this).parent().index()).find("li").eq(4).find(".jia").click(function(){
					aNum.splice($(this).parent().parent().index(),1,$(this).parent().parent().find("li").eq(5).text());
					var s=0;
					for(var j in aNum){
						s+=parseInt(aNum[j]); 
					}
					$("#shopCar .tishi .xianshijiage span").text(s+".00")
				})
			}else{
//				console.log(2);
				aNum.splice($(this).parent().index(),1,0)
			}
			var s=0;
			for(var j in aNum){
				s+=parseInt(aNum[j]); 
			}
			$("#shopCar .tishi .xianshijiage span").text(s+".00")
		})
	}	
})
//全选
$(function(){
	var carts = $.cookie("carts")? JSON.parse($.cookie("carts")) : {};
	var inum = 0;
	for(var i in carts){
		inum++;
	};
	for (var z=0;z<inum;z++) {
		$("#shopCar .shangping ul").eq(z).find("li").eq(0).find("input").click(function(){
			if($(this)[0].checked){
				$("#shopCar #quanxuan").prop({checked:"checked"})
				$("#shopCar #dianpu").prop({checked:"checked"})
			}else{
//				$("#shopCar #quanxuan").prop({checked:false})
//				$("#shopCar #dianpu").prop({checked:false})
				var b=[]
				for (var z=0;z<inum;z++){	
					b.push($("#shopCar .shangping ul").eq(z).find("li").eq(0).find("input")[0].checked)
				}
				var a=b.toString()
				a.search(true)
				if(a.search(true)==-1){
					$("#shopCar #quanxuan").prop({checked:false})
					$("#shopCar #dianpu").prop({checked:false})
				}	
			}
		})
		
	}
	var aNum = [];
//	$("#shopCar #dianpu").prop({checked:"checked"});
	$("#shopCar #quanxuan").click(function(){
		if($(this)[0].checked){
			$("#shopCar input[type='checkbox']").prop({"checked":true});
			for(var i=0;i<inum;i++){
				aNum.push($("#shopCar .shangping ul").eq(i).find("li").eq(5).text());
				$("#shopCar .shangping ul").eq(i).find("li").eq(0).click(function(){
					if($(this).find("input")[0].checked){
						aNum.splice($(this).parent().index(),1,$(this).parent().find("li").eq(5).text())
					}else{
						aNum.splice($(this).parent().index(),1,0)
					}
					var s=0;
					for(var j in aNum){
						s+=parseInt(aNum[j]); 
					}
					$("#shopCar .tishi .xianshijiage span").text(s+".00")
						})
			}
			var s=0;
			for(var j in aNum){
				s+=parseInt(aNum[j]); 
			}
			$("#shopCar .tishi .xianshijiage span").text(s+".00")
		}else{
			aNum = [];
			$("#shopCar input[type='checkbox']").prop({"checked":false});
			$("#shopCar .tishi .xianshijiage span").text(0+".00")
		}
	
		for (var z=0;z<inum;z++) {
			if($("#shopCar .shangping ul").eq(z).find("li").eq(0).find("input")[0].checked){
				$("#shopCar .shangping ul").eq(z).find("li").eq(4).find(".jian").click(function(){
					aNum.splice($(this).parent().parent().index(),1,$(this).parent().parent().find("li").eq(5).text());
//					console.log(aNum);
					var s=0;
					for(var j in aNum){
						s+=parseInt(aNum[j]); 
					}
					$("#shopCar .tishi .xianshijiage span").text(s+".00")
				})
				$("#shopCar .shangping ul").eq(z).find("li").eq(4).find(".jia").click(function(){
					aNum.splice($(this).parent().parent().index(),1,$(this).parent().parent().find("li").eq(5).text());
//					console.log(aNum);
					var s=0;
					for(var j in aNum){
						s+=parseInt(aNum[j]); 
					}
					$("#shopCar .tishi .xianshijiage span").text(s+".00")
				})
			}
		}
		
		
	})
})
$("#shopCar .zuihou .jiezhang").click(function(){
	if($("#shopCar .ptip a").text()=="登录"){
		$("#login .loginBox").css({display:"block"});
		$("#login .loginBox .zhuce").stop().animate({right:0},500);
	}else{
		if($("#shopCar .tishi .xianshijiage span").text()=="0.00"){
			$("#qingmai").css({display:"block"})
		}else{
			location.href = "pay.html"
		}
	}
	
})
//登录
$("#shopCar .ptip a").click(function(){
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
$("#login .dengluR #btn").click(function(){
	if(regs.nameReg.test($("#login .dengluR #dL").val())&&regs.pwdReg.test($("#login .dengluR #psd").val())){
		$("#shopCar .ptip a").text($("#dL").val())
	}else{
			$("#login .loginBox .dengluR #psd").css({borderColor:"red"});
			$("#login .loginBox .dengluR #psd").attr({placeholder:"密码6-20位"})
	}	
})
$("#qingmai .maitip .maitipguan").click(function(){
	$("#qingmai").css({display:"none"})
})


//$("#shopCar .quanxuan").click(function(){
//	if($("#shopCar .shangping ul li").eq(0).find("input")[0].checked){
//		$("#shopCar .shangping ul ").find("li").eq(4).find(".jian").click(function(){
//			console.log(1)
//		})
//	}
//})



