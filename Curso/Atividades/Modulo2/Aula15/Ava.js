let notas = [7.5,8.0,6.0,9.5,5.0,8.5,7.0,10.0,6.5,9.0,]
let soma = 0
let media = 0
let acMedia = []
let abMedia = []
let maxima = notas[0]
let minima = notas[0]
let i

for(i = 0; i < notas.length; i++){
    soma = soma + notas[i]
}
media = soma / notas.length

for(i = 0; i < notas.length; i++){
    if(notas[i] > maxima){
        maxima = notas[i]
    }
    if(notas[i] < minima){
        minima = notas[i]
    }
}

for(i = 0; i < notas.length; i++){
    if(notas[i] >= 6.0){
        acMedia.push(notas[i])
    }else{
        abMedia.push(notas[i])
    }
}

notas.push(8.3)

console.log(`media das notas é ${media}`)
console.log(`nota mais alta é ${maxima}`)
console.log(`nota mais baixa é ${minima}`)
console.log(`notas acima da media são ${acMedia}`)
console.log(`notas abaixo da media são ${abMedia}`)
console.log(`Essas são todas as notas= ${notas}`)