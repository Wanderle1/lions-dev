let num = 0

console.log('Qual é o número do Dado?')

process.stdin.once('data', function(data){
    num = parseInt(data.toString(). trim())
    processamento(num)
    process.exit()
})

function processamento(num){
   console.log(`O número é ${Math.floor(Math.random() * num) + 1}`)
}
