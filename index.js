let numeros = [90, 90, 95, 83, 83, 74, 96, 50];
for (let i = 0; i < numeros.length; i++) {
  for (let j = i + 1; j < numeros.length; j++ ) {
    if(numeros[i] > numeros[j]){
let aux = numeros[i]
      numeros[i] = numeros[j]
      numeros[j] = aux
    }
  }
}
for (let i = 0; i < numeros.length; i++) {
  for (let j = 0; j < numeros.length; j++) {
    if(numeros[i] == numeros[j]) {
      numeros.splice(j, 1)
     j--
    }
  }
}
 
console.log(numeros)