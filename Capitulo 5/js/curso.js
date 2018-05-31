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

// Mostrar por consola el caracter asociado a la tecla pulsada.
document.addEventListener("keypress", function(e){
    console.log(e.key); // muestra por pantalla la tecla pulsada
});

// Utilizar la misma función para gestionar los dos eventos
function infoTecla(e){
    console.log("Evento: " + e.type + // muestra por pantalla el tipo de evento)
    "\n Tecla: " + e.key) // muestra por pantalla la tecla pulsada;
};

document.addEventListener("keydown", infoTecla);
document.addEventListener("keyup", infoTecla);

// Retorna el nombre del botón del ratón a partir de su codigo
function getBotonRaton(codigo){
    var boton = "desconocido";
    switch (codigo){
        case 0: // es el código del botón izquierdo
            boton = "izquierdo";
            break;
        case 1: // es el código del botón central (si lo tiene)
            boton = "central";
            break;
        case 2: // es el código del botón derecho
            boton = "derecho";
            break;        
    }
    return boton;
}

// Muestra la información de un evento del ratón
function infoRaton(e){
    console.log("Evento de ratón: " + e.type + ", botón " + getBotonRaton(e.button) + ", X: " + e.clientX + ", Y: " + e.clientY);
}

// -----------------------------------------------

// Gestor de click del ratón
document.addEventListener("click", infoRaton);

// Gestor de pulsasión de un botón del ratón
document.addEventListener("mousedown", infoRaton);
document.addEventListener("mouseup", infoRaton);


// Gestor de la carga total de la página web
window.addEventListener("load", function(){
    console.log("Página totalmente cargada");
});

// Gestor del clic sobre el documento
document.addEventListener("click", function(){
    console.log("Gestor del documento");
});

// Gestor del click sobre el párrafo
document.getElementById("parrafo").addEventListener("click", function(){
    console.log("Gestor del párrafo");
});

// Gestor del click sobre el botón
document.getElementById("propagacion").addEventListener("click", function(){
    console.log("Gestor del botón");
})