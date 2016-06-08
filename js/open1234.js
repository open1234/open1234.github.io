$(function () {
    setImgSizeByWinSize();
    $(window).resize(function () {
        setImgSizeByWinSize();
    });
});

function setImgSizeByWinSize() {
    var $win_height = $(document).height();
    if ($win_height < 400) {
        $win_height = 400;
    }
    if ($win_height > 1080) {
        $win_height = 1080;
    }
    setImgSize($("div.image-list > a > img"), $win_height / 8, $win_height / 2);
}

/* 设置图片宽高 */
function setImgSize($node, width, height) {
    $node.css("width", width);
    $node.css("height", height);
}