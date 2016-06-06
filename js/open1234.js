$(function () {
    var $win_width = $(window).width();
    var $img_height = $(window).height();//图片高度
    var $img_width = $img_height / 4;//图片宽度
    var $img_num = $("ul.accordion li a img").size();//图片数量

    setAccordionImgSize($img_width, $img_height);
    $("ul.accordion").css("width", $img_num * $img_width);

    //窗口发生变化
    $(window).resize(function () {
        var $img_height = $(window).height();
        setAccordionImgSize($img_height / 4, $img_height);
    });

    //鼠标指针事件
    $(window).mouseover(function (e) {
        console.log("x:" + e.pageX + ",y:" + e.pageY);
        var mouseX = e.pageX;
        var mouseY = e.pageY;
        //startAccordionAnimate();
    });

    //菜单颜色效果
    //$("ul.menu li a").hover(
    //    function () {
    //        $(this).addClass("animated flipInX");
    //    },
    //    function () {
    //        var node = $(this);
    //        setTimeout(function () {
    //            node.removeClass("animated flipInX");
    //        }, 1000);
    //    }
    //);
});

//设置Accordion的图片大小
function setAccordionImgSize(width, height) {
    $("ul.accordion li a img").css("width", width);
    $("ul.accordion li a img").css("height", height);
}

function startAccordionAnimate() {
    setInterval(function () {
        var $left = $("ul.accordion").css("left");
        $left = Number($left.substring(0, $left.indexOf("px"))) + 1;
        $("ul.accordion").css("left", $left + "px");
    }, 100);
}