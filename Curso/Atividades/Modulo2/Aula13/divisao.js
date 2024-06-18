var num = 0

console.log('Digite um Numero')
process.stdin.once('data', function(data){
    num = parseFloat(data.toString().trim())
    processamento(num)
    process.exit()
})

function processamento(num){
    if (num % 5 == 0){
        console.log(`O numero ${num} é divisível por 5`)
    }else{
        console.log(`O numero ${num} não é divisível por 5`)
    }
}
