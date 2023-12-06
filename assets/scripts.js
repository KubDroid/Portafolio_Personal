// Puedes agregar scripts adicionales aquí para interactividad o animaciones.

// Toggle del menú para dispositivos móviles
document.getElementById('mobile-menu').addEventListener('click', function () {
    var navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
});




// Agregar al final del archivo scripts.js

/*document.getElementById('contacto-formulario').addEventListener('submit', function (event) {
    // Puedes agregar lógica de validación o enviar el formulario a través de AJAX aquí
    alert('¡Mensaje enviado con éxito!');
    event.preventDefault();
});*/





function enviarFormulario() {
    // Get form data
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    // Validate form data
    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, completa todos los campos del formulario.");
        return;
    }

    // Create an object with the form data
    var formData = {
        nombre: nombre,
        email: email,
        mensaje: mensaje
    };

    // Send data to the server using AJAX (you may need to adjust the URL)
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "process-form.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Handle the server response (you can customize this part)
            alert("Mensaje enviado con éxito. Gracias por ponerte en contacto.");
            // You can redirect the user to a thank you page or do other actions as needed.
        }
    };

    // Convert the form data to JSON and send it to the server
    xhr.send(JSON.stringify(formData));
}