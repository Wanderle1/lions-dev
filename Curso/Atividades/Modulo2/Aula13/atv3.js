var i
var numero = [1,2,3,4,5,6,7,8,9,10]
var impares  = []

for (i = 0; i < 10; i++) {
    if (numero[i] % 2 != 0){
        impares.push(numero[i])
    }
}

console.log(impares)