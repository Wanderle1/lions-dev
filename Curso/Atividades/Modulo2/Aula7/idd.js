let nome
let idade
let m
let maiorIdade

console.log('Qual o seu nome?')
process.stdin.once('data', function(data) {
    nome = data.toString().trim()

console.log('Qual a sua idade?')
process.stdin.once('data', function(data){
    idade = data.toString().trim()
    processamento(nome, idade)
    process.exit()
  })
})

function processamento(nome, idade){
    if (idade >= 18){
        console.log(`Parabéns ${nome}, você é maior de idade`)
    }else {
        idade = 18 - idade
        console.log(`olá ${nome}, você é menor de idade e fara 18 em ${idade} anos`)
    }
}