$(window).load(function(){
	var oHeadInput = $("#header .header2 input");
	oHeadInput.keyup(function(){
		$("#tipList").css({border:"1px solid grey",display:"block",zIndex:10})
		if(oHeadInput.val()==""){
			$("#tipList").css({display:"none",border:"none"})
		}
		$.ajax({
			url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+oHeadInput.val()+"&json=1&p=3&t",
			dataType:"jsonp",
			jsonp:"cb",
			success:function(data){
				var lists = data.s;
				var oUl = $("#tipList");
				oUl.html("");
				for(var i in lists){
					var oLi = $("<li></li>");
					oLi.html(lists[i]);
					oUl.append(oLi)
				}
			}
		})
	})
	oHeadInput.blur(function(){
		$("#tipList").css({display:"none",border:"none"})
	})
	$("#header .header1 .header1r").mouseenter(function(){
		$(this).find("div").css({display:"block"})
		$(this).find("b").css({display:"block"})
		$(this).css({borderLeft:"1px solid #999999",
		borderRight:"1px solid #999999",
		borderBottom:"1px solid white",
		zIndex:10
		})
		$(this).find("span").css({transform: "rotate(180deg)"})
	})
	$("#header .header1 .header1r").mouseleave(function(){
		$(this).find("div").css({display:"none"})
		$(this).find("b").css({display:"none"})
		$(this).css({borderLeft:"1px solid #ffffff",
		borderRight:"1px solid #ffffff",
		borderBottom:"none"
		})
		$(this).find("span").css({transform: "rotate(0deg)"})
	})
	$("#header .header2 div").addClass("huisou")
	$("#header .header2 div").mouseover(function(){
		$(this).addClass("hongsou").removeClass("huisou")
	})
	$("#header .header2 div").mouseout(function(){
		$(this).addClass("huisou").removeClass("hongsou")
	})
})
