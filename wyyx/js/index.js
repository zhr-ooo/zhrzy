$("#header").load("./html/header.html")
$("#footer").load("./html/footer.html")

$('.swiper-slide').mouseenter(function() {
		swiper1.autoplay.stop();
		swiper2.autoplay.stop();
		//		swiper3.autoplay.stop();
	}).mouseleave(function() {
		swiper1.autoplay.start();
		swiper2.autoplay.start();
		//		swiper3.autoplay.start();
	})
	//1
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
//2
var swiper2 = new Swiper('.flspic', {
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
//3
var swiper3 = new Swiper('.gg', {
	spaceBetween: 30,
	loop: true,
	autoplay: {
		delay: 1000,
		// 点击
		disableOnInteraction: false,
	},
	effect: 'fade',

		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

//jjsh
var jjshbd = document.getElementById("jjshbd");
var fsxbbd = document.getElementById("fsxbbd");
var msjsbd = document.getElementById("msjsbd");
var ghqjbd = document.getElementById("ghqjbd");
var ydlxbd = document.getElementById("ydlxbd");
var smjdbd = document.getElementById("smjdbd");
var qqtebd = document.getElementById("qqtebd");
var one = document.getElementById("one");
$.get("./json/index.json", function(data) {
	console.log(data.jjsh)
	for (let x = 0; x < data.jjsh.length; x++) {
		var jjshlist = document.createElement("li")
		jjshlist.className = "itme";
		jjshlist.innerHTML = `
		  <div class="hd">
					<a href="">
					    <img class="img" src="${data.jjsh[x].img}"/>
						<img class="imgScene" src="${data.jjsh[x].imgScene}"/>
						<img class="promoLogo" src="${data.jjsh[x].promoLogo}"/>
					</a>
		  </div>
		  <div class="bd">
					<div class="prdtTags"></div>
					<p class="tit">
						<a href="">${data.jjsh[x].name}</a>
					</p>
					<p class="price">${data.jjsh[x].price}</p>
		  </div>	
		`
		jjshbd.appendChild(jjshlist)
	}
	console.log(data.fsxb)
	for (let x = 0; x < data.fsxb.length; x++) {
		var fsxblist = document.createElement("li")
		fsxblist.className = "itme";
		fsxblist.innerHTML = `
		  <div class="hd">
					<a href="">
					    <img class="img" src="${data.fsxb[x].img}"/>
						<img class="imgScene" src="${data.fsxb[x].imgScene}"/>
						<img class="promoLogo" src="${data.fsxb[x].promoLogo}"/>
					</a>
		  </div>
		  <div class="bd">
					<div class="prdtTags"></div>
					<p class="tit">
						<a href="">${data.fsxb[x].name}</a>
					</p>
					<p class="price">${data.fsxb[x].price}</p>
		  </div>	
		`
		fsxbbd.appendChild(fsxblist)
	}
	console.log(data.msjs)
	for (let x = 0; x < data.msjs.length; x++) {
		var msjslist = document.createElement("li")
		msjslist.className = "itme";
		msjslist.innerHTML = `
		  <div class="hd">
					<a href="">
					    <img class="img" src="${data.msjs[x].img}"/>
						<img class="imgScene" src="${data.msjs[x].imgScene}"/>
						<img class="promoLogo" src="${data.msjs[x].promoLogo}"/>
					</a>
		  </div>
		  <div class="bd">
					<div class="prdtTags"></div>
					<p class="tit">
						<a href="">${data.msjs[x].name}</a>
					</p>
					<p class="price">${data.msjs[x].price}</p>
		  </div>	
		`
		msjsbd.appendChild(msjslist)
	}
	console.log(data.ghqj)
	for (let x = 0; x < data.ghqj.length; x++) {
		var ghqjlist = document.createElement("li")
		ghqjlist.className = "itme";
		ghqjlist.innerHTML = `
		  <div class="hd">
					<a href="">
					    <img class="img" src="${data.ghqj[x].img}"/>
						<img class="imgScene" src="${data.ghqj[x].imgScene}"/>
						<img class="promoLogo" src="${data.ghqj[x].promoLogo}"/>
					</a>
		  </div>
		  <div class="bd">
					<div class="prdtTags"></div>
					<p class="tit">
						<a href="">${data.ghqj[x].name}</a>
					</p>
					<p class="price">${data.ghqj[x].price}</p>
		  </div>	
		`
		ghqjbd.appendChild(ghqjlist)
	}
	console.log(data.myqz)
	for (let x = 0; x < data.myqz.length; x++) {
		var myqzlist = document.createElement("li")
		myqzlist.className = "itme";
		myqzlist.innerHTML = `
		  <div class="hd">
					<a href="">
					    <img class="img" src="${data.myqz[x].img}"/>
						<img class="imgScene" src="${data.myqz[x].imgScene}"/>
						<img class="promoLogo" src="${data.myqz[x].promoLogo}"/>
					</a>
		  </div>
		  <div class="bd">
					<div class="prdtTags"></div>
					<p class="tit">
						<a href="">${data.myqz[x].name}</a>
					</p>
					<p class="price">${data.myqz[x].price}</p>
		  </div>	
		`
		myqzbd.appendChild(myqzlist)
	}
	console.log(data.ydlx)
	for (let x = 0; x < data.ydlx.length; x++) {
		var ydlxlist = document.createElement("li")
		ydlxlist.className = "itme";
		ydlxlist.innerHTML = `
		  <div class="hd">
					<a href="">
					    <img class="img" src="${data.ydlx[x].img}"/>
						<img class="imgScene" src="${data.ydlx[x].imgScene}"/>
						<img class="promoLogo" src="${data.ydlx[x].promoLogo}"/>
					</a>
		  </div>
		  <div class="bd">
					<div class="prdtTags"></div>
					<p class="tit">
						<a href="">${data.ydlx[x].name}</a>
					</p>
					<p class="price">${data.ydlx[x].price}</p>
		  </div>	
		`
		ydlxbd.appendChild(ydlxlist)
	}
	console.log(data.smjd)
	for (let x = 0; x < data.smjd.length; x++) {
		var smjdlist = document.createElement("li")
		smjdlist.className = "itme";
		smjdlist.innerHTML = `
		  <div class="hd">
					<a href="">
					    <img class="img" src="${data.smjd[x].img}"/>
						<img class="imgScene" src="${data.smjd[x].imgScene}"/>
						<img class="promoLogo" src="${data.smjd[x].promoLogo}"/>
					</a>
		  </div>
		  <div class="bd">
					<div class="prdtTags"></div>
					<p class="tit">
						<a href="">${data.smjd[x].name}</a>
					</p>
					<p class="price">${data.smjd[x].price}</p>
		  </div>	
		`
		smjdbd.appendChild(smjdlist)
	}
	console.log(data.qqte)
	for (let x = 0; x < data.qqte.length; x++) {
		var qqtelist = document.createElement("li")
		qqtelist.className = "itme";
		qqtelist.innerHTML = `
		  <div class="hd">
					<a href="">
					    <img class="img" src="${data.qqte[x].img}"/>
						<img class="imgScene" src="${data.qqte[x].imgScene}"/>
						<img class="promoLogo" src="${data.qqte[x].promoLogo}"/>
					</a>
		  </div>
		  <div class="bd">
					<div class="prdtTags"></div>
					<p class="tit">
						<a href="">${data.qqte[x].name}</a>
					</p>
					<p class="price">${data.qqte[x].price}</p>
		  </div>	
		`
		qqtebd.appendChild(qqtelist)
	}

})

//4
// var swiper4 = new Swiper('.oo', {
// 	//	slidesPerView: 3,
// 	spaceBetween: 30,
// 	slidesPerGroup: 3,
// 	loopFillGroupWithBlank: true,
// 	pagination: {
// 		el: '.swiper-pagination',
// 		clickable: true,
// 	},
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
// });