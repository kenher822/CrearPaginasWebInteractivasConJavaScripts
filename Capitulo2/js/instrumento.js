
// Mostrar atributo href
var listaEnlaces = document.getElementsByTagName("a");
var cantidadEnlaces = document.querySelectorAll("a").length;

function enlacesWeb() {
    if (cantidadEnlaces > 0){
        console.log("Hay una cantidad de " + cantidadEnlaces + " enlaces en la página.");
        console.log("Este es el primer enlace: " + listaEnlaces[0].href);
        console.log("Este es el último enlace: " + listaEnlaces[cantidadEnlaces - 1].href);
    }
}

// Verificar que un elemento contenga la clase
function contieneClase(id, clase){
    var instrumento = document.getElementById(id);
    if (instrumento != null){
        console.log(instrumento.classList.contains(clase));
    }else{
        console.log("No existe el elemento con ese instrumento(" + id + ")");
    }
}

contieneClase("saxofon", "madera"); // Muestra true
contieneClase("saxofon", "metal"); // Muestra false
contieneClase("trompeta", "metal"); // Muestra true
contieneClase("contrabajo", "cuerda"); // Muestra "Ningún elemento posee el id contrabajo"