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


/*Animacion del boton*/
document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopButton = document.getElementById("scrollToTopButton");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  scrollToTopButton.addEventListener("click", function () {
    scrollToTop();
  });

  function scrollToTop() {
    var scrollStep = -window.scrollY / 1; // Ajusta la velocidad aquí
    var scrollInterval = setInterval(function () {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 400); // Intervalo de tiempo en milisegundos
  }
});


var splide = new Splide('.splide', {
  type: 'loop',
  perPage: 3,
  autoplay: true,
  perPage: 4,
  speed: 400, // Ajusta la velocidad aquí (en milisegundos)
  breakpoints: {
    834: {
      perPage: 1
    },
    820: {
      perPage: 1
    },
    768: {
      perPage: 1,
    },
    576: {
      perPage: 1,
    }
  }
});

splide.mount();



