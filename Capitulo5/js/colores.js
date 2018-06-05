var elemParrafo = document.getElementsByTagName("p");

function cambiarColor(colorTecla){
    for (var i = 0; i < elemParrafo.length; i++){
        elemParrafo[i].style.color = colorTecla;
    };
};

function cambiarColorSegunTecla(tecla){
    if (tecla.key === "R" || tecla.key === "r")
    {
        cambiarColor("red")
    }
    else if (tecla.key === "V" || tecla.key === "v"){
        cambiarColor("green")
    }
    else if (tecla.key === "A" || tecla.key === "a")
    {
        cambiarColor("blue")
    }
};

document.addEventListener("keydown", cambiarColorSegunTecla);


