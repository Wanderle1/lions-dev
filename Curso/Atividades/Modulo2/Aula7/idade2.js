let idade
let nome
let aniversario
const ano = 2024

console.log('Qual o seu nome?')
process.stdin.once('data', function(data) {
    idade = data.toString().trim()

console.log('qual a sua idade?')
process.stdin.once('data', function(data){
    nome =data.toString().trim()
    

    console.log('Você já fez aniversario esse ano?')
    process.stdin.once('data', function(data){
        aniversario = data.toString().trim()
        processamento(idade, nome, aniversario)
        process.exit()
      })

     
    })
})

function processamento(nome, idade, aniversario){
    let nascimento = ano - idade 
if (aniversario == "sim"){
    console.log(`olá ${nome}, você nasceu em ${nascimento} `)
}else{
    nascimento --
    console.log(`olá ${nome}, você nasceu em ${nascimento}`)
  }
}

