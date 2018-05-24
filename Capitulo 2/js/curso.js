var titulosElts = document.getElementsByTagName("h2"); // Todos los títulos h2
console.log(titulosElts[0]); // Muestra el primer título h2
console.log(titulosElts.length); // Muestra 3 (existen 3 elementos h2 en la página)

// Selecciona todos los elementeos cuyo nombre de la clase sea "maravillas"
var maravillasElts = document.getElementsByClassName("maravillas");
for(var i = 0; i <= maravillasElts.length; i++){
    console.log(maravillasElts[i]);
}