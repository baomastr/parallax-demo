/**
 * Created by user on 09.12.15.
 */
$(window).scroll(function() {

    var st = $(this).scrollTop();

    $('.starter-template').css({
        "transform" : "translate(0%, " + st /4 + "%"
    });

    $('.sect_2 img').css({
        "transform" : "translate(0%, " + st /40 + "%"
    });

});