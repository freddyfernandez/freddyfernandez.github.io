let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');

let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;






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