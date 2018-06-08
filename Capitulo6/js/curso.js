var nombreELt = document.getElementById("nombre");

// Muestra un mensaje de texto para ayuda al usuario a introducir un nombre
nombreELt.addEventListener("focus", function () {
    document.getElementById("ayudaNombre").textContent = "Intruduzca un nombre de usuario";
});

// Borra el mensaje de texto de ayuda para el campo nombre-usuario
nombreELt.addEventListener("blur", function () {
    document.getElementById("ayudaNombre").textContent = "";
});

// Muestra si el usuario hace click en la casilla confirmación
document.getElementById("confirmacion").addEventListener("change", function (e) {
    console.log("Enviar email de confirmación: " + e.target.checked);
});

// Muestra el tipo de suscripción elegida
document.getElementsByName("suscripcion").forEach(function (element) {
    element.addEventListener("change", function (event) {
        console.log("Suscripción elegida: " + event.target.value);
    });
});





