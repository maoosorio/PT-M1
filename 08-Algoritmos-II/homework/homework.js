'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
	// Implementar el método conocido como quickSort para ordenar de menor a mayor
	// el array recibido como parámetro
	// Devolver el array ordenado resultante
	// Tu código:
	if (array.length <= 1) {
		return array;
	} else {

		var izq = [];
		var der = [];
		var newArray = [];
		var pivote = array.pop();
		var length = array.length;

		for (var i = 0; i < length; i++) {
			if (array[i] <= pivote) {
				izq.push(array[i]);
			} else {
				der.push(array[i]);
			}
		}

		return newArray.concat(quickSort(izq), pivote, quickSort(der));
	}
}

function mergeSort(array) {
	// Implementar el método conocido como mergeSort para ordenar de menor a mayor
	// el array recibido como parámetro
	// Devolver el array ordenado resultante
	// Tu código:
	if (array.length == 1) {
		return array;
	}
	let medio = Math.floor(array.length / 2),
		izq = array.slice(0, medio),
		der = array.slice(medio);

	return merge(mergeSort(izq), mergeSort(der));
}

function merge(izq, der) {
	let izqIndex = 0,
		derIndex = 0,
		result = [];
	while (izqIndex < izq.length && derIndex < der.length) {
		if (izq[izqIndex] > der[derIndex]) {
			result.push(der[derIndex]);
			derIndex++;
		} else {
			result.push(izq[izqIndex]);
			izqIndex++;
		}
	}
	return result.concat(izq.slice(izqIndex), der.slice(derIndex));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
	quickSort,
	mergeSort,
};
