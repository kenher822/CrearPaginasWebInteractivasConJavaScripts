var nombreELt = document.getElementById("nombre");

// Muestra un mensaje de texto para ayuda al usuario a introducir un nombre
nombreELt.addEventListener("focus", function () {
    document.getElementById("ayudaNombre").textContent = "Intruduzca un nombre de usuario";
});

// Borra el mensaje de texto de ayuda para el campo nombre-usuario
nombreELt.addEventListener("blur", function () {
    document.getElementById("ayudaNombre").textContent = "";
});

var claveElt = document.getElementById("clave");
// Muestra un mensaje de texto para ayuda al usuario al ingresa una contraseña
claveElt.addEventListener("focus", function(){
    document.getElementById("ayudaClave").textContent = "Introduzca una contraseña";
});

// Borra el mensaje de texto de ayuda para el campo clave-usuario
claveElt.addEventListener("blur", function(){
    document.getElementById("ayudaClave").textContent = "";
});

var emailElt = document.getElementById("email");

// Muestra mensaje de texto para ayuda al usuario al ingresar un email
emailElt.addEventListener("focus", function(){
    document.getElementById("ayudaEmail").textContent = "Introduzca un correo electrónico válido";
});

// Borra mensaje de texto de ayuda 
emailElt.addEventListener("blur", function(){
    document.getElementById("ayudaEmail").textContent = "";
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

// Muestra la seleccion de la lista desplegable
document.getElementById("nacionalidad").addEventListener("change",function(e){
    console.log("Nacionalidad: " + e.target.value);
});


var form = document.querySelector("form");
console.log("Número de campos: " + form.elements.length); // Muestra 10
console.log(form.elements[0].name); // Muestra "nombre"
console.log(form.elements.clave.type); // Muestra "password"

form.addEventListener("submit", function(event){
    event.preventDefault();
    // También se puede acceder a los elementos a través de form.elements Ejemplo -> form.elements.nombre.value
    console.log("Nombre de usuario: " + event.target.elements.nombre.value);
    console.log("Contraseña: " + event.target.clave.value);
    console.log("Email: " + event.target.email.value);
    console.log("Confirmación: " + event.target.confirmacion.value);
    console.log("Suscripción: " + event.target.suscripcion.value);
    console.log("Nacionalidad: " + event.target.nacionalidad.value);
});
