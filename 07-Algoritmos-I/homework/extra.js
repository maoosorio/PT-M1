function bubbleSort(array) {
	var resultante = []
    var aux = 0
	// resultante.shift(array.slice(Math.max(...array)))
    for(let i = 0; i < array.length; i++ ){
        if(array[i] < array[i+1]){
            aux = array[i]
            resultante.push(aux)
            aux = 0
        }else{
            aux = array[i+1]
            resultante.push(aux)
            aux =0 
        }
	// console.log(i + ' es: ' + array[i]) 
    }
}
bubbleSort([2,5,1,8,4])

resultante [2]