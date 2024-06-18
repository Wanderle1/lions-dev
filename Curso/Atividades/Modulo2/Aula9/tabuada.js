var numero
var i

console.log('Digite um numero')
process.stdin.once('data', function(data){
    numero = parseInt(data.toString().trim())
    processamento(numero)
    process.exit()
})

function processamento(numero) {
    for (i = 0; i <= 100; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`)
    }
}