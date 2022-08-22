"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
	this.value = value
	this.left = null
	this.right = null
}

BinarySearchTree.prototype.size = function () {
	var contador = 1
	if (this.right) contador += this.right.size()
	if (this.left) contador += this.left.size()
	return contador
}

BinarySearchTree.prototype.insert = function (value) {
	if (value > this.value) {
		if (!this.right) this.right = new BinarySearchTree(value)
		else this.right.insert(value)
	} else {
		if (!this.left) this.left = new BinarySearchTree(value)
		else this.left.insert(value)
	}
}

BinarySearchTree.prototype.contains = function (value) {
	if (this.value === value) return true
	if (this.right) {
		if (this.right.contains(value)) return true
	}
	if (this.left) {
		if (this.left.contains(value)) return true
	}
	return false
}

BinarySearchTree.prototype.depthFirstForEach = function (cb, orden) {
	switch(orden){
		case 'pre-order':
		cb(this.value)
		if(this.left) this.left.depthFirstForEach(cb,orden)
		if(this.right) this.right.depthFirstForEach(cb,orden)
		break
		case 'post-order':
		if(this.left) this.left.depthFirstForEach(cb,orden)
		if(this.right) this.right.depthFirstForEach(cb,orden)
		cb(this.value)
		break
		default:
		if(this.left) this.left.depthFirstForEach(cb,orden)
		cb(this.value)
		if(this.right) this.right.depthFirstForEach(cb,orden)
		break
	}
}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array=[]) {
	cb(this.value)
	if(this.left) array.push(this.left)
	if(this.right) array.push(this.right)
	var siguiente = array.shift()
	if(siguiente) siguiente.breadthFirstForEach(cb, array)
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
	BinarySearchTree,
};
