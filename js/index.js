function resize(originSize,type){
	var type=type||"x";
	if(type=="x"){
		var widths=document.documentElement.clientWidth;
		var scale=widths/originSize*100;
	}else if(type=="y"){
		var heights=document.documentElement.clientHeight;
		var scale=heights/originSize*100;
	}
	document.getElementsByTagName("html")[0].style.fontSize=scale+"px";
}
window.onload=function(){
	resize(750,"x");
	$(".daohang .font a").eq(0).attr("class","active");
	$(".daohang .font a").click(function(){
		var index=$(this).index();
		$(".daohang .font a").attr("class","none").eq(index).attr("class","active");
	})
	
}
