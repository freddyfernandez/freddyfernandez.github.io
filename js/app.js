window.addEventListener('load', function() {
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        },
        responsive: [{
            // screens greater than >= 775px
            breakpoint: 450,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            // screens greater than >= 1024px
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }]
    });
});




/*Menu lateral*/

$(document).ready(function() {

    $(".ham-burger, .enlaces a").click(function() {

        $(".enlaces").toggleClass("open")

        $(".ham-burger").toggleClass("active");
    })
    $(".accordian-container").click(function() {
        $(".accordian-container").children(".body").slideUp();
        $(".accordian-container").removeClass("active")
        $(".accordian-container").children(".head").children("span").removeClass("fa-angle-down").addClass("fa-angle-up")
        $(this).children(".body").slideDown();
        $(this).addClass("active")
        $(this).children(".head").children("span").removeClass("fa-angle-up").addClass("fa-angle-down")
    })

    $(".enlaces a, .go-down").click(function(event) {
        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });

            // add active class in navigation
            $(".enlaces a").removeClass("active")
            $(this).addClass("active")
        }
    })
})

//interaccion Botones Redes Sociales
var red = ["https://www.facebook.com/Fr3d10", "https://www.linkedin.com/in/freddy-fernandez-fc", "https://wa.me/51957490024"];

function redsocial(x) {
    window.open(red[x]);
}


//muestreo de seccciones
var carrousel = document.getElementsByClassName("carrousel");
var seccion1 = document.getElementsByClassName("about");
var seccion2 = document.getElementsByClassName("schedule");
var seccion3 = document.getElementsByClassName("classes");
//var seccion4 = document.getElementsByClassName("schedule");
var seccion5 = document.getElementsByClassName("gallery");
var seccion6 = document.getElementsByClassName("schedule");
var seccion7 = document.getElementsByClassName("price-package");

function mostrar(x) {


    if (x == 1) {
        carrousel[0].style.display = 'none';
        seccion2[0].style.display = 'none';
        seccion3[0].style.display = 'none';
        seccion5[0].style.display = 'none';
        seccion6[1].style.display = 'none';
        seccion7[0].style.display = 'none';

        seccion1[0].style.display = 'block';
    } else if (x == 2) {
        carrousel[0].style.display = 'none';
        seccion1[0].style.display = 'none';
        seccion3[0].style.display = 'none';
        seccion5[0].style.display = 'none';
        seccion6[1].style.display = 'none';
        seccion7[0].style.display = 'none';

        seccion2[0].style.display = 'block';
    } else if (x == 3) {
        carrousel[0].style.display = 'none';
        seccion1[0].style.display = 'none';
        seccion2[0].style.display = 'none';
        seccion5[0].style.display = 'none';
        seccion6[1].style.display = 'none';
        seccion7[0].style.display = 'none';

        seccion3[0].style.display = 'block';
    }
    //else if (x == 4) {

    //seccion4[1].style.display = 'block';
    //} 
    else if (x == 5) {
        carrousel[0].style.display = 'none';
        seccion1[0].style.display = 'none';
        seccion2[0].style.display = 'none';
        seccion3[0].style.display = 'none';
        seccion6[1].style.display = 'none';
        seccion7[0].style.display = 'none';

        seccion5[0].style.display = 'block';
    } else if (x == 6) {
        carrousel[0].style.display = 'none';
        seccion1[0].style.display = 'none';
        seccion2[0].style.display = 'none';
        seccion3[0].style.display = 'none';
        seccion5[0].style.display = 'none';
        seccion7[0].style.display = 'none';

        seccion6[1].style.display = 'block';
    } else if (x == 7) {
        carrousel[0].style.display = 'none';
        seccion1[0].style.display = 'none';
        seccion2[0].style.display = 'none';
        seccion3[0].style.display = 'none';
        seccion5[0].style.display = 'none';
        seccion6[1].style.display = 'none';


        seccion7[0].style.display = 'block';
    } else if (x == 0) {
        carrousel[0].style.display = 'block';
        seccion1[0].style.display = 'none';
        seccion2[0].style.display = 'none';
        seccion3[0].style.display = 'none';
        seccion5[0].style.display = 'none';
        seccion6[1].style.display = 'none';
        seccion7[0].style.display = 'none';



    }


}