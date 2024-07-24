/*模板页面*/
/*图片数据*/
$(function(){
			$.getJSON("data/templet.json",function(data){
				var str="";
				$.each(data, function(infoIndex, Info) {
					str += '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12"><p>' + Info.ID 
					       +'</p><a><img class="img-responsive" src=" ' + Info.img + ' " /><i></i>'
					       +'<div class="view"><span>预览</span><span>选用</span></div></a></div>'											
				});				
				$(".b2-2-1").html(str);
			})
		})

/*鼠标滑过图片效果*/
$(function(){
	$(document).on("mouseover",".b2-2 a",function(){
		$(this).find(".view").show();
	})
	$(document).on("mouseout",".b2-2 a",function(){
		$(this).find(".view").hide();
	})
})


/*侧边栏菜单*/
$(function(){
	$(".b2 li").click(function(){
		$(".b2 li span").removeClass("active");
		$(".b2 li div").hide();
		$(this).find("span").addClass("active");
		$(this).find("div").show();
	})
	$(".bul2-a a").click(function(){
		/*$(".b2 li span")*/
		$(".bul2-a a").removeClass("active");
		$(this).addClass("active");
	})
})


/*案例页面*/
$(function(){
	$(".eul1 li").click(function(){
		$(".eul1 li span").removeClass("active");
		$(".eul2 li a").removeClass("active");
		$(".eul1 li > ul").hide();
		$(this).find("span").addClass("active");
		$(this).find("ul").show();
	})
	$(".eul2 li").click(function(){
		$(".eul1 li span,.eul2 li a").removeClass("active");
		$(this).find("a").addClass("active");
	})
	
})
$(function(){
			$.getJSON("data/exanple.json",function(data){
				var str="";
				$.each(data, function(infoIndex, Info) {
					str += '<div class="e2-2-2-anli col-lg-6 col-md-6 col-sm-6 col-xs-12"><div class="e2-2-2-img">' +
							'<a title="' + Info.title + '"><img class="img-responsive" src="' + Info.img + '"/></a></div>' +
							'<div class="e2-2-2-w"><span><a title="' + Info.title +'">' + Info.title +'</a></span>' +
							'<p>' + Info.p +'</p></div></div>'					    										
				});				
				$(".e2-2-2").html(str);
			})
	})


/*注册页面*/
/*文本框为空给出提示*/
$(function(){
	$(".c3 #username").click(function(){
		$(this).blur(function(){
			if($(this).val()==''){
				$(this).next("span").removeClass("hide");	
			}
			else{
				var email = document.getElementById("username").value;
    			//2.定义正则表达式
   	 			var reg_email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
    			//3.判断值是否符合正则的规则
    			var flag = reg_email.test(email);
    			//4.提示信息
    			var s_email = document.getElementById("s_email");

    			if(!flag){
        			$(this).next("span").removeClass("hide");
        			s_email.innerText="邮箱格式错误！";
    			}
				else{
					$(this).next("span").addClass("hide");
				}
			}
			
		})
		
	})

	$(".c3 #password").click(function(){
		$(this).blur(function(){
			if($(this).val()==''){
				$(this).next("span").removeClass("hide");	
			}
			else{
				var password = document.getElementById("password").value;
    			//2.定义正则表达式
    			var reg_password = /^\w{6,12}$/;
    			//3.判断值是否符合正则的规则
   				var flag = reg_password.test(password);
    			//4.提示信息
    			var s_password = document.getElementById("s_password");

    			if(!flag){
					$(this).next("span").removeClass("hide");
				//提示红色错误信息
       			s_password.innerText = "密码长度需在6~12位之间！";
			}else{
				$(this).next("span").addClass("hide");
			}
		}

		})
		
	})


	$(".c3 #pwd").click(function(){
		$(this).blur(function(){
			if($(this).val()==''){
				$(this).next("span").removeClass("hide");	
			}
			else{
				var text1= document.getElementById("password").value;
            	var text2= document.getElementById("pwd").value;
            	var s_pwd = document.getElementById("s_pwd");
				if (text2 != text1){
					$(this).next("span").removeClass("hide");
               		s_pwd.innerText = "两次输入的密码不一致！";             
            	}else{
				$(this).next("span").addClass("hide");
				}
			}
		})	
	})
})





/*侧边点击滑出*/
$(function(){		
	$("#zd").click(function(){
		$("#main").animate({left:'-300'},300);
		$("#box").animate({right:'-300'},300);
		$("body").css("height","100%");
		$("body").css("overflow","hidden");		
		$("#zd").css("display","none");					
	})
	$("#X").click(function(){
		$("#main").animate({left:'0'},300);
		$("#box").animate({right:'-350'},300);
		$("body").css("overflow-y","visible");
		setTimeout( function(){
		$("#zd").css("display","block");		
		}, 300 );		
	})
	$("#wd").click(function(){
		$("#ul1").animate({width:'toggle'},300);
		$("#wd1").animate({right:'0'},300);
	})		
	$("#fanhui1").click(function(){
		$("#wd1").animate({right:'-350'},300);
		$("#ul1").animate({width:'toggle'},300);
	})		
	$("#gy").click(function(){
		$("#ul1").animate({width:'toggle'},300);
		$("#gy1").animate({right:'0'},300);		
	})		
	$("#fanhui2").click(function(){
		$("#gy1").animate({right:'-350'},300);	
		$("#ul1").animate({width:'toggle'},300);		
	})
	$("#gcxx").click(function(){
		$("#ul2").animate({width:'toggle'},300);	
		$("#gc").animate({right:'0'},300);		
	})
	$("#fanhui3").click(function(){
		$("#ul2").animate({width:'toggle'},300);	
		$("#gc").animate({right:'-350'},300);		
	})		
})	