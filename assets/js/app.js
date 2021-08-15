//interaccion Botones Redes Sociales
var red = ["https://github.com/freddyfernandez", "https://www.linkedin.com/in/freddy-fernandez-fc", "https://wa.me/51957490024"];

function redsocial(x) {
    window.open(red[x]);
}


function ocultar() {

    $(".nav_input").prop("checked", false);


}

// window.fbAsyncInit = function() {
//     FB.init({
//         xfbml: true,
//         version: 'v10.0'
//     });
// };

// (function(d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) return;
//     js = d.createElement(s);
//     js.id = id;
//     js.src = 'https://connect.facebook.net/es_ES/sdk/xfbml.customerchat.js';
//     fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));


//Carrousel
function initParadoxWay() {
    "use strict";

    if ($(".testimonials-carousel").length > 0) {
        var j2 = new Swiper(".testimonials-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.listing-carousel-button-next',
                prevEl: '.listing-carousel-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },

            }
        });
    }


}

//   Init All ------------------


$(document).ready(function() {
    initParadoxWay();
    $(".accordian-container").click(function() {
        $(".accordian-container").children(".body").slideUp();
        $(".accordian-container").removeClass("active")
        $(".accordian-container").children(".head").children("span").removeClass("fa-angle-down").addClass("fa-angle-up")
        $(this).children(".body").slideDown();
        $(this).addClass("active")
        $(this).children(".head").children("span").removeClass("fa-angle-up").addClass("fa-angle-down")
    })


});


function animationfadeIn() {

    if (screen.width >= 900) {

        $(".text , .h1fade").each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 600) {
                $(this).addClass("animated fadeInLeft");

            }
        });
        $(".accordian , .h2fade").each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 600) {
                $(this).addClass("animated fadeInRight");
            }
        });

    }

}



$(window).scroll(function() {
    animationfadeIn();
});