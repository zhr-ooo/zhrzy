$("#header").load("../html/header.html")
$("#footer").load("../html/footer.html")
window.onscroll = function() {
    let head2 = document.getElementsByClassName("head2")[0]
    let fixri = document.getElementsByClassName("fixri")[0]
    var gao = document.documentElement.scrollTop || document.body.scrollTop
    if (gao > 176) {
        head2.style.height = "50px"
    } else {
        head2.style.height = "0px"
    }
    if (gao > 650) {
        fixri.style.position = "fixed"
        fixri.style.top = "100px"
    } else {
        fixri.style.position = "absolute"
        fixri.style.top = "650px"
    }
}
// 轮播图
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
const msortBar = document.getElementsByClassName("m-sortBar")[0];
$.get("../json/fsxb.json", function (data) {
    console.log(data[0])
    for (let x = 0; x < data[0].length; x++) {
        var category = document.createElement("div")
        category.className = "category";
        category.innerHTML = `
           <span class="name">${data[0][x].title}</span>
           <div class="categoryGroup"></div>
        `
        msortBar.appendChild(category)
    }
    const categoryGroup = document.getElementsByClassName("categoryGroup")[0];
    for (let y = 0; y < data[0][0].ul.length; y++) {
        categoryGroup.innerHTML += `
            <a class="categoryItem" href="javascript:;">${data[0][0].ul[y]}</a>
        `
    }
    const categoryGroup1 = document.getElementsByClassName("categoryGroup")[1];
    for (let y = 0; y < data[0][1].ul.length; y++) {
        categoryGroup1.innerHTML += `
            <a class="categoryItem" href="javascript:;">${data[0][1].ul[y]}</a>
        `
    }
    const categoryGroup2 = document.getElementsByClassName("categoryGroup")[2];
    for (let y = 0; y < data[0][2].ul.length; y++) {
        categoryGroup2.innerHTML += `
            <a class="categoryItem" href="javascript:;">${data[0][2].ul[y]}</a>
        `
    }
    var lis = data[1];
    $.each(lis, function (i) {
        $(`
        <div class="mLevel2Category">
        <div class="hd">
            <p class="title">
                <span class=name>${data[1][i].bt.title}</span>
            </p>
            <p class="desc">${data[1][i].bt.subtitle}</p>
         </div>
         <ul class="m-itemList m-itemList-level2Category"></ul>
        </div>  
         `).appendTo($(".m-content"))
        $.each(data[1][i].nr, function (j) { //${data[1][i].nr[j]}
            if (data[1][i].nr[j].none) {
                $(`<li class="item">
                <div class="m-product  j-product showScene">
                <div class="hd">
                 <a href="/">
                     <img class="img img-lazyload j-lazyload  img-lazyloaded" src="${data[1][i].nr[j].imga}" alt="">
                     <div>
                         <img class="imgScene img-lazyload j-lazyload img-lazyloaded" src="${data[1][i].nr[j].imgb}" alt="">
                     </div>
                     <img class="promoLogo" src="${data[1][i].nr[j].promoLogo}" alt="">
                     
                 </a>
              </div>
              <div class="bd">
                 <div class="prdtTags">
                     
                 </div>
                 <h4 class="name2">
                     <a href="/">
                       <span>${data[1][i].nr[j].name2}</span>
                     </a>
                 </h4>
                 <p class="price2">
                     <span>${data[1][i].nr[j].price2}</span>
                     <span class="counterPrice">${data[1][i].nr[j].counterPrice}</span>
                 </p>
                 <div>
                     <hr>
                     <p class="desc">${data[1][i].nr[j].desc}</p>
                 </div>
                </div>
                </div> 
                 </li>`).appendTo($(".m-itemList").eq(i))
            } else if (data[1][i].nr[j].itemTag) {
                $(`<li class="item">
               <div class="m-product  j-product showScene">
               <div class="hd">
                <a href="/">
                    <img class="img img-lazyload j-lazyload  img-lazyloaded" src="${data[1][i].nr[j].imga}" alt="">
                    <div>
                        <img class="imgScene img-lazyload j-lazyload img-lazyloaded" src="${data[1][i].nr[j].imgb}" alt="">
                    </div>
                    <img class="promoLogo" src="${data[1][i].nr[j].promoLogo}" alt="">
                    <div class="promBanner  promBanner-10" style="background-image: url(${data[1][i].nr[j].promBanner})">
                       <div class="promTitle" style="background-image:url(${data[1][i].nr[j].promTitle})">
                          <div class="name">
                              <span>${data[1][i].nr[j].name}</span>
                          </div>
                          <div class="price">
                              <span>${data[1][i].nr[j].price}</span>
                          </div>
                       </div>
                       <div class="promContent">${data[1][i].nr[j].promContent}</div>
                    </div>
                </a>
             </div>
             <div class="bd">
                <div class="prdtTags">
                    <span class="m-itemTag">${data[1][i].nr[j].itemTag}</span>
                </div>
                <h4 class="name2">
                    <a href="/">
                      <span>${data[1][i].nr[j].name2}</span>
                    </a>
                </h4>
                <p class="price2">
                    <span>${data[1][i].nr[j].price2}</span>
                    <span class="counterPrice">${data[1][i].nr[j].counterPrice}</span>
                </p>
                <div>
                    <hr>
                    <p class="desc">${data[1][i].nr[j].desc}</p>
                </div>
               </div>
               </div> 
                </li>`).appendTo($(".m-itemList").eq(i))
            } else {
                $(`<li class="item">
                <div class="m-product  j-product showScene">
                <div class="hd">
                 <a href="/">
                     <img class="img img-lazyload j-lazyload  img-lazyloaded" src="${data[1][i].nr[j].imga}" alt="">
                     <div>
                         <img class="imgScene img-lazyload j-lazyload img-lazyloaded" src="${data[1][i].nr[j].imgb}" alt="">
                     </div>
                     <img class="promoLogo" src="${data[1][i].nr[j].promoLogo}" alt="">
                     <div class="promBanner  promBanner-10" style="background-image: url(${data[1][i].nr[j].promBanner})">
                        <div class="promTitle" style="background-image:url(${data[1][i].nr[j].promTitle})">
                           <div class="name">
                               <span>${data[1][i].nr[j].name}</span>
                           </div>
                           <div class="price">
                               <span>${data[1][i].nr[j].price}</span>
                           </div>
                        </div>
                        <div class="promContent">${data[1][i].nr[j].promContent}</div>
                     </div>
                 </a>
              </div>
              <div class="bd">
                 <div class="prdtTags">
                     
                 </div>
                 <h4 class="name2">
                     <a href="/">
                       <span>${data[1][i].nr[j].name2}</span>
                     </a>
                 </h4>
                 <p class="price2">
                     <span>${data[1][i].nr[j].price2}</span>
                     <span class="counterPrice">${data[1][i].nr[j].counterPrice}</span>
                 </p>
                 <div>
                     <hr>
                     <p class="desc">${data[1][i].nr[j].desc}</p>
                 </div>
                </div>
                </div> 
                 </li>`).appendTo($(".m-itemList").eq(i))
            }
        })
    })
})