var boton = document.querySelector("button")
contador = 1;

/* 
function editarNombre(idPostre) {
    var nuevoNombre = prompt("Introduzca el nombre a cambiar:");
    var elemPostres = document.createElement("li");
    elemPostres.id = document.getElementById("postres").id + String("_" + contador);
    elemPostres.textContent = nuevoNombre;
    elemPostres.replaceChild(elemPostres, document.getElementById(idPostre));
    contador += 1;
};
*/


boton.addEventListener("click", function () {
    var nuevoPostre = prompt("Ingrese el nuevo postre:");
    idNuevoPostre = document.getElementById("postres").id + String("_" + contador);
    var elemPostres = document.createElement("li");
    elemPostres.id = idNuevoPostre;
    elemPostres.textContent = nuevoPostre;
    document.getElementById("postres").appendChild(elemPostres);

    // bonus
    elemPostres.addEventListener("click", function(e){
        var nuevoNombre = prompt("Introduzca el nombre a cambiar: " + e.target.textContent);
        e.target.textContent = nuevoNombre;
    });
    contador += 1;
});
