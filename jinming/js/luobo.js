var i=0,
    timer;
$(function () {
    var li=$("#banner ul li"),
        len=li.length;
    console.log(len);

    $(".td").eq(0).fadeIn().siblings().fadeOut();
    $(".bc").hover(function () {
        i = $(this).index();
        show();
        clearInterval(timer);
    }, function () {
        showTime();
    })
   showTime();

})
function show() {
    $(".td").eq(i).fadeIn(1000).siblings(1000).fadeOut();
    $(".bc").eq(i).addClass("bg").siblings().removeClass("bg");
}
function showTime() {
    timer = setInterval(function () {
        i++;
        if (i == 4) i = 0;
        show();
    }, 6000)
}