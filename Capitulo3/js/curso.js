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

/*
Podemos utilizar la propiedad  classList  para añadir o suprimir clases a un elemento del DOM. Para ello, empleamos los métodos  add y  remove , como en el siguiente ejemplo. 
*/

var tituloElt = document.querySelector("h1"); // Acceso al primer titulo h1
tituloElt.classList.remove("titulo"); // Supresión de la clase "titulo"
tituloElt.classList.add("encabezado") // Adición de la clase "encabezado"
console.log(tituloElt);

/*
La adición de un nuevo elemento a una página web puede descomponerse en tres operaciones:
    Creación del nuevo elemento.
    Definición de las informaciones necesarios de dicho elemento.
    Inserción del nuevo elemento en el DOM.
Por ejemplo, si queremos añadir el lenguaje "Java" a la lista, lo haremos de la siguiente forma.
*/

var javaElt = document.createElement("li"); // Creación de un elemento li
javaElt.id = "java";
javaElt.textContent = "Java";
document.getElementById("lenguajes").appendChild(javaElt); // Inserción del nuevo elemento
console.log("Agregando el elemento " + javaElt.textContent + " a la lista")

/*
Otras formas de añadir un elemento
Creación de un nodo de texto
En el ejemplo anterior, hemos definido el contenido de texto del nuevo elemento con ayuda de la propiedad  textContent. Esto se puede hacer también añadiendo un nuevo nodo hijo de tipo texto. Para esto utilizamos el método  createTextNode. Seguidamente, añadimos el nuevo nodo de texto al elemento con  appendChild.

Es posible combinar las dos operaciones en una sola línea, como en el ejemplo siguiente en el que añadimos "C" a la lista.
*/


