// Lista de países
var listaPaises = [
    "Afganistán,",
    "Albania,",
    "Alemania,",
    "Andorra,",
    "Angola,",
    "Antigua y Barbu,",
    "Arabia Saudita,",
    "Argelia,",
    "Argentina,",
    " Armenia,",
    " Australia,",
    " Austria,",
    " Azerbaiyán,",
    " Bahamas,",
    " Bangladés,",
    " Barbados,",
    " Baréin,",
    " Bélgica,",
    " Belice,",
    " Benín,",
    " Bielorrusia,",
    " Birmania,",
    " Bolivia,",
    " Bosnia y Herze,",
    " Botsuana,",
    " Brasil,",
    " Brunéi,",
    " Bulgaria,",
    " Burkina Faso,",
    " Burundi,",
    " Bután,",
    " Cabo Verde,",
    " Camboya,",
    " Camerún,",
    " Canadá,",
    " Catar,",
    " Chad,",
    " Chile,",
    " China,",
    " Chipre,",
    " Ciudad del Vat,",
    " Colombia,",
    " Comoras,",
    " Corea del Nort,",
    " Corea del Sur,",
    " Costa de Marfi,",
    " Costa Rica,",
    " Croacia,",
    " Cuba,",
    " Dinamarca,",
    " Dominica,",
    " Ecuador,",
    " Egipto,",
    " El Salvador",
    " Emiratos Árabe,",
    " Eritrea,",
    " Eslovaquia,",
    " Eslovenia,",
    " España,",
    " Estados Unidos,",
    " Estonia,",
    " Etiopía,",
    " Filipinas,",
    " Finlandia,",
    " Fiyi,",
    " Francia,",
    " Gabón,",
    " Gambia,",
    " Georgia,",
    " Ghana,",
    " Granada,",
    " Grecia,",
    " Guatemala,",
    " Guyana,",
    " Guinea,",
    " Guinea ecuator,",
    " Guinea-Bisáu,",
    " Haití,",
    " Honduras,",
    " Hungría,",
    " India,",
    " Indonesia,",
    " Irak,",
    " Irán,",
    " Irlanda,",
    " Islandia,",
    " Islas Marshall,",
    " Islas Salomón,",
    " Israel,",
    " Italia,",
    " Jamaica,",
    " Japón,",
    " Jordania,",
    " Kazajistán,",
    " Kenia,",
    " Kirguistán,",
    " Kiribati,",
    " Kuwait,",
    " Laos,",
    ". Lesoto,",
    ". Letonia,",
    ". Líbano,",
    ". Liberia,",
    ". Libia,",
    ". Liechtenstein,",
    ". Lituania,",
    ". Luxemburgo,",
    ". Madagascar,",
    ". Malasia,",
    ". Malaui,",
    ". Maldivas,",
    ". Malí,",
    ". Malta,",
    ". Marruecos,",
    ". Mauricio,",
    ". Mauritania,",
    ". México,",
    ". Micronesia,",
    ". Moldavia,",
    ". Mónaco,",
    ". Mongolia,",
    ". Montenegro,",
    ". Mozambique,",
    ". Namibia,",
    ". Nauru,",
    ". Nepal,",
    ". Nicaragua,",
    ". Níger,",
    ". Nigeria,",
    ". Noruega,",
    ". Nueva Zelanda,",
    ". Omán,",
    ". Países Bajos,",
    ". Pakistán,",
    ". Palaos,",
    ". Panamá,",
    ". Papúa Nueva G,",
    ". Paraguay,",
    ". Perú,",
    ". Polonia,",
    ". Portugal,",
    ". Reino Unido,",
    ". República Cen,",
    ". República Che,",
    ". República de ,",
    ". República del,",
    ". República Dem,",
    ". República Dom,",
    ". República Sud,",
    ". Ruanda,",
    ". Rumanía,",
    ". Rusia,",
    ". Samoa,",
    ". San Cristóbal,",
    ". San Marino,",
    ". San Vicente y,",
    ". Santa Lucía,",
    ". Santo Tomé y ,",
    ". Senegal,",
    ". Serbia,",
    ". Seychelles,",
    ". Sierra Leona,",
    ". Singapur,",
    ". Siria,",
    ". Somalia,",
    ". Sri Lanka,",
    ". Suazilandia,",
    ". Sudán,",
    ". Sudán del Sur,",
    ". Suecia,",
    ". Suiza,",
    ". Surinam,",
    ". Tailandia,",
    ". Tanzania,",
    ". Tayikistán,",
    ". Timor Orienta,",
    ". Togo,",
    ". Tonga,",
    ". Trinidad y To,",
    ". Túnez,",
    ". Turkmenistán,",
    ". Turquía,",
    ". Tuvalu,",
    ". Ucrania,",
    ". Uganda,",
    "Uruguay,",
    "Uzbekistán,",
    "Vanuatu,",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Yibuti,",
    "Zambia,",
    "Zimbabue",
    
  
];

var paisElt = document.querySelector("input");
var sugerenciasElt = document.getElementById("sugerencias");

// Gestor del cambio de valor introducido
paisElt.addEventListener("input", function(){
    // Eliminación de la lista previa de sugerencias
    sugerenciasElt.innerHTML = ""; 
    listaPaises.forEach(function(pais){
        // Si el valor introducido corresponde al comienzo del nombre de algún país
        if (pais.toLowerCase().indexOf(paisElt.value) === 0){
            var sugerenciaElt = document.createElement("div");
            sugerenciaElt.classList.add("sugerencia");
            sugerenciaElt.textContent = pais;
            //Gestoma eñ click sobre una sugerencia
            sugerenciaElt.addEventListener("click", function(e){
                // Reemplaza el valor introducido por una sugerencia
                paisElt.value = e.target.textContent;
                // Vacía la lista de sugerencia
                sugerenciasElt.innerHTML = "";                
            });
            sugerenciasElt.appendChild(sugerenciaElt);
        }
    });
});