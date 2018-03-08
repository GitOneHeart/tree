$(document).ready(function(){
		var isTool1=true;//用户当天是否已经使用过工具 0为未使用 1为已使用 数据库传值
		var flowerShape;//当前花的形态 1为默认 2为树苗 3为树枝 4为小树 5为大树
		var lv;//当前幸福值
		var energy=0; //当前能量值
		var sumEnergy=500;
		
		
	/*领取树苗*/
    	$('.game_btn').on('click',function(){
    		$('.show_bg').show()
      		setTimeout(function(){
    			$('.show_bg').hide();
    			$('#GrowUp').fadeIn();
    		},5000)
    	})
    	/*提示用户点击 玩法介绍*/
    	$('.btn_').on('click',function(){
    		$('.show_bg').fadeOut();
    		$('#GrowUp').fadeIn();
    	})
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
		/*自己浇水*/
		function water(){
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
				funShape();
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
				funShape();
				$('.GrowUp_btn').remove();
				$('.invite_btn').show();
				$('.kettle1').hide();
				$('.kettle2').show();
			},2500)
		})
			//当前树的形态及能量值的变化
		function funShape(){
			$('.status1>img').remove();
			$('.status1').append("<a href='javascript:void(0)'><img src='img/shu1.png'></a>");
			$('.powerProgress').css({
				"height":'20%'
			})
			var num0 = energy+=100;
			$('.progressNum').html(num0);
			$('.GrowUpEne').html(num0);
			$('.reduce').html(sumEnergy-num0);
		}
		//朋友帮忙树的形态及能量值的变化
		function friendShape(){
			person++;
			$('.status1 img').remove();
			$('.status1').append("<a href='javascript:void(0)'><img src='img/shu1.png'></a>");
			$('.powerProgress').css({
				"height":'20%'
			})
			var num0 = energy+=100;
			$('.progressNum').html(num0);
			$('.GrowUpEne').html(num0);
			$('.reduce').html(sumEnergy-num0);
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
			$('.kettleText').html('浇过水了').css({
				'color':'#8e8e8e'
			});
			$('.kettleText').removeClass('wobble');
		})
		/*关闭弹窗*/
		$('.closeWeui').on('click',function(){
			$('#dialog2').hide()
			$('.weui_mask').hide()
		})
})
