//注册正则
	var regs = {
		emailReg:/^\w+@\w+\.[a-zA-Z]+$/,
		pwdReg: /^.{6,20}$/,
		nameReg:/^\w+/
	}
	
	//邮箱不能为空
	$("#login .loginBox .zhuceR #dL").blur(function(){
		if($(this).val()==""){
			$(this).css({borderColor:"red"})
			$(this).attr({placeholder:"邮箱不能为空"})
		}else if(regs.emailReg.test($(this).val())){
			$(this).css({borderColor:"#999999",outlineColor:"blue"})
		}else{
			$(this).css({borderColor:"red",outlineColor:"red"});
			$(this).val("邮箱格式不对，请重新输入")
		}
	})
	$("#login .loginBox .dengluR #dL").blur(function(){
		if($(this).val()==""){
			$(this).css({borderColor:"red"})
			$(this).attr({placeholder:"用户名不能为空"})
		}
	})
	$("#login .loginBox .zhuceR #dL").focus(function(){
		if($(this).val()==""){
			$(this).css({borderColor:"#999999"})
			$(this).attr({placeholder:"邮箱"})
		}
	})
	$("#login .loginBox .dengluR #dL").focus(function(){
		if($(this).val()==""){
			$(this).css({borderColor:"#999999"})
			$(this).attr({placeholder:"请输入 邮箱/用户名"})
		}
	})
	//邮箱不能为空
	
	
	//密码不能为空
	$("#login .loginBox .zhuceR #psd").blur(function(){
		if($(this).val()==""){
			$(this).css({borderColor:"red"})
			$(this).attr({placeholder:"密码不能为空"})
		}
	})
	$("#login .loginBox .dengluR #psd").blur(function(){
		if($(this).val()==""){
			$(this).css({borderColor:"red"})
			$(this).attr({placeholder:"密码不能为空"})
		}
	})
	$("#login .loginBox .dengluR #psd").focus(function(){
		if($(this).val()==""){
			$(this).css({borderColor:"#999999"})
			$(this).attr({placeholder:"密码"})
		}
	})
	//密码不能为空
	
	
	//验证邮箱
	$("#login .loginBox .zhuceR #dL").keyup(function(){
		if(regs.emailReg.test($(this).val())){
			$(this).css({borderColor:"#999999",outlineColor:"blue"})
		}else{
			$(this).css({borderColor:"red",outlineColor:"red"})
		}
	})
	$("#login .loginBox .zhuceR #psd").keyup(function(){
		if(regs.pwdReg.test($(this).val())){
			$(this).css({borderColor:"#999999",outlineColor:"blue"})
		}else{
			$(this).css({borderColor:"red",outlineColor:"red"})
		}
	})
	//验证邮箱
	
	//验证密码
	$("#login .loginBox .zhuceR #psd").keyup(function(){
		if(regs.pwdReg.test($(this).val())){
			$(this).css({borderColor:"#999999",outlineColor:"blue"})
		}else{
			$(this).css({borderColor:"red",outlineColor:"red"})
		}
	})
	$("#login .loginBox .zhuceR #psd").keyup(function(){
		if(regs.pwdReg.test($(this).val())){
			$(this).css({borderColor:"#999999",outlineColor:"blue"})
		}else{
			$(this).css({borderColor:"red",outlineColor:"red"})
		}
	})
	$("#login .loginBox .dengluR #dL").keyup(function(){
		if(regs.nameReg.test($(this).val())){
			$(this).css({borderColor:"#999999",outlineColor:"blue"})
		}else{
			$(this).css({borderColor:"red",outlineColor:"red"})
		}
	})
	$("#login .loginBox .dengluR #psd").keyup(function(){
		if(regs.pwdReg.test($(this).val())){
			$(this).css({borderColor:"#999999",outlineColor:"blue"})
		}else{
			$(this).css({borderColor:"red",outlineColor:"red"})
		}
	})
	//验证密码



var ca1=null,ca2=null
$(function(){
	$("#header .header1 .header1left li").eq(1).find("a").click(function(){
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
	$("#header .header1 .header1left li").eq(2).find("a").click(function(){
		$("#login .loginBox").css({display:"block"});
		$("#login .loginBox .zhuce").stop().animate({right:0},500);
		$("#login .loginBox .dengluR").css({display:"none"});
		$("#login .loginBox .zhuceR").css({display:"block"});
		$("#login .loginBox .zhuceR em a").eq(0).click(function(){
			$("#login .loginBox .dengluR").css({display:"block"});
			$("#login .loginBox .zhuceR").css({display:"none"});
		})
		$("#login .loginBox .dengluR em a").eq(0).click(function(){
			$("#login .loginBox .dengluR").css({display:"none"});
			$("#login .loginBox .zhuceR").css({display:"block"});
		})
	})
	$("#login .loginBox .zhuce .cloginBox").click(function(){
		$("#login .loginBox .zhuce").stop().animate({right:"-1010px"},500,function(){
			$("#login .loginBox").css({display:"none"});
		});
	})
	ca1=$("#header .header1 .header1left li").eq(1).find("a").clone(true);
	ca2=$("#header .header1 .header1left li").eq(2).find("a").clone(true);
	$("#login .dengluR #btn").click(function(){
		if(regs.nameReg.test($("#login .dengluR #dL").val())&&regs.pwdReg.test($("#login .dengluR #psd").val())){
			$("#header .header1 .header1left li").eq(1).html($("#dL").val());
			$("#header .header1 .header1left li").eq(2).html("<strong>退出</strong>");
			$("#login .loginBox .zhuce").stop().animate({right:"-1010px"},500,function(){
				$("#login .loginBox").css({display:"none"});
			});
			$("#header .header1 .header1left li").mouseenter(function(){
				$(this).css({color:"red"})
			})
			$("#header .header1 .header1left li").mouseleave(function(){
				$(this).css({color:"black"})
			})
			$("#header .header1 .header1left li strong").click(function(){
				$("#header .header1 .header1left li").eq(1).html(ca1);
				$("#header .header1 .header1left li").eq(2).html(ca2);
	//			$("#header .header1 .header1left li").find("a").attr({href:"##"});
			})
		}else{
			$("#login .loginBox .dengluR #psd").css({borderColor:"red"});
			$("#login .loginBox .dengluR #psd").attr({placeholder:"密码6-20位"})
		}
	})
	
	
	$("#login .zhuceR #btn").click(function(){
		if(regs.emailReg.test($("#login .zhuceR #dL").val())&&regs.pwdReg.test($("#login .zhuceR #psd").val())){
			$("#header .header1 .header1left li").eq(1).html($("#login .zhuceR #dL").val());
			$("#header .header1 .header1left li").eq(2).html("<strong>退出</strong>");
			$("#login .loginBox .zhuce").stop().animate({right:"-1010px"},500,function(){
				$("#login .loginBox").css({display:"none"});
			});
			$("#header .header1 .header1left li").mouseenter(function(){
				$(this).css({color:"red"})
			})
			$("#header .header1 .header1left li").mouseleave(function(){
				$(this).css({color:"black"})
			})
			$("#header .header1 .header1left li strong").click(function(){
				$("#header .header1 .header1left li").eq(1).html(ca1);
				$("#header .header1 .header1left li").eq(2).html(ca2);
			})
		}
		
	})
	
	
})