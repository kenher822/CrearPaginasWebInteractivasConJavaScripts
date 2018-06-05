var contador = 0;
var elemClick = document.getElementById("click-button");
var elemMostrarConteo = document.getElementById("contador-clicks");
var elemDesactivarConteo = document.getElementById("desactivar")

function mostrarContador(){
    elemMostrarConteo.textContent = contador;
};

elemClick.addEventListener("click", function () {
    contador = contador + 1;
    mostrarContador();
});

elemDesactivarConteo.addEventListener("click", function(){
    contador = 0;
    mostrarContador();
});

