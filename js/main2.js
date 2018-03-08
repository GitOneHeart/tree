$(document).ready(function(){
		var isTools = 0 ;
		var flowerShape;//当前花的形态 1为默认 2为树苗 3为树枝 4为小树 5为大树
		var energy=0; //当前能量值
		var sumEnergy=500;
		var circle;
//		第n好友浇水
		var person = 1;
    	/*tab栏的切换*/
		$('.tab-item').mouseover(function(){
			$(this).addClass('active').siblings().removeClass('active')
			$('.main').eq($(this).index()).addClass('selected').siblings().removeClass('selected');
		})
		/*玩法介绍*/
		$(".howPlay").on('click',function(){
			$('.show_bg').hide();
			$('#container').slideDown(500);
			$('.closeBtn').on('click',function(){
				$('#container').slideUp(500);
			})
		})
		
		
		
		$('.invite_btn').on('click',function(){
			$('.share').show()
			$('.howPlay').hide()
			$('.GameKettle').css({'z-index':0})
			$('.shareConfirm').on('click',function(){
				$('.share').hide()
				$('.howPlay').show()
			})
		})
		
		
		
		
		
		/*成长页面*/
		/*旋转的圆*/
		$('.imgCon').on('click',function(){
				$(this).toggleClass('circle');
		})
		/*浇水*/
		function water(){
			var self = this;
			$('.jug').css({"opacity":1,"-webkit-transform":"rotate(-45deg)"});
			setTimeout(function(){
				$(".water").fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			},1000);
			setTimeout(function(){
				$(".jug").fadeOut(300);
				$(".water").fadeOut(300);
				friendShape()
			},2500)
		}
		$('.GrowUp_btn').on('click',function(){
			var self = this;
			$('.jug').css({"opacity":1,"-webkit-transform":"rotate(-45deg)"});
			setTimeout(function(){
				$(".water").fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			},1000);
			setTimeout(function(){
				$(".jug").fadeOut(300);
				$(".water").fadeOut(300);
				$('.GrowUp_btn').remove();
				$('.invite_btn').show();
			},2500)
		})
		console.log($('.powerBar').height()*2/5)
		//朋友帮忙树的形态及能量值的变化
		function friendShape(){
			//好友
			var init = person+1;
//			var energyNum = $('.powerBar').height()*'+init+'/5;
			//进度条
			var progress = init * 20;
			$('.friendStatus img').remove();
			$('.friendStatus').append("<img src='img/shu"+init+".png'>");
			$('.powerProgress').css({
				"height":progress+'%'
			})
			var num0 = init*100;
			$('.progressNum').html(num0);
			$('.GrowUpEne').html(num0);
			$('.reduce').html(sumEnergy-num0);
			//成熟状态的时候触发
			if($('.powerProgress').height()==$('.powerBar').height()){
				$('.invite_btn').hide();
				$('.rock_btn').show();
				//能量收集完成后的弹窗
				$(".kettle2").on('click',function(){
					$('#dialog2').show();
					$('#prompt_message').html('哎呀，您好友的朋友真多，已经完成营养收集了，谢谢您的前来助力呢！明天再来帮助吧！');
					$('.weui_btn_dialog').html('参与活动摇大奖');
				})
//				$('.kettle1').css({'z-index':2});
			}
		}
		//隐藏工具
		function funTool(){
			$(".kettle1").hide();
			$(".kettle2").show();
		}
		/*点击水壶浇水*/
		$('.kettle1').on('click',function(){
			funTool()
			water()
//			isTools=1;
//			if(isTools=1){
//				$('.kettle2').on('click',function(){
//					alert('123')
//				})
//			}
			$('.kettleText').html('浇过水了').removeClass('wobble').css({
				'color':'#8e8e8e'
			});
		})
		/*手机摇一摇*/
		$('.rock_btn').on('click',function(){
			$('.GameKettle').css({'z-index':0});
			$('.rockPrize').show()
		})
		/*关闭弹窗*/
		$('.closeWeui').on('click',function(){
			$('#dialog2').hide()
		})
		/*好友进入也参与*/
		$('.join_btn').on('click',function(){
			window.location.href='index.html';
		})
		/*摇一摇的*/
		var isRock=0;//是否已经抽奖，0为未抽奖 1为已抽奖 
		var num=parseInt($("#num").val());//用于区分摇了几次
		$(function(){
			if(window.DeviceMotionEvent) {
				var speed = 25;
				var x = y = z = lastX = lastY = lastZ = 0;
				window.addEventListener('devicemotion', function(){
					var acceleration =event.accelerationIncludingGravity;
					x = acceleration.x;
					y = acceleration.y;
					if(Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed) {
						if (num==0) {//第一次摇奖
							WeixinJSBridge.invoke('getNetworkType', {}, function (res) {
         					document.getElementById('music').play();
    					});
							$(".rockImg").css({"animation-name":"rock"});
							setTimeout(function(){
								$('.rockPrize').hide();
								$('#dialog2').show();
								if(isRock==0){
								$('#prompt_message').html('恭喜您获得二等奖：500MB内蒙古自治区内流量');
								var prize=Math.floor(Math.random()*3);
								}else if(prize==1){
										$("#prompt_message").html('差一点点就抽中了价值3000元vivo X20手机,明天再来试试好运气吧');
										$('.weui_btn_dialog').html('明天再来吧');
								}
							},1500);
								num=1;
								$("#num").val(num);						
						}else{			

						}			
					}
					lastX = x;
					lastY = y;
				}, false);
			}
		});
		
		
})
