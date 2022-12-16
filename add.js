function add(listaDeNumeros) {
    var total = 0;
    var listaDeNumerosInteiros = listaDeNumeros.split(',');
    for (var i = 0; i < listaDeNumerosInteiros.length; i++) {
        var numeroAtual = +listaDeNumerosInteiros[i];
        if (numeroAtual < 0) {
            return -1;
        }
        if (isNaN(numeroAtual)) {
            continue;
        }
        if (isIntervaloPermitido(numeroAtual)) {
            total += numeroAtual;
        }
    }
    return total;
}

function isIntervaloPermitido(numeroAtual) {

    var valorMaximo = 1000;
    var valorMinimo = 0;

    return numeroAtual >= valorMinimo && numeroAtual <= valorMaximo;
}


// Code-smells
// nome das variávies pouco legível
// magic number
// cadeia de if
module.exports = add;