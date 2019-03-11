var numerosPrimos = [];

function arrayPrimos(n) {
	if (n==0) {return numerosPrimos=0;}

	for (var i = 1; i <= n; i++) {
		var j = 1;
		var c = 0;
		while ( j <= i) {
			if (i%j == 0) {c++;}
		j++;
		}
		if (c <= 2) { 
			numerosPrimos.push(i);

		}  
	}
    }
