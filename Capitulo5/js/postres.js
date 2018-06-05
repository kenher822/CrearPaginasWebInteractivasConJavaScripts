var boton = document.querySelector("button")
contador = 1;

function agregarPostre(){
    var nuevoPostre = prompt("Ingrese el nuevo postre:");
    idNuevoPostre = document.getElementById("postres").id + String("_" + contador);
    contador += 1;
    var elemPostres = document.createElement("li");
    elemPostres.id = idNuevoPostre;
    elemPostres.textContent = nuevoPostre;
    document.getElementById("postres").appendChild(elemPostres);
};

boton.addEventListener("click", agregarPostre);