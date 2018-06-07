var nombreELt = document.getElementById("nombre");

// Muestra un mensaje de texto para ayuda al usuario a introducir un nombre
nombreELt.addEventListener("focus",function(){
    document.getElementById("ayudaNombre").textContent = "Intruduzca un nombre de usuario";
});

// Borra el mensaje de texto de ayuda para el campo nombre-usuario
nombreELt.addEventListener("blur", function(){
    document.getElementById("ayudaNombre").textContent = "";
});

