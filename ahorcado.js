function elegirPalabra(lista){
    var indicePalabra = Math.floor(Math.random()*lista.length);
    console.log(indicePalabra);
    var palabraElegida = lista[indicePalabra];
    console.log(palabraElegida);
    return palabraElegida;
}

function validarLetra(letraIngresada) {
    const pattern = new RegExp('^[a-z\u00d1]+$', 'i');
    if(!pattern.test(letraIngresada) || letraIngresada.length > 1) {
        swal("¡Solo letras!", `Ha ingresado "${letraIngresada.toUpperCase()}" y solo se permiten letras.`, "warning");
        return false;
    } else {
        return true;
    }
}
function buscarLetra(letra, palabra){
    listaIndices=[];
    for (var i = 0; i < palabra.length; i++){
        if(palabra[i] == letra){
            listaIndices.push(i);
        }
    }
    return listaIndices;
}
