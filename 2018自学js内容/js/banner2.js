(function () {
    var a = 0;
    var b = 0;
    var u = function (h) {
        if (a == 0) { return } if ($("#content").is(":animated")) { return } a--;
        $("#content").animate({ top: h }, 500);
        $("#ul li").removeClass("ckeck-li");
        $("#ul li").eq(a).addClass("ckeck-li")
    };
    var d = function (h) {
        if (a == b - 1) { return } if ($("#content").is(":animated")) { return } a++;
        $("#content").animate({ top: h }, 500);
        $("#ul li").removeClass("ckeck-li");
        $("#ul li").eq(a).addClass("ckeck-li")
    };
    var scrollFunc = function (e) {
        b = $("#content div").length; e = e || window.event; if (e.wheelDelta) {
            var div = document.getElementById("content");
                                           //修改                                     //修改
            if (e.wheelDelta > 0) { new u("+=500px") } if (e.wheelDelta < 0) { new d("-=500px") }
                                                    //修改                                  //修改
        } if (e.detail) { if (e.detail < 0) { new u("+=500px") } if (e.detail > 0) { new d("-=500px") } }
    };
    window.onmousewheel = document.onmousewheel = scrollFunc; if (document.addEventListener) { document.addEventListener("DOMMouseScroll", scrollFunc, false) } $(function () {
        b = $("#content div").length;
        var ul = document.createElement("ul"); ul.setAttribute("id", "ul"); for (var i = 0; i < b; i++) {
            var li = document.createElement("li");
            if (i == 0) { li.setAttribute("class", "ckeck-li") } ul.appendChild(li)
        } $(".content").append(ul);
        $("#ul li").click(function () {
            var index = $("#ul li").index(this); if (index > a) {
                                                            //修改 相当于每次移动500px,所以*5
                $("#content").animate({ top: "-=" + (index - a)*5 + "00px" }, 500); $("#ul li").removeClass("ckeck-li");
                $("#ul li").eq(index).addClass("ckeck-li")
            } else {
                if (index < a) {
                                                                //修改  相当于每次移动500px,所以*5
                    $("#content").animate({ top: "+=" + (a - index)*5 + "00px" }, 500);
                    $("#ul li").removeClass("ckeck-li");
                    $("#ul li").eq(index).addClass("ckeck-li")
                } else { return }
            } a = index
        })
    })
}());