$(function () {
    $(".lil1Imgn4").click(function () {
        $(".lil1").css("display","none");
        $(".lil1").css("transition","all 2s");
        $(".lil2").css("display","block");
        $(".lil2").css("transition","all 2s");
        $(".lil1Imgn").css("display","none");
        $(".lil1Imgn").css("transition","all 2s");
    })
    $(".lil1Imgn5").click(function () {
        $(".lil1").css("display","none");
        $(".lil2").css("display","block");
        $(".lil1Imgn").css("display","none");
    })
    $(".lil1Imgn3").click(function () {
        $(".lil1").css("display","none");
        $(".lil2").css("display","block");
        $(".lil1Imgn").css("display","none");
    })

    $(".lil1Nav21").click(function () {
        $(".lil1").css("display","block");
        $(".lil2").css("display","none");
        $(".lil1Imgn").css("display","block");
    })
})