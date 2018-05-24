if (document.body.nodeType === document.ELEMENT_NODE) {
    console.log("Body es un nodo elemento (etiqueta de html como div, p, h1, etc...)");
} else {
    console.log("Body es un nodo de texto...");
}

// Declarar variable que contiene los nodos hijos del body
var nodes = document.body.childNodes;
for (var i = 0; i < nodes.length; i++) {
    // Acceder a los hijos del nodo body
    console.log(nodes[i]);
}

// Declarar variable que contiene el nodo padre del h1
var nodes_h1 = document.body.childNodes[1];
console.log(nodes_h1.parentNode); // Muestra el nodo body

console.log(document.parentNode); // Muestra null, puesto que document no tiene ningún padre 

