var a = -1
var ul = document.getElementsByClassName("yx-cp-m-tabNav")[0]
var yxcpcateGroupList = document.getElementsByClassName("yx-cp-cateGroupList")
var cateItem = document.getElementsByClassName("yx-cp-cateColumn")
ajax("../json/header.json", function (str) {
    var arr = JSON.parse(str)
    for (let i = 0; i < arr.length; i++) {
        var list = document.createElement("li")
        list.className = "yx-cp-tabNav-item"
        list.innerHTML = `
        <a href="${arr[i].href}" class="yx-cp-topLevel" target="blank">${arr[i].title}</a>
        <div class="yx-cp-tabNav-dropdown">
                            <ul class="yx-cp-cateGroupList yx-f-clearfix" style="overflow: hidden;">
                            </ul>
                            </div>
        `
        ul.appendChild(list)
        $(".yx-cp-tabNav-item").first().addClass("yx-cp-active yx-cp-firstItem")
        $(".yx-cp-tabNav-item").eq(10).addClass("yx-cp-funcTabFixed-hide yx-cp-lastItem")
        if (i < 9 && i > 0) {
            for (let j = 0; j < arr[i].fenlei.length; j++) {
                a++
                var odiv = document.createElement("div")
                odiv.className = "yx-cp-cateGroup"
                odiv.innerHTML = ` 
                <div class="yx-cp-cateGroup-name yx-f-text-overflow">${arr[i].fenlei[j].fenlei1}</div>
                <div class="yx-cp-columnList yx-f-clearfix">
                <div class="yx-cp-cateColumn"></div>
                </div>
                `
                yxcpcateGroupList[i].appendChild(odiv)
                for (let x = 0; x < arr[i].fenlei[j].fenlei2.length; x++) {
                    var oDiv = document.createElement("div")
                    oDiv.className = "yx-cp-cateItem"
                    oDiv.innerHTML = `
                  <a>
                  <img class="yx-cp-subCate-icon"
                      src="${arr[i].fenlei[j].image[x]}">
                  <span class="yx-cp-subCate-text">${arr[i].fenlei[j].fenlei2[x]}</span>
              </a>
                  `
                  cateItem[a].appendChild(oDiv)
                }
            }
        }

    }
}, function () {

})
                                                                                               