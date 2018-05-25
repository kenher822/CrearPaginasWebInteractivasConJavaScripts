
// Escribe la función contarElementos
function contarElementos(elemento) {
    var cantidadElementos;
    switch (elemento){
        case "h1":
            cantidadElementos = document.querySelectorAll(elemento).length;
            break;
        case "#listaMetodos":
            cantidadElementos = document.getElementById(elemento).length;
            break;
        case "li":
            cantidadElementos = document.getElementsByTagName(elemento).length;
            break;
        case "ul > .varios":
            cantidadElementos = document.querySelectorAll(elemento).length;
            break;
        case "ul > .uno":
            cantidadElementos = document.querySelectorAll(elemento).length;
            break;
    }
    return cantidadElementos;
}

function contarElementos(selector){
    return document.querySelectorAll(selector).length;
}



console.log(contarElementos("h1")); // Debe mostrar 1
console.log(contarElementos("#lista-metodos")); // Debe mostrar 1
console.log(contarElementos("li")); // Debe mostrar 5
console.log(contarElementos("ul > .varios")); // Debe mostrar 3
console.log(contarElementos("ul > .uno")); // Debe mostrar 2
