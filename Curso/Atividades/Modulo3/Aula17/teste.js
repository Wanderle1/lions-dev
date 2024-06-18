const readline = require('readline')
let numero = Math.floor(Math.random() * 100)+ 1 
let tentativas = 0
let max = 10

console.log('Boas Vindas ao Game')

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

function perguntarContinuacao() {
rl.question('Digite um Número ', (resposta) => {
    console.log(`Você digitou: ${resposta}`)
    tentativas++

    if(tentativas < max){
        switch(true){
            case(numero > resposta):
                console.log('número errado,O número é maior')
                perguntarContinuacao() 
            break;
            case(numero < resposta):
                console.log('número errado, O número é menor')
                perguntarContinuacao() 
            break;
            case(numero == resposta):
                console.log('você Acertou.Parabéns') 
                rl.close()
            break;    
            default:
                console.log('Número invalido, Tente Novamente')  
                perguntarContinuacao() 
            break; 
        } 
       
    }else{
        console.log(`Você Ultrapassou a quantidades de tentativas, O Número correto éra ${numero}`)
        rl.close()
    }
})
}