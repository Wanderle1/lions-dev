var i
var somaPar = 0
var somaImpar = 0
var mediaPar = 0
var mediaImpar = 0
var totasPares = 0
var totalImpares = 0

for (i = 0; i <= 999; i++) {
    if (i % 2 == 0){
        somaPar += i
        totasPares ++ 
    }
    else{
        somaImpar += i
        totalImpares ++
    }

}

mediaPar = somaPar / totasPares
mediaImpar = somaImpar / totalImpares
console.log(`Á media dos Pares é ${mediaPar}`)
console.log(`Á media dos Impares é ${mediaImpar}`)
console.log(`Á soma dos Pares é ${somaPar}`)
console.log(`Á soma dos Impares é ${somaImpar}`)
console.log(`O total de Pares é ${totasPares}`)
console.log(`O total de Impares é ${totalImpares}`)

if (somaPar > somaImpar){
    console.log('a soma dos Pares é maior que a soma dos Impares')

}else if(somaPar < somaImpar){
    console.log('a soma dos Impares é maior que a soma dos Pares')
}else{
    console.log('a soma de ambos é igual')
}