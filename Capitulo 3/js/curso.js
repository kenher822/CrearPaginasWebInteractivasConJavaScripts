// Modificación del contenido HTML de la lista
document.getElementById("lenguajes").innerHTML += '<li id="c">C</li>';

//Supresión del contenido HTML de la lista
//document.getElementById("lenguajes").innerHTML = '';

// Modificiación del contenido de texto del primer título
document.querySelector("h1").textContent += " más populares en la web";

// Definición del atributo "id" del primer título h1. El valor otrogado al atrinuto id es "titulo"
document.querySelector("h1").setAttribute("id", "titulo");

/*
Ciertos atributos como  id,  href y  value  son directamente modificables bajo la forma de propiedades. El código a continuación es equivalente al que acabas de ver arriba.
*/
document.querySelector("h1").id = "titulo";