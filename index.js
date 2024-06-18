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

 console.log(numeros)