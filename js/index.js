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

/////////////////////////Formulario//
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var mensaje = document.getElementById("mensaje").value;
    
    var data = {
      personalizations: [
        {
          to: [{ email: "sandovaldev21@gmail.com" }] // correo electrónico del destinatario
        }
      ],
      from: { email: email },
      subject: "Nuevo mensaje del formulario de contacto",
      content: [
        {
          type: "text/plain",
          value: "Nombre: " + nombre + "\nEmail: " + email + "\nTeléfono: " + telefono + "\nMensaje: " + mensaje
        }
      ]
    };
    
    fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "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" //aqui va el api
      },
      body: JSON.stringify(data)
    })
    .then(function(response) {
      if (response.ok) {
        alert("Mensaje enviado con éxito. Gracias por contactarnos.");
      } else {
        alert("Hubo un error al enviar el mensaje. Por favor, inténtalo nuevamente.");
      }
    })
    .catch(function(error) {
      console.log(error);
    });
  });