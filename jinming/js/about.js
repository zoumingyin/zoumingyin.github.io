$(document).ready(function(){

    // $('.item03-left').click(function(){
    // 	var $width_3=$('.item03-list').outerWidth(true)
    // 	var $box_3=$('.item03-con')
    // 	if(!$box_3.is(':animated')){
    // 		$box_3.find(".item03-list").prependTo($box_3);
    // 		$box_3.css('left','-='+$width_3)
    // 		$box_3.animate({'left':0},800)
    // 	}
    // })
    // $('.item03-right').click(function(){
    // 	var $width_3=$('.item03-list').outerWidth(true)
    // 	var $box_3=$('.item03-con')
    // 	if(!$box_3.is(':animated')){
    // 		$box_3.animate({'left':'-='+$width_3},800,function(){
    // 			$box_3.find(".item03-list").appendTo($box_3)
    // 			$box_3.css('left','0')
    // 		})
    // 	}
    // })

    $('.contentNleft').click(function () {
        var $casebox = $('.contentNcc')
        var $casewidth = $('.contentNs').outerWidth(true)
        if (!$casebox.is(':animated')) {
            $casebox.find('.contentNs').last().prependTo($casebox)
            $casebox.css('left', '-=' + $casewidth)
            $casebox.animate({ left: '0' }, 500);
        }
    })
    $('.contentNright').click(function () {
        var $casebox = $('.contentNcc')
        var $casewidth = $('.contentNs').outerWidth(true)
        if (!$casebox.is(':animated')) {
            $casebox.animate({ left: '-' + $casewidth }, 500, function () {
                $casebox.find('.contentNs').first().appendTo($casebox);
                $casebox.css('left', '0');
            })
        }
    })


})