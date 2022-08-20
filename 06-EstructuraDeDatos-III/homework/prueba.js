var countBits = function(n) {
  var array = []
  var numero = 0
  while(n != 0){
    let residuo = n%2
    array.push(residuo)
    n= Math.floor(n/2)
  }
  for(let i=0; i<array.length;i++){
    numero += array[i] 
  }
  return numero
};

console.log(countBits(1234));