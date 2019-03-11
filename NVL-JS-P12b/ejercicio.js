// Asumiendo que Math.floor((Math.random() * 100) + 1); saca elementos al azar entre 1 y 100, queremos que hagas lo siguiente:

 

//    Saca 50 números al azar entre 1 y 100
//    Almacena los números que salgan impares en un array impares
//    Almacena los números que salgan pares en un array pares


var miArreglo = [];
var arregloPar = [];
var arregloImpar = [];

function arreglarPar(arreglo,arregloPares) {
	if ((arreglo)%2== 0) {
		arregloPares.push(arreglo);
	}
}
function arreglarImpar(arreglo,arregloPares) {
	if ((arreglo)%2 != 0) {
		arregloPares.push(arreglo);
	}
}

var j = 67;

for (var i = 0; i < 50; i++) {
	miArreglo[i] = Math.floor((Math.random() * 100) + 1);
    arreglarPar(miArreglo[i], arregloPar);
    arreglarImpar(miArreglo[i], arregloImpar);
}




