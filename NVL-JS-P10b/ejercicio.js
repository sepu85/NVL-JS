// Asumiendo que Math.floor((Math.random() * 100) + 1); saca elementos al azar entre 1 y 100, queremos que hagas lo siguiente:

 

//    Saca 50 números al azar entre 1 y 100
//    Almacena los números que salgan impares en un array impares
//    Almacena los números que salgan pares en un array pares


var miArreglo = [];
var arregloPar = [];
var arregloImpar = [];



for (var i = 0; i < 50; i++) {
	miArreglo[i] = Math.floor((Math.random() * 100) + 1);
	if ((miArreglo[i]%2)==0) {
		arregloPar.push(miArreglo[i]);

	} else {
		arregloImpar.push(miArreglo[i]);
	}


}


