function clic(){
    console.log("Has hecho clic en el botón");
}

// Creando el botón y asignandolo al nodo del DOM 
var boton = document.getElementById("boton");
// Agregando el evento "click"
boton.addEventListener("click", clic);


// Adición de un gestor de evnetos "click"
boton.addEventListener("click", function(){
    console.log("Has hecho click en el botón");
});

// Eliminación del gestor del evento "click"
boton.removeEventListener("click", clic);

/*
El código a continuación utiliza el objeto  Event  para mostrar el tipo de evento activado, así como el texto del elemento objetivo del evento  click. La función que gestiona el evento recibe este objeto a través del parámetro  e. Puedes elegir el nombre del parámetro que quieras, se suele utilizar también los nombres  event 
*/

document.getElementById("boton").addEventListener("click", function (e) {
    console.log(e); // muestra por pantalla el objeto event por consola
    console.log("Evento: " + e.type +
                "\nNodo de texto del objetivo: " + e.target.textContent);
});


