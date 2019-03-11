function polindromo(frase) {
    var n = frase.length -1;
    var fraseInv = [];
    var i= 0;
    while (i <= n) { if
    	(frase[i] == frase[(n-i)]) {
        i++; } else {return alert('La frase NO es polindroma');}
    }
    return alert('La frase es polindroma');
}
