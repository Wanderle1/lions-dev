let nome
let idade
const ano = 2024

console.log('Qual o seu nome?')
process.stdin.once('data', function(data){
    nome = data.toString().trim()

console.log('Qual a sua idade')
    process.stdin.once('data', function(data){
    idade = parseInt(data.toString(). trim())
    processamento(nome, idade)
    process.exit()
    })
})

function processamento(nome, idade){
    let nascimento = ano - idade
    let nascimento2 = nascimento- 1
    console.log(`olá ${nome}, você tem ${idade} anos e nasceu em ${nascimento} ,caso não tenha feito Aniversario este ano você nasceu em ${nascimento2}`)
}