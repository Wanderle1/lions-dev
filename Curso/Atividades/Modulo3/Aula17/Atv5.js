const readline = require('readline')
let numero = Math.floor(Math.random() * 100)+ 1 
let tentativas = []

console.log('Boas Vindas ao Game')

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

function perguntarContinuacao() {
rl.question('Digite um Número ', (resposta) => {
console.log(`Você digitou: ${resposta}`)

if (resposta != numero) {
console.log('Número errado. Vamos continuar!')
tentativas.push(resposta)
    if(resposta > numero){
        console.log('O numero é menor')
    }else{
        console.log('O numero é maior')
    }
perguntarContinuacao()
} else {
console.log('Voce Aceertou .Programa encerrado.')
console.log(`Você presisou de ${tentativas.length + 1} para Acertar`)
rl.close()
}
})
}

perguntarContinuacao()