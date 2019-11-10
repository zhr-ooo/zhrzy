$(function() {
	$(".header").load("../html/header.html")
	$(".foot").load("../html/footer.html")
	$('.swiper-slide').mouseenter(function() {
		swiper1.autoplay.stop();
	}).mouseleave(function() {
		swiper1.autoplay.start();
	})
		//
	var swiper1 = new Swiper('.swipe', {
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 1000,
			// 点击
			disableOnInteraction: false,
		},
		effect: 'fade',
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	//
	var swiper3 = new Swiper('.gg', {
	spaceBetween: 30,
	loop: true,
	autoplay: {
		delay: 1000,
		// 点击
		disableOnInteraction: false,
	},
	effect: 'fade',
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
	//
	$(".adc").mouseover(function() {
		$(this).addClass('active').siblings().removeClass("active")

		n = $(this).index()
		$(".li").eq($(this).index()).addClass("active").siblings().removeClass("active")
	})
	var n = 0;
	var t;

	function fn() {
		t = setInterval(function() {
			n++
			if (n == 7) {
				n = 0
			}
			$(".adc").eq(n).addClass('active').siblings().removeClass("active")
			$(".li").eq(n).addClass("active").siblings().removeClass("active")
		}, 3000)
	}
	fn()
	$(".lunc").mouseover(function() {
		clearInterval(t)
	})
	$(".lunc").mouseout(function() {
		fn()
	})

	$.ajax({
		type: "get",
		url: "index.json",
		async: true,
		dataType: "json",
		success: function(data) {

			$.each(data, function(i) {

				if (data[i].red) {
					$(`
					<div class="dig">
					<div class="aimg">
						
					
						<img class="img" src="img/${data[i].img}.webp"/>
						<img class="himg" src="img/${data[i].himg}.webp"/>
						<img style="width: 48px;height: 48px;" class="shuan" src="${data[i].src}"/>
						<div id="corol"style="background: url(img/rer.png);">
							<div class="prtit" style="background: url(img/re1.png);">
								<div class="anpai">
									<div class="kun">${data[i].tehui}</div>
									<div class="bigge">${data[i].jiage}</div>
								</div>

							</div>
								<div class="shengyu">${data[i].shengyu}</div>
						</div>
						
					</div>
					<div class="reds">
						<div class="red">
						${data[i].red}
						</div>
					</div>
					<div class="tits">
						<div class="titd">${data[i].title}</div>
					</div>
					<div class="jiagex">
						<span class="xianjia">${data[i].xianjia}</span><span class="yuanjia">${data[i].yuanjia}</span>
					</div>
						
				</div>
					
				`).appendTo($(".thnei"))
				} else if (data[i].two) {
					$(`
					<div class="dig">
					<div class="aimg">
						
					
						<img class="img" src="img/${data[i].img}.webp"/>
						<img class="himg" src="img/${data[i].himg}.webp"/>
						
						
						
					</div>
					
					<div class="tits">
						<div class="titd">${data[i].title}</div>
					</div>
					<div class="jiagex">
						<span class="xianjia">${data[i].xianjia}</span>
					</div>
						
				</div>
					
				`).appendTo($(".thnei"))
				} else {
					$(`
					<div class="dig">
					<div class="aimg">
						
					
						<img class="img" src="img/${data[i].img}.webp"/>
						<img class="himg" src="img/${data[i].himg}.webp"/>
						<img style="width: 48px;height: 48px;" class="shuan" src="${data[i].src}"/>
						<div id="corol"style="background: url(img/01.png);">
							<div class="prtit" style="background: url(img/02.png);">
								<div class="anpai">
									<div class="kun">${data[i].tehui}</div>
									<div class="bigge">${data[i].jiage}</div>
								</div>

							</div>
								<div class="shengyu">${data[i].shengyu}</div>
						</div>
						
					</div>
					
					<div class="tits">
						<div class="titd">${data[i].title}</div>
					</div>
					<div class="jiagex">
						<span class="xianjia">${data[i].xianjia}</span>
					</div>
						
				</div>
					
				`).appendTo($(".thnei"))
				}

			})
		},
		error: function(err) {

		}

	});

	let x = 0
	$(".wile").click(() => {
		x--
		if (x == -1) {
			$(".thnei").css("left", 0)
			x = 0
			$(this).css("background", "rgb(231,226,215)")
		}

		$(".thnei").css("left", -x * 1100 + "px")
	})

	$(".wiri").click(() => {
		x++
		if (x == 3) {
			$(".thnei").css("left", "2200px")
			x = 2
			$(this).css("background", "rgb(231,226,215)")
		}
		console.log(x)
		$(".thnei").css("left", -x * 1100 + "px")

	})

	//福利轮播
	let num = 0;
	$(".div").mouseover(function() {
		$(this).addClass("active").siblings().removeClass("active")
		num = $(this).index()
		$(".fnilun img").eq(num).addClass("active").siblings().removeClass("active")
	})
	$(".yle").click(function() {
		num--
		if (num == -1) {
			num = 2
		}
		$(".div").eq(num).addClass("active").siblings().removeClass("active")
		$(".fnilun img").eq(num).addClass("active").siblings().removeClass("active")
	})
	$(".yri").click(function() {
		num++
		if (num == 3) {
			num = 0
		}
		$(".div").eq(num).addClass("active").siblings().removeClass("active")
		$(".fnilun img").eq(num).addClass("active").siblings().removeClass("active")
	})
	let ti = setInterval(function() {
		num++
		if (num == 3) {
			num = 0
		}
		$(".div").eq(num).addClass("active").siblings().removeClass("active")
		$(".fnilun img").eq(num).addClass("active").siblings().removeClass("active")
	}, 3000)

	//jujia.json

//	var swiper = new Swiper('.swiper-container', {
//		preventClicks: true,
//		preventClicksPropagation: true,
//		slideToClickedSlide: false,
//		slidesPerView: 3,
//		spaceBetween: 30,
//		loop: true,
//		autoplay: {
//			delay: 3000,
//			stopOnLastSlide: false,
//			disableOnInteraction: false,
//		},
//		pagination: {
//			el: '.swiper-pagination',
//			clickable: true,
//		},
//
//		navigation: {
//			nextEl: '.swiper-button-next',
//			prevEl: '.swiper-button-prev',
//		},
//	});
})