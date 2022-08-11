'use strict'

function BinarioADecimal(num) {
	// tu codigo aca
	var suma = 0;
	for (let i = 0; i < num.length; i++) {
		suma += num[i] * (Math.pow(2, num.length - 1 - i));
	}
	return suma;
}

function DecimalABinario(num) {
	// tu codigo aca
	let binario = 0;
	let sobrante, i = 1;
	while (num != 0) {
		sobrante = num % 2;
		num = Math.floor(num / 2);
		binario += sobrante * i;
		i = i * 10;
	}
	return binario.toString();
}


module.exports = {
	BinarioADecimal,
	DecimalABinario,
}