'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
	// Factorear el número recibido como parámetro y devolver en un array
	// los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
	// Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
	// Tu código:
	var array = [1]
	var acum = num;
	for (let i = 2; i < num; i++) {
		while (acum % i === 0) {
			//acc = num/i
			array.push(i)
			//console.log(arr)
			acum = acum / i

			//console.log(acc)
		}
	}
	return array

	/*
	Solucion del profe
	let result = [1]
	let val = 2
	while (num > 1){
		if( num%val === 0){
			result.push(val)
			num=num/val	
		}else{
			val++
		}
	}
	return result
	*/
}

function bubbleSort(array) {
	// Implementar el método conocido como bubbleSort para ordenar de menor a mayor
	// el array recibido como parámetro
	// Devolver el array ordenado resultante
	// Tu código:
	let aux = 0;
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] > array[j]) {
				aux = array[i];
				array[i] = array[j];
				array[j] = aux;
			}
		}
	}
	return array;

	/*
	solucion del profe
	let swap = true
	while(swap){
		swap = false
		for(let i = 0; i < array.length; i++){
			if(array[i] > array[i+1]){
				let temp = array[i]
				array[i] = array[i+1]
				array[i+1] = temp
				swap = true
			}
		}
	}	
	return array
	*/
}


function insertionSort(array) {
	// Implementar el método conocido como insertionSort para ordenar de menor a mayor
	// el array recibido como parámetro utilizando arreglos
	// Devolver el array ordenado resultante
	// Tu código:
	// return array.sort((a, b) => a - b)
	for (let i = 1; i < array.length; i++) {
		let j = i - 1;
		var aux = array[i];
		while (j >= 0 && array[j] > aux) {
			array[j + 1] = array[j];
			j--;
		}
		array[j + 1] = aux
	}
	return array;

	/* 
	solucion profe
	for(let i = 1; i<array.length; i++){
		let x = i-1
		let temp = array[i]
		while(x >= 0 && temp < array[x]){
			array[x+1] = array[x]
			x--
		}
		array[x+1] = temp
	}
	return array
	*/
}


function selectionSort(array) {
	// Implementar el método conocido como selectionSort para ordenar de menor a mayor
	// el array recibido como parámetro utilizando dos arreglos
	// Devolver el array ordenado resultante
	// Tu código:
	// return array.sort((a, b) => a - b)
	let largo = array.length;

	for (let i = 0; i < largo; i++) {// busco mas chico
		let bandera = i;

		for (let j = i + 1; j < largo; j++) {
			if (array[j] < array[bandera]) {
				bandera = j;
			}
		}
		if (bandera != i) {   // cambio de bandera
			let aux = array[i];
			array[i] = array[bandera];
			array[bandera] = aux;
		}
	}
	return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
	factorear,
	bubbleSort,
	insertionSort,
	selectionSort,
};
