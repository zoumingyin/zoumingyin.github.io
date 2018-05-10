
    function d() {
        if(c == e.length) return !1;
        var f = $(e[c]).offset().top,
            b = $(window).scrollTop() + g - 300;
        if(f < b)
            if($(e[c]).addClass("active"), c++, c < e.length) d();
            else return !1;
        else return !1;

    }
    var e = ".about-wrap-second;.about-wrap-three;.about-wrap-four;.about-wrap-five .each-item:nth-of-type(1);.about-wrap-five .each-item:nth-of-type(2)".split(";"),
        c = 0,
        g = window.screen.availHeight;


    $(".fullwindow-banner-inner").addClass("active");
    $(window).scroll(function() {
        $(".about-wrap-first").addClass("active");
        d();
    });
    d();

