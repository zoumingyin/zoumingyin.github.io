$(function () {
    $(".pj").hover(function () {
        $(".pj").css("background","blue");
        $(".pj").css("color","white");
        $(".right").css("display","none");
        $(".right1").css("display","block");
    },function () {
        $(".pj").css("background","");
        $(".pj").css("color","");
    });
    $(".fw").hover(function () {
        $(".fw").css("background","blue");
        $(".fw").css("color","white");
        $(".right").css("display","block");
        $(".right1").css("display","none");
    },function () {
        $(".fw").css("background","");
        $(".fw").css("color","");
    });

})