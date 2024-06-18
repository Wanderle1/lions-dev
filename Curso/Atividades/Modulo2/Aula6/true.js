let resposta

console.log('Digite um numero aleatorio')
process.stdin.on('data', function(data) {
    resposta = data.toString().trim()
    processamento(resposta)
})

function processamento(resposta){
    if (resposta == 0){
        console.log('o numero que você digitou é 0')
    } else if (resposta % 2 == 0){
        console.log(`o numero é par`)
    } else if (resposta.toLowerCase() === "sair")
        process.exit()
    else {
        console.log('o numero que você digitou é impar')
    }   
}