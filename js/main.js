let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');

let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;


window.addEventListener('scroll', function() {
    console.log(window.pageYOffset);
    menus();
});


abrir.addEventListener('click', function() {
    apertura();
});

window.addEventListener('resize', function() {

    if (screen.width >= 700) {
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');

    }
});

window.addEventListener('click', function(e) {
    console.log(e.target);
    if (cerrado == false) {
        let span = document.querySelector('span');
        if (e.target !== span && e.target !== abrir) {
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }

});


function menus() {
    let desplazamiento_actual = window.pageYOffset;

    if (desplazamiento_actual <= 100) {
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
        menu.style.top = '80px';

    } else {
        nav.classList.remove('nav1');
        nav.className = ('nav2')
        nav.style.transition = '1s';
        menu.style.top = '84px';
        abrir.style.color = '#fff';
    }
}




function apertura() {
    if (cerrado) {
        menu.style.width = '70vw';
        menu.style.display = 'block';
        cerrado = false;
    } else {
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }


}


$(window).scroll(function() {
    $(".text").each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 600) {
            $(this).addClass("animated fadeInLeft");
        }
    });
    $(".accordian").each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 600) {
            $(this).addClass("animated fadeInRight");
        }
    });
});