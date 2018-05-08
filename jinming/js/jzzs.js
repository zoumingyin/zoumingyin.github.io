
$(function () {
    $(".website").hover(function () {
        $(".website").css("color","white");
        $(".website").css("background","blue");
        $(".newsList").css("display","block")
        $(".newsList1").css("display","none")
    },function () {
        $(".website").css("color","");
        $(".website").css("background","");
    })
    $(".mes").hover(function () {
        $(".mes").css("color","white");
        $(".mes").css("background","blue");
        $(".newsList").css("display","none")
        $(".newsList1").css("display","block")
    },function () {
        $(".mes").css("color","");
        $(".mes").css("background","");
    })
})