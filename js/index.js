// Selecciona el elemento con la clase "navigation-wrap" y lo guarda en la variable 'nav'
let nav = document.querySelector('.navigation-wrap');

// Asigna una función al evento de desplazamiento en la ventana del navegador
window.onscroll = function () {
    // Comprueba si la posición de desplazamiento vertical es mayor que 20 píxeles
    if (document.documentElement.scrollTop > 20) {
        // Agrega la clase 'scroll-on' al elemento 'nav' si se cumple la condición anterior
        nav.classList.add('scroll-on');
    } else {
        // Si la posición de desplazamiento es menor o igual a 20 píxeles, remueve la clase 'scroll-on' del elemento 'nav'
        nav.classList.remove('scroll-on');
    }
}