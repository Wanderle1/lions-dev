let nota1
let nota2
let media

console.log('Digite sua primeira nota')
process.stdin.once('data', function(data){
    nota1 = parseFloat(data.toString().trim())

    console.log('Digite sua segunda nota')
process.stdin.once('data', function(data){
    nota2 = parseFloat(data.toString().trim())
    processamento(nota1, nota2)
    process.exit()
   })
})

function processamento(nota1, nota2){
    media = (nota1 + nota2) / 2
    if(media < 7) {
        console.log(`Que pena, você ficou de recuperação pois sua media é ${media}`)
    }else{
        console.log(`Parabéns, você passou pois sua media é ${media}`)
    }
}