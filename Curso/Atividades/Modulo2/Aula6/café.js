let resposta
let gostaDeCafe

console.log ('vocẽ gosta de café?')
process.stdin.on('data', function(data) {
    resposta = data.toString().trim()
    processamento(resposta)
    process.exit()
})

function processamento(resposta){
    if (resposta.toLowerCase() == 'sim' ) {
        gostaDeCafe = true
        console.log('legal')
    } else{
        gostaDeCafe = false
        console.log('D:')
    } 
}