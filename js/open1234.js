$(function () {
    //生成菜单
    $(".nav").xmenu();
    //主页设置
    load("view/home.html", setHomeImageSize);
});

/* 页面加载 */
function load(url, fun) {
    $("#main").load(url, fun);
}

/* 设置首页图片 */
function setHomeImageSize() {
    var $win_width = $(document).width();
    var $win_height = $(document).height();
    setImgSize($("#main > #home"), $win_width - 140, $win_height);
}

/* 设置图片宽高 */
function setImgSize($node, width, height) {
    $node.css("width", width);
    $node.css("height", height);
}