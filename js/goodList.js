$.ajax({
			type:"get",
			url:"../data/goodList/goodList.json",
			async:true,
			success:function(data){
				for(var j=0;j<16;j++){
						$("#goodList .jiazaitupian li").eq(j).find("img").attr({"src":data[j].src});
						$("#goodList .jiazaitupian li").eq(j).find("p").eq(0).text(data[j].jiage);
						$("#goodList .jiazaitupian li").eq(j).find("p").eq(1).text(data[j].jianjie);
					}
			}
		});
var n=0;
for (var i=1;i<11;i++) {
	$("#goodList .yeshu li").eq(i).click(function(){
		n=$(this).index()-1;
		$.ajax({
			type:"get",
			url:"../data/goodList/goodList.json",
			async:true,
			success:function(data){
				for(var j=0;j<16;j++){
//						var m = (j+n)%16;
						$("#goodList .jiazaitupian li").eq(j).find("img").attr({"src":data[(j+n)%16].src});
						$("#goodList .jiazaitupian li").eq(j).find("p").eq(0).text(data[(j+n)%16].jiage);
						$("#goodList .jiazaitupian li").eq(j).find("p").eq(1).text(data[(j+n)%16].jianjie);
					}
			}
		});
	})
}
$("#goodList .yeshu li").eq(0).click(function(){
	n--;
	if(n<=0){
		n=0;
	}
	$.ajax({
			type:"get",
			url:"../data/goodList/goodList.json",
			async:true,
			success:function(data){
				for(var j=0;j<16;j++){
//						var m = (j+n)%16;
						$("#goodList .jiazaitupian li").eq(j).find("img").attr({"src":data[(j+n)%16].src});
						$("#goodList .jiazaitupian li").eq(j).find("p").eq(0).text(data[(j+n)%16].jiage);
						$("#goodList .jiazaitupian li").eq(j).find("p").eq(1).text(data[(j+n)%16].jianjie);
					}
			}
		});
})
$("#goodList .yeshu li").eq(11).click(function(){
	n++;
	if(n>=9){
		n=9;
	}
	$.ajax({
			type:"get",
			url:"../data/goodList/goodList.json",
			async:true,
			success:function(data){
				for(var j=0;j<16;j++){
//						var m = (j+n)%16;
						$("#goodList .jiazaitupian li").eq(j).find("img").attr({"src":data[(j+n)%16].src});
						$("#goodList .jiazaitupian li").eq(j).find("p").eq(0).text(data[(j+n)%16].jiage);
						$("#goodList .jiazaitupian li").eq(j).find("p").eq(1).text(data[(j+n)%16].jianjie);
					}
			}
		});
})