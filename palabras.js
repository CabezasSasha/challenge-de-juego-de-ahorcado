const bancoPalabras = [
    "alimentacion",
    "nutricion",
    "proteina",
    "frutas",
    "aceite",
    "verdudas",
    "tarta",
    "lipidos",
    "omega",
    "manzana",
    "frutas secas",
    "semilla",
    "azucar",
    "edulcorante",
    "cafe",
    "monosacarosa",
    "vitamina",
    "minerales",
    "tomate",
    "espinaca",
    "papa",
    "bocadillo",
    "albahaca",
    "frutilla",
    "mora",
    "uva",
    "pollo",
    "pescado",
    "cereales",
    "legumbres",
    "disacarido",
]


function validarPalabra(letraIngresada) {
    const pattern = new RegExp('^[A-Z\u00d1]+$', 'i');
    if(!pattern.test(letraIngresada)) {
        swal("¡Solo letras!", `Ha ingresado "${letraIngresada.toUpperCase()}" y solo se permiten letras.`, "warning");
        return false;
    } else {
        return true;
    }
}

function crearMsjError(msjError){
    if(msjError.length > 0){
        var elementoError = document.querySelector("#msjError");
        elementoError.textContent = msjError;
    }
}

function vaciarMsj(id){
    var mensajeError = document.querySelector(id);
    mensajeError.innerHTML = "";
}

function msjPalabraCorrecta(nuevaPalabra){
    var msjPalabraCorrecta = document.querySelector("#msjCorrecto");
    msjPalabraCorrecta.innerHTML = "La palabra " + nuevaPalabra + " fue agregada con éxito"
}


