(function ($) {
    "use strict";


    var $body = $("body"),
            $window = $(window);


    
    


    /*============================= Navigation Section ==============================*/



    $window.on('scroll', function () {
        "use strict";
        if ($(".navbar").offset().top > 50) {
            $(".navbar-default").addClass("small");
        } else {
            $(".navbar-default").removeClass("small");
        }
    });

    

    /*============================= Go top button ==============================*/

    $(window).on('scroll',function () {
        "use strict";
        if ($(this).scrollTop() > 50) {
            $('.scrolltop:hidden').stop(true, true).fadeIn();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
        }
    });
    $('.scroll').on('click', 'a', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 1
        }, 1000);
        event.preventDefault();
    });

    /*============================= fancybox ==============================*/

    $(window).on('load', function () {
        "use strict";
        $(".fancybox").fancybox();
    });

    /*============================= Smoothscroll js ==============================*/

    $('.navbar-default').on('click', 'a', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 1
        }, 1000);
        event.preventDefault();
    });

    /*====================================== jquery scroll spy ========================================*/

    $body.scrollspy({
        target: ".navbar-collapse",
        offset: 15

    });
    
    
})(jQuery);

/*============================= Testimonial ==============================*/
    $("#work").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:true,
        slideSpeed:1000,
        autoPlay:true
    });

    $(window).on('load', function () {
        "use strict";
        $("#work").owlCarousel({
            items:1,
            itemsDesktop:[1000,1],
            itemsDesktopSmall:[979,1],
            itemsTablet:[768,1],
            pagination:true,
            navigation:true,
            slideSpeed:1000,
            autoPlay:true
        });
    });
    
    /*===========================================counter-up===========================================*/

    $('.Count').each(function () {
        "use strict";
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 15000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

/*===========================================preload===========================================*/


    $(window).on('load', function () {
        "use strict";
        // Animate loader off screen
        $(".se-pre-con").fadeOut("slow");
        ;
    });